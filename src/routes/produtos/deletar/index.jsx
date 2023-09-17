import { useParams, useNavigate } from "react-router-dom";
import { ListaProdutos } from "../ListaProdutos";
import classes from "./Deletar.module.css";


export default function ExcluirProduto() {

    document.title = "Excluir Produto"

    const { id } = useParams();
    const navigate = useNavigate();
    const produto = ListaProdutos.filter((item) => item.id == id)[0];

    const handleDelete = () => {
        let indice = ListaProdutos.findIndex(item => item.id == produto.id);
        ListaProdutos.splice(indice, 1);
        navigate("/produtos");
    }

    return (
        <main className={classes.centralizar}>
            <h1 className={classes.titulo}>Excluir Produtos</h1>
            <h3 className={classes.subtitle}>Você tem certeza de que deseja excluir esse produto?</h3>
            <figure className={classes.card}>
                <img src={produto.img} alt={produto.desc} />
                <figcaption className={classes.titleCard}>
                    {produto.nome} - R$ {produto.preco}
                </figcaption>
            </figure>
            <div className={classes.divButtons}>
                <button className={classes.danger} onClick={handleDelete}>Excluir</button>
                <button className={classes.secondary} onClick={() => navigate("/produtos")}>Cancelar</button>
            </div>
        </main>
    )
}