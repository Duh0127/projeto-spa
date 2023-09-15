import { useParams, useNavigate } from "react-router-dom";
import { ListaProdutos } from "./ListaProdutos";
import classes from "./Produtos.module.css";


export default function ExcluirProdutos() {

    document.title = "Excluir Produto"

    const { id } = useParams();
    const navigate = useNavigate();
    const produto = ListaProdutos.filter((item) => item.id == id)[0];

    const handleDelete = () => {
        let indice = ListaProdutos.findIndex(item => item.id == produto.id);
        ListaProdutos.splice(indice, 1);
        alert("Produto excluído com sucesso!");
        navigate("/produtos");
    }

    return (
        <>
            <h1>Excluir Produtos</h1>
            <div>
                <section className={classes.centralizar}>
                    <h2>PRODUTO SELECIONADO PARA EXCLUSÃO</h2>
                    <h3>Você tem certeza de que deseja excluir esse produto?</h3>
                    <figure>
                        <img src={produto.img} alt={produto.desc} />
                        <figcaption>
                            {produto.nome} - R$ {produto.preco}
                        </figcaption>
                    </figure>
                    <div className={classes.divButtons}>
                        <button className={classes.danger} onClick={handleDelete}>Excluir</button>
                        <button className={classes.secondary} onClick={() => navigate("/produtos")}>Cancelar</button>
                    </div>
                </section>
            </div>
        </>
    )
}