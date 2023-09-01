import React from "react";
import { Link } from "react-router-dom";
import { FaEdit, FaTrash } from "react-icons/fa";
import { ListaProdutos } from "./ListaProdutos";

export default function Produtos() {

    return (
        <main>
            <h1>PRODUTOS</h1>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nome</th>
                            <th>Descrição</th>
                            <th>Preço</th>
                            <th>Editar/Excluir</th>
                        </tr>
                    </thead>
                    <tbody>
                        {ListaProdutos.map((produto, index) => (
                            <tr key={index}>
                                <td>{produto.id}</td>
                                <td>{produto.nome}</td>
                                <td>{produto.desc}</td>
                                <td>{produto.preco}</td>
                                <td>
                                    <Link to={`/produtos/editar/${produto.id}`}>
                                        <FaEdit size={24} color="green" />
                                    </Link>
                                    {" | "}
                                    <Link to={`/produtos/excluir/${produto.id}`}>
                                        <FaTrash size={24} color="red" />
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colSpan='4'><strong>Total de produtos:</strong> {ListaProdutos.length}</td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </main>
    )
}