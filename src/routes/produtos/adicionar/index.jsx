import { useNavigate } from "react-router-dom";
import classes from "./Adicionar.module.css";
import { useEffect, useState } from "react";

export default function AdicionarProduto() {
    const navigate = useNavigate();

    const [listaLocalProdutos, setListaLocalProdutos] = useState([{}]);
    const [novoId, setNovoId] = useState(0);

    useEffect(() => {
        fetch("http://localhost:5000/produtos", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((response) => response.json())
            .then((data) => {
                setListaLocalProdutos(data);
                console.log(data);
            })
            .catch((error) => console.log(error));

            setNovoId(listaLocalProdutos[listaLocalProdutos.length - 1].id + 1);
    }, [listaLocalProdutos]);

    const [produto, setProduto] = useState({
        id: novoId,
        nome: "",
        desc: "",
        preco: "",
        img: "",
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setProduto({ ...produto, [name]: value });
    };

    const handleSubmit = (e)=>{
        e.preventDefault();
    
        fetch("http://localhost:5000/produtos",{
            method: "POST",
            body: JSON.stringify(produto),
            headers:{
                "Content-Type":"application/json",
            }
        })
        .then((response)=> response.json())
        .then((data)=>(console.log(data)))
        .catch(error => console.log(error));
    
        navigate("/produtos");
      }

    return (
        <main className={classes.centralizar}>
            <h1 className={classes.titulo}>Adicionar Produto</h1>
            <form className={classes.form} onSubmit={handleSubmit}>
                <fieldset className={classes.fieldset}>
                    <legend className={classes.legend}>Novo Produto</legend>
                    <div className={classes.divInputs}>
                        <label className={classes.label} htmlFor="idNome">Nome:</label>
                        <input
                            className={classes.input}
                            type="text"
                            name='nome'
                            onChange={handleChange}
                            value={produto.nome}
                            id='idNome'
                        />
                    </div>
                    <div className={classes.divInputs}>
                        <label className={classes.label} htmlFor="idDesc">Descrição:</label>
                        <input
                            className={classes.input} 
                            type="text" 
                            name='desc' 
                            onChange={handleChange}
                            value={produto.desc}
                            id='idDesc' 
                        />
                    </div>
                    <div className={classes.divInputs}>
                        <label className={classes.label} htmlFor="idPreco">Preço:</label>
                        <input 
                            className={classes.input} 
                            type="number" 
                            min="0" 
                            name='preco' 
                            onChange={handleChange}
                            value={produto.preco}
                            id='idPreco' 
                        />
                    </div>
                    <div className={classes.divInputs}>
                        <label className={classes.label} htmlFor="idImg">Imagem:</label>
                        <input 
                            className={classes.input} 
                            type="text" 
                            name='img' 
                            onChange={handleChange}
                            value={produto.img}
                            id='idImg'
                        />
                    </div>
                    <button className={classes.button} type="submit">Adicionar</button>
                </fieldset>
            </form>
        </main>
    )
}