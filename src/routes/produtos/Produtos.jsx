import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaEdit, FaTrash } from "react-icons/fa";
// import classes from "./Produtos.module.css";
import './Produtos.scss';
import { useNavigate } from "react-router-dom";
import Modal from "../../components/Modal";

export default function Produtos() {
    const navigate = useNavigate();
    const [novoId, setNovoId] = useState(0);

    const [listaProdutoLocal, setListaProdutoLocal] = useState([{}]);
    const [openModal, setOpenModal] = useState(false);

    const [produto, setProduto] = useState({
        id: novoId,
        nome: "",
        desc: "",
        preco: "",
        img: "",
    });


    const fetchData = () => {
        fetch(' http://localhost:5000/produtos', {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        }).then((response) => response.json())
            .then((data) => {
                setListaProdutoLocal(data);
                setNovoId(listaProdutoLocal[listaProdutoLocal.length - 1].id + 1);
            })
            .catch((err) => console.log(err));
    }


    const handleChange = (event) => {
        const { name, value } = event.target;
        setProduto({ ...produto, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if(produto.nome === "" || produto.desc === "" || produto.preco === "" || produto.img === "") {
            alert("Preencha todos os campos!");
            return;
        }

        fetch("http://localhost:5000/produtos", {
            method: "POST",
            body: JSON.stringify(produto),
            headers: {
                "Content-Type": "application/json",
            }
        })
            .then((response) => response.json())
            .catch(error => console.log(error));

        setOpenModal(false);
        window.location.reload();
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <main className="main">
            <h1 className="">LISTA DE PRODUTOS</h1>

            <Modal title="NOVO PRODUTO" open={openModal} setOpen={setOpenModal}>
                <main className="modal">
                    <form onSubmit={handleSubmit}>
                        <fieldset>
                            <div>
                                <label htmlFor="idNome">Nome:</label>
                                <input
                                    type="text"
                                    name='nome'
                                    onChange={handleChange}
                                    value={produto.nome}
                                    id='idNome'
                                />
                            </div>
                            <div>
                                <label htmlFor="idDesc">Descrição:</label>
                                <input
                                    type="text"
                                    name='desc'
                                    onChange={handleChange}
                                    value={produto.desc}
                                    id='idDesc'
                                />
                            </div>
                            <div>
                                <label htmlFor="idPreco">Preço:</label>
                                <input
                                    type="number"
                                    min="0"
                                    name='preco'
                                    onChange={handleChange}
                                    value={produto.preco}
                                    id='idPreco'
                                />
                            </div>
                            <div>
                                <label htmlFor="idImg">Imagem:</label>
                                <input
                                    type="text"
                                    name='img'
                                    onChange={handleChange}
                                    value={produto.img}
                                    id='idImg'
                                />
                            </div>
                            <button type="submit">Adicionar</button>
                        </fieldset>
                    </form>
                </main>
            </Modal>

            {!openModal && <button onClick={() => setOpenModal(!openModal)}>Inserir Produto</button>}

            <table className="tableStyle">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Descrição</th>
                        <th>Preço</th>
                        <th>Imagem</th>
                        <th>Editar/Excluir</th>
                    </tr>
                </thead>
                <tbody>
                    {listaProdutoLocal.map((produto, index) => (
                        <tr key={index}>
                            <td>{produto.id}</td>
                            <td>{produto.nome}</td>
                            <td>{produto.desc}</td>
                            <td>{produto.preco}</td>
                            <td><img src={produto.img} alt={produto.desc} /></td>
                            <td>
                                <div>
                                    <Link to={`/produtos/editar/${produto.id}`}>
                                        <FaEdit size={24} color="green" />
                                    </Link>
                                    <Link to={`/produtos/excluir/${produto.id}`}>
                                        <FaTrash size={24} color="red" />
                                    </Link>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan='5' className="">
                            <strong>Total de produtos:</strong>
                            {listaProdutoLocal.length}
                        </td>
                    </tr>
                </tfoot>
            </table>

        </main>
    )
}