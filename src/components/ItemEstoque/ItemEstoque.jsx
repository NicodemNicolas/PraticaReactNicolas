function ItemEstoque({ item }) {
    return (
        <div>
            {(
                <>
                    <p>{item.text}</p>
                    <p>{item.estoque}</p>
                    <p>{item.valorCompra}</p>
                    <p>{item.valorVenda}</p>
                    <button>
                        +
                    </button>
                    <button>
                        -
                    </button>
                </>
            )}
        </div>
    );
}

export default ItemEstoque;