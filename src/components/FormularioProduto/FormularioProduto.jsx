import React, { useState } from 'react';

function FormularioProduto({ addItem }) {
    const [itemTask, setitemTask] = useState('');
    const [estoque, setEstoque] = useState('');
    const [valorCompra, setValorCompra] = useState('');
    const [valorVenda, setValorVenda] = useState('');

    const handleAddItem = () => {
        if (itemTask.trim() !== '') {
            addItem(itemTask, estoque, valorCompra, valorVenda);
            setitemTask('');
        }
    };

    return (
        <div>
            <p>Nome do produto</p>
            <input
                type="text"
                value={itemTask}
                onChange={(e) => setitemTask(e.target.value)}
            />
            <p>Quantidade em estoque</p>
            <input
                type="number"
                value={estoque}
                onChange={(e) => setEstoque(e.target.value)}
            />
            <p>Valor de compra</p>
            <input
                type="number"
                value={valorCompra}
                onChange={(e) => setValorCompra(e.target.value)}
            />
            <p>Valor de venda</p>
            <input
                type="number"
                value={valorVenda}
                onChange={(e) => setValorVenda(e.target.value)}
            />
            <button
                type="button"
                onClick={handleAddItem}
            >
                Adicionar Produto
            </button>
        </div>
    );
}

export default FormularioProduto;