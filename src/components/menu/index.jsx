import React from "react";
import "../../components/menu/index.css";

function Menu() {
    return (
        <header>
            <div className="titulo_nav">
                <h2>NavBar</h2>
            </div>
            <div className="lista">
                <ul>
                    <li>Home</li>
                    <li>Categoria</li>
                    <li>Filmes</li>
                </ul>
            </div>
        </header>
    )
}

export default Menu;