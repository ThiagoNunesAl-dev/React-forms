import React, { Component } from "react";
import "../../pages/filmes/index.css";
import Menu from "../../components/menu";

class Filmes extends Component {
    componentDidMount() {
        this.listarCategorias();
        this.listarNomes();
        this.listarAnos();
    }

    listarCategorias() {
        fetch("https://5f975ae242706e0016956fcb.mockapi.io/api/categorias", {
            method : "GET"
        })
        .then(response => response.json())
        .then(dados  => {
            console.log(dados);
        })
        .catch(err => console.error(err));
    }

    listarNomes() {
        fetch("https://5f975ae242706e0016956fcb.mockapi.io/api/categorias", {
            method : "GET"
        })
        .then(response => response.json())
        .then(dados => {
            console.log(dados);
        })
        .catch(err => console.error(err));
    }

    listarAnos() {
        fetch("https://5f975ae242706e0016956fcb.mockapi.io/api/categorias", {
            method : "GET"
        })
        .then(response => response.json())
        .then(dados => {
            console.log(dados);
        })
        .catch(err => console.error(err));
    }

    render() {
        return (
            <div>
                <Menu />
                <div className="titulo_container">
                    <div className="titulo">
                        <h1>Filmes</h1>
                        <p>Gerencie suas categorias</p>
                    </div>                    
                </div>
                <div className="form_container">
                    <form>
                        <input type="text" id="nome" placeholder="Nome do filme" required></input>
                        <input type="text" id="categoria" placeholder="Categoria" required></input>
                        <input type="text" id="ano" placeholder="Ano de lançamento" required></input>
                        <input type="number" id="id" placeholder="Id (somente para apagar ou atualizar)"></input>
    
                        <button type="submit" id="btnCadastrar">Cadastrar</button>
                        <button type="submit" id="btnRemover" disabled>Remover</button>
                        <button type="submit" id="btnEditar" disabled>Editar</button>
            
                        <div className="table_container">
                            <table>
                                <caption>Filmes</caption>
                                <thead>
                                    <tr>
                                        <th>
                                            Id
                                        </th>
                                    </tr>
                                    <tr>
                                        <th>
                                            Nome
                                        </th>
                                    </tr>
                                    <tr>
                                        <th>
                                            Categoria
                                        </th>
                                    </tr>
                                    <tr>
                                        <th>
                                            Ano de Lançamento
                                        </th>
                                    </tr>
                                </thead>
                                <tbody id="tabela-lista-corpo"></tbody>
                            </table>
                        </div>           
                    </form> 
                </div>                  
            </div>
        )
    }
}

export default Filmes;