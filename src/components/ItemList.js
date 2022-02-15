import Item from './Item';


const ItemList = ({ productos }) => {
    return (
        <div>
            
            {productos.map((productos) => (
                <Item {...productos} key={productos.id} />
            ))}
           
        </div>
    );
};

export default ItemList;