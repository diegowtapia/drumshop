import React from "react";
import { ItemListContainer } from "../ItemListContainer/ItemListContainer";

function Home () {
    return (
        <main>
            <h2 className="text-center mt-5">Productos</h2>
            <ItemListContainer />
        </main>
    )
}

export default Home;
