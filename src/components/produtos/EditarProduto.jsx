import { useParams } from 'react-router-dom';
import { ListaProdutos } from './ListaProdutos';
import { useState } from 'react';

export default function EditarProdutos(){
    const { id } = useParams()

    const [produtos, setProdutos] = useState();

    const produtoSelecionado = ListaProdutos.filter(produto => produto.id == id);

    return(
        <main>
            <p>Produto Selecionado para edição: {produtoSelecionado[0].nome}</p>
            <p>useState: {produtos}</p>
            <button onClick={()=> setProdutos("SLA")}></button>
            <form>
                <fieldset>
                    <legend>Produto Selecionado</legend>
                    <div>
                        <label htmlFor="idNome">Nome:</label>
                        <input type="text" name='nome' id='idNome' defaultValue={produtoSelecionado[0].nome} />
                    </div>
                    
                    <div>
                        <label htmlFor="idDesc">Descrição:</label>
                        <input type="text" name='desc' id='idDesc' defaultValue={produtoSelecionado[0].desc} />
                    </div>

                    <div>
                        <label htmlFor="idPreco">Preço:</label>
                        <input type="text" name='preco' id='idPreco' defaultValue={produtoSelecionado[0].preco} />
                    </div>
                </fieldset>
            </form>
        </main>
    )
}