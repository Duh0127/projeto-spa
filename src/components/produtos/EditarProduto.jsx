import { useParams, useNavigate } from 'react-router-dom';
import { ListaProdutos } from './ListaProdutos';
import { useState } from 'react';

export default function EditarProdutos(){
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
            if(item.id == id){
                indice = index;
            }
        })

        ListaProdutos.splice(indice, 1, produto);
        navigate('/produtos')
    }

    return(
        <main>
            <p>Produto Selecionado para edição: {produto.nome}</p>
            <p>useState: {produto.nome}</p>
            <button onClick={()=> setProduto("SLA")}></button>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <legend>Produto Selecionado</legend>
                    <div>
                        <img src={produto.img} alt={produto.desc} />
                    </div>
                    <div>
                        <label htmlFor="idNome">Nome:</label>
                        <input 
                            type="text" 
                            name='nome' 
                            id='idNome' 
                            value={produto.nome}
                            onChange={(e) => handleChange(e)}
                        />
                    </div>
                    
                    <div>
                        <label htmlFor="idDesc">Descrição:</label>
                        <input 
                            type="text" 
                            name='desc' 
                            id='idDesc' 
                            value={produto.desc}
                            onChange={handleChange}
                        />
                    </div>

                    <div>
                        <label htmlFor="idPreco">Preço:</label>
                        <input 
                            type="text" 
                            name='preco' 
                            id='idPreco' 
                            value={produto.preco}
                            onChange={handleChange}
                        />
                    </div>
                    <button type="submit">Editar</button>
                </fieldset>
                <div>
                    <p>Nome: {produto.nome}</p>
                    <p>Desc: {produto.desc}</p>
                    <p>Preco: {produto.preco}</p>
                </div>
            </form>
        </main>
    )
}