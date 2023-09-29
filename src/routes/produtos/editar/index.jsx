import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import classes from "./Editar.module.css";

export default function EditarProduto() {
    const { id } = useParams()
    const navigate = useNavigate()
    const [listaProdutos, setListaProdutos] = useState();
    const [produto, setProduto] = useState({
        id: '',
        nome: '',
        desc: '',
        preco: '',
        img: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduto({ ...produto, [name]: value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        let indice = -1;
        listaProdutos.forEach((item, index) => {
            if (item.id === Number(id)) {
                indice = index;
            }
        });

        if (indice !== -1) {
            listaProdutos[indice] = produto;
        }

        fetch(`http://localhost:5000/produtos/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(produto)
        })
            .then((response) => response.json())
            .then(() => navigate('/produtos'))
            .catch((err) => console.log(err));
    }

    useEffect(() => {
        fetch('http://localhost:5000/produtos', {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        })
            .then((response) => response.json())
            .then((data) => {
                const produtoSelecionado = data.find(item => item.id === Number(id));
                if (produtoSelecionado) {
                    setProduto({
                        id: produtoSelecionado.id,
                        nome: produtoSelecionado.nome,
                        desc: produtoSelecionado.desc,
                        preco: produtoSelecionado.preco,
                        img: produtoSelecionado.img
                    });
                }
                setListaProdutos(data);
            })
            .catch((err) => console.log(err));
    }, [id]);

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
                            onChange={handleChange}
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
