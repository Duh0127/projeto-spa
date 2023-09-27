import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaEdit, FaTrash } from "react-icons/fa";
import classes from "./Produtos.module.css";
import { useNavigate } from "react-router-dom";
import Modal from "../../components/Modal";

export default function Produtos() {
    const navigate = useNavigate();
    const [listaLocalProdutos, setListaLocalProdutos] = useState([{}]);
    const [novoId, setNovoId] = useState(0);

    const [listaProdutoLocal, setListaProdutoLocal] = useState([{}]);
    const [openModal, setOpenModal] = useState(false);


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

    useEffect(() => {
        fetch(' http://localhost:5000/produtos', {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        }).then((response) => response.json())
            .then((data) => {
                console.log(data);
                setListaProdutoLocal(data);
            })
            .catch((err) => console.log(err));
    }, {});

    return (
        <main className={classes.centralizar}>
            <h1 className={classes.titulo}>LISTA DE PRODUTOS</h1>
            <Modal open={openModal} setOpen={setOpenModal}>
                <main className={classes.centralizar}>
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
            </Modal>
            {!openModal && <button className={classes.adicionar} onClick={() => setOpenModal(!openModal)}>Inserir Produto</button>}
            {/* <button className={classes.adicionar} onClick={() => navigate('/produtos/adicionar')}>Adicionar Produto</button> */}

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
                    {listaProdutoLocal.map((produto, index) => (
                        <tr key={index} className={classes.tableLineStyle}>
                            <td className={classes.tableDataStyle}>{produto.id}</td>
                            <td className={classes.tableDataStyle}>{produto.nome}</td>
                            <td className={classes.tableDataStyle}>{produto.desc}</td>
                            <td className={classes.tableDataStyle}>{produto.preco}</td>
                            <td className={classes.tableDataStyle}><img className={classes.tableDataImgStyle} src={produto.img} alt={produto.desc} /></td>
                            <td className={classes.tableDataButtonStyle}>
                                <Link to={`/produtos/editar/${produto.id}`}>
                                    <FaEdit size={24} color="green" />
                                </Link>
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
                            {listaProdutoLocal.length}
                        </td>
                    </tr>
                </tfoot>
            </table>

        </main>
    )
}