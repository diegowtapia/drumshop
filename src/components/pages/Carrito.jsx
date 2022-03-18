import React,{useContext,useState,useEffect} from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import { Timestamp,collection, addDoc,doc, updateDoc, getDoc, increment } from "firebase/firestore";
import { db } from "../../services/getFirebase";
import { async } from "@firebase/util";


export default function CarritoFinal(){

    const {arrayCarrito,borrarDelCarrito,AddItem,vaciarCarrito,precio,setForm,form,pagoFinal,productosFiltrados}=useContext(CartContext)

    const [pago,setPago]=useState(true)
    const [validarPago,setValidarPago]=useState(true)
    const [mensajeStock,setMensajestock]=useState("")
    const [pagoBloqueado,setPagoBloqueado]=useState(false)
    const [pagoTerminado,setPagoTerminado]=useState("")
    const [mensajeConfirmacion,setMensajeConfirmacion]=useState("Cargando ...")

    const handleSum=(prod)=>{
        AddItem(
            {name:prod.name,
                cantidad:1,
                precio:prod.precioUnidad,
                id:prod.id,
                stock:prod.stock
            }
        )

    }
    const handleRest=(prod)=>{
        AddItem(
            {name:prod.name,
                cantidad:-1,
                precio:prod.precioUnidad,
                id:prod.id,
                stock:prod.stock
            }
        )
    }

    useEffect(()=>{
        if(productosFiltrados.length!==0){
            const chequearStock = productosFiltrados.map((prodCompra)=>{
                const listaProducto=arrayCarrito.filter(prod=>prod.id === prodCompra.id)
                if(prodCompra.Stock>listaProducto.Stock){
                    return false
                }else{
                    return true
                }
            })
            if(!chequearStock.includes(false)){
                const items = arrayCarrito.map((prod)=>{return{Nombre:prod.nombre,Cantidad:prod.cantidad}})
                let total = 0
                const calcularTotal = arrayCarrito.map((prod)=>total=total+prod.precio*prod.cantidad)

                const order = collection(db,"Compradores")
                const newOrder={
                    comprador:form[0].NOMBRE,
                    mail:form[0].MAIL,
                    numero:form[0].CELULAR,
                    items:items,
                    date: Timestamp.fromDate(new Date()),
                    total:total
                }
                const sendOrder=async()=>{
                    const docAdd=await addDoc(order,newOrder)
                    setPagoTerminado(docAdd.id)
                }
                sendOrder()
                setPagoBloqueado(true)
                setMensajeConfirmacion("Pago Realizado")

                const updateStock=async()=>{
                    const items = arrayCarrito.map((prod)=>{
                        const q = doc(db,"Productos",prod.id)
                        const actualizarStock= updateDoc(q,{
                                Stock: increment(-prod.cantidad)
                            })
                        })
                    }
                updateStock()

            }else{
                setMensajestock("Se termino el stock de un producto")
            }
        }
    },[productosFiltrados])

    const handleClick=()=>{
        if(arrayCarrito.length!==0){
            if(!pagoFinal()){
                setPago(false)
                setValidarPago(false)
            }else{
                setPago(false)
                setValidarPago(true)
            }
        }else{
            setPago(false)
            setValidarPago(false)
        }
    }

    const onSubmit=(data)=>{
        setForm([
            data
        ])
        return(true)
    }

    return(
        <div className="CartContainer">
            <div className="CartContainer-1">
                <ul className="ListaItem">
                    {arrayCarrito.length===0?
                        <div style={{width:"400px"}}>
                            <Link to={"/Tienda/Todo"} style={{ textDecoration: 'none'}}>
                                    <p className="agregarProductos">AGREGAR PRODUCTOS</p>
                            </Link>
                        </div>
                        :
                        arrayCarrito.map(prod=>{
                            return(
                                <div className="ListaItem-line" key={prod.id}>
                                    <li className="ListaItem-Name">{prod.nombre}</li>
                                    <li className="ListaItem-Cant">
                                        <p onClick={()=>handleRest(prod)}>-</p>
                                        {prod.cantidad}
                                        <p onClick={()=>handleSum(prod)}>+</p>
                                    </li>
                                    <li className="ListaItem-precio">{prod.cantidad * prod.precio}</li>
                                    <p className="ListaItem-x" onClick={()=>{borrarDelCarrito(prod.id)}}>X</p>
                                </div>
                            )
                        })
                    }
                </ul>
            </div>
            <div className="CartContainer-2">
                {/*<div className="form-pay">
                    <FormularioPago onSubmit={onSubmit}/>
                </div>*/}
                <br/>
                <div>
                    <p className="vaciarCarrito" onClick={()=>{vaciarCarrito()}}>VACIAR CARRITO</p>
                    <div className="containerInfo">
                        <p>TOTAL:</p>
                        {precio===0?<></>:<p>$ {precio}</p>}
                    </div>
                    {pagoBloqueado===false?
                    <>
                        <p className="botonPagar" onClick={()=>{handleClick()}}>PAGAR</p>
                        {pago?(<p>
                            </p>):validarPago?
                                <p className="validacion-pago">{mensajeConfirmacion}</p>:
                                <p className="validacion-pago" style={{color:"red"}}>Pago Denegado</p>
                        }
                        <p className="validacion-pago" style={{color:"red"}}>{mensajeStock}</p>
                    </>:
                    <>
                        <p className="botonPagar" style={{background:"#315252"}}>PAGAR</p>
                        <p className="validacion-pago">{mensajeConfirmacion}</p>
                        <div className="container-numPedido">
                            <p>NUMERO DE PEDIDO</p>
                            <p className="container-numero">{pagoTerminado}</p>
                        </div>
                    </>}
                </div>
            </div>
        </div>
    )
}