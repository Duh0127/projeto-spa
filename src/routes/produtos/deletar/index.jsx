import { useParams, useNavigate } from "react-router-dom";
import classes from "./Deletar.module.css";
import { useEffect, useState } from "react";


export default function ExcluirProduto() {

    document.title = "Excluir Produto"

    const { id } = useParams();
    const [ListaProdutos, setListaProdutos] = useState();
    const navigate = useNavigate();
    const produto = ListaProdutos?.filter(item => item.id == id)[0];


    const fetchData = () => {
        fetch("http://localhost:5000/produtos", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((response) => response.json())
            .then((data) => setListaProdutos(data))
            .catch((error) => console.log(error));
    }


    const handleDelete = () => {
        let indice = ListaProdutos.findIndex(item => item.id == produto.id);
        ListaProdutos.splice(indice, 1);
        
        fetch(`http://localhost:5000/produtos/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((response) => response.json())
            .catch((error) => console.log(error));

        navigate("/produtos");
    }


    useEffect(() => {
        fetchData();
    }, []);

    return (
        <main className={classes.centralizar}>
            <h1 className={classes.titulo}>Excluir Produtos</h1>
            <h3 className={classes.subtitle}>Você tem certeza de que deseja excluir esse produto?</h3>
            <figure className={classes.card}>
                <img height={200} src={produto?.img} alt={produto?.desc} />
                <figcaption className={classes.titleCard}>
                    {produto?.nome} - R$ {produto?.preco}
                </figcaption>
            </figure>
            <div className={classes.divButtons}>
                <button className={classes.danger} onClick={handleDelete}>Excluir</button>
                <button className={classes.secondary} onClick={() => navigate("/produtos")}>Cancelar</button>
            </div>
        </main>
    )
}