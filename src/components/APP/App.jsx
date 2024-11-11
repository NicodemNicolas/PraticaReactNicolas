import React, { useState } from 'react';
import FormularioProduto from '../FormularioProduto/FormularioProduto';
import ListaEstoque from '../ListaEstoque/ListaEstoque';

function App() {
    const [Items, setItems] = useState([]);

    const addItem = (text, estoque, valorCompra, valorVenda) => {
        const newItem = {
            id: Date.now(),
            text,
            estoque,
            valorCompra,
            valorVenda
        };

        setItems([...Items, newItem]);
    };

    return (
        <div>
            <h1>Gerenciador de Estoque</h1>
            <h2>Caixa: R$</h2>

            <FormularioProduto addItem={addItem} />

            {/* Dando erro quando descomento */}
            {/* <ListaEstoque
                Items={Items}
            /> */}

        </div>
    );
}

export default App;