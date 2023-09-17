import { useParams, useNavigate } from 'react-router-dom';
import { ListaProdutos } from '../ListaProdutos';
import { useState } from 'react';
import classes from "./Editar.module.css";

export default function EditarProduto() {
    const { id } = useParams()
    const navigate = useNavigate()

    const produtoSelecionado = ListaProdutos.filter(produto => produto.id == id)[0];

    const [produto, setProduto] = useState({
        id: produtoSelecionado.id,
        nome: produtoSelecionado.nome,
        desc: produtoSelecionado.desc,
        preco: produtoSelecionado.preco,
        img: produtoSelecionado.img
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduto({ ...produto, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        let indice = 0;
        ListaProdutos.forEach((item, index) => {
            if (item.id == id) {
                indice = index;
            }
        })

        ListaProdutos.splice(indice, 1, produto);
        navigate('/produtos')
    }

    return (
        <main className={classes.centralizar}>
            <h1 className={classes.titulo}>EDITAR PRODUTO</h1>

            <form className={classes.form} onSubmit={handleSubmit}>
                <fieldset className={classes.fieldset}>
                    <legend className={classes.legend}>Produto Selecionado</legend>
                    <img className={classes.img} src={produto.img} alt={produto.desc} />
                    <div className={classes.divInputs}>
                        <label className={classes.label} htmlFor="idNome">Nome:</label>
                        <input
                            className={classes.input}
                            type="text"
                            name='nome'
                            id='idNome'
                            value={produto.nome}
                            onChange={(e) => handleChange(e)}
                        />
                    </div>
                    <div className={classes.divInputs}>
                        <label className={classes.label} htmlFor="idDesc">Descrição:</label>
                        <textarea
                            className={classes.input}
                            name='desc'
                            id='idDesc'
                            value={produto.desc}
                            onChange={handleChange}
                        />
                    </div>
                    <div className={classes.divInputs}>
                        <label className={classes.label} htmlFor="idPreco">Preço:</label>
                        <input
                            className={classes.input}
                            type="number"
                            min="0"
                            name='preco'
                            id='idPreco'
                            value={produto.preco}
                            onChange={handleChange}
                        />
                    </div>
                    <button className={classes.button} type="submit">Salvar Edição</button>
                </fieldset>
            </form>
        </main>
    )
}