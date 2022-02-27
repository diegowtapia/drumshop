import React from "react";
import { ItemListContainer } from "../ItemListContainer/ItemListContainer";

export const Home = () => {
    return (
        <main>
            <h2 className="text-center mt-5">Productos</h2>
            <ItemListContainer />
        </main>
    )
}

