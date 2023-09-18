import { ListaProdutos } from "../ListaProdutos";
import { useNavigate } from "react-router-dom";
import classes from "./Adicionar.module.css";

export default function AdicionarProduto(){
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const { nome, desc, preco, img } = e.target;
        
        if(!nome.value || !desc.value || !preco.value || !img.value){
            alert('Preencha todos os campos!');
            return;
        }

        const novoProduto = {
            id: ListaProdutos.length + 1,
            nome: nome.value,
            desc: desc.value,
            preco: preco.value,
            img: img ? img.value : "https://picsum.photos/100/100"
        }
        ListaProdutos.push(novoProduto);
        navigate('/produtos')
    }

    return(
        <main className={classes.centralizar}>
            <h1 className={classes.titulo}>Adicionar Produto</h1>
            <form className={classes.form} onSubmit={handleSubmit}>
                <fieldset className={classes.fieldset}>
                    <legend className={classes.legend}>Novo Produto</legend>
                    <div className={classes.divInputs}>
                        <label className={classes.label} htmlFor="idNome">Nome:</label>
                        <input className={classes.input} type="text" name='nome' id='idNome' />
                    </div>
                    <div className={classes.divInputs}>
                        <label className={classes.label} htmlFor="idDesc">Descrição:</label>
                        <input className={classes.input} type="text" name='desc' id='idDesc' />
                    </div>
                    <div className={classes.divInputs}>
                        <label className={classes.label} htmlFor="idPreco">Preço:</label>
                        <input className={classes.input} type="number" min="0" name='preco' id='idPreco' />
                    </div>
                    <div className={classes.divInputs}>
                        <label className={classes.label} htmlFor="idImg">Imagem:</label>
                        <input className={classes.input} type="text" name='img' id='idImg' />
                    </div>
                    <button className={classes.button} type="submit">Adicionar</button>
                </fieldset>
            </form>
        </main>
    )
}