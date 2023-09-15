import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaEdit, FaTrash } from "react-icons/fa";
import { ListaProdutos } from "./ListaProdutos";
import classes from "./Produtos.module.css";

export default function Produtos() {

    const [exemplo, setExemplo] = useState(0);
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        console.log("Use effect que será sempre renderizado")
    })

    useEffect(() => {
        console.log("Use effect que será renderizado apenas uma vez")
    }, [])

    useEffect(() => {
        console.log("Use effect que será renderizado apenas quando o counter for alterado")
    }, [counter])

   

    return (
        <main>
            <h1>LISTA DE PRODUTOS</h1>

            <div>
                <button onClick={() => setExemplo(exemplo + 1)}>Click - {exemplo}</button>
                <button onClick={() => setCounter(counter + 1)}>Counter - {counter}</button>
            </div>

            <div>
                <table className={classes.tableStyle}>
                    <thead>
                        <tr className={classes.tableHeaderStyle}>
                            <th className={classes.tableHeaderStyle}>ID</th>
                            <th className={classes.tableHeaderStyle}>Nome</th>
                            <th className={classes.tableHeaderStyle}>Descrição</th>
                            <th className={classes.tableHeaderStyle}>Preço</th>
                            <th className={classes.tableHeaderStyle}>Imagem</th>
                            <th className={classes.tableHeaderStyle}>Editar/Excluir</th>
                        </tr>
                    </thead>
                    <tbody>
                        {ListaProdutos.map((produto, index) => (
                            <tr key={index} className={classes.tableLineStyle}>
                                <td className={classes.tableDataStyle}>{produto.id}</td>
                                <td className={classes.tableDataStyle}>{produto.nome}</td>
                                <td className={classes.tableDataStyle}>{produto.desc}</td>
                                <td className={classes.tableDataStyle}>{produto.preco}</td>
                                <td className={classes.tableDataStyle}><img src={produto.img} alt={produto.desc} /></td>
                                <td className={classes.tableDataButtonStyle}>
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
                            <td colSpan='5' className={classes.tableDataStyle}>
                                <strong>Total de produtos:</strong> 
                                {ListaProdutos.length}
                            </td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </main>
    )
}