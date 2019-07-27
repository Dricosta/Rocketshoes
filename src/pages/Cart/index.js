import React from 'react';
import { connect } from 'react-redux';
import {
    MdRemoveCircleOutline,
    MdAddCircleOutline,
    MdDelete
} from 'react-icons/md';

import { Container, ProductCart, Total } from './styles';

function Cart({ cart, dispatch }) {
    return (
        <Container>
            <header>
                <span>produto</span>
                <span>qtd</span>
                <span>subtotal</span>
            </header>
            {cart.map(product => (
                <ProductCart key={product.title}>
                    <img src={product.image} alt={product.title} />

                    <div className="description-group">
                        <strong>{product.title}</strong>
                        <span>{product.priceFormatted}</span>
                    </div>

                    <div>
                        <button type="button">
                            <MdRemoveCircleOutline size={20} color="#7159c1" />
                        </button>
                        <input type="number" readOnly value={product.amount} />
                        <button type="button">
                            <MdAddCircleOutline size={20} color="#7159c1" />
                        </button>
                    </div>

                    <strong>R$ 258,00</strong>
                    <button
                        type="button"
                        onClick={() =>
                            dispatch({
                                type: 'REMOVE_FROM_CART',
                                id: product.id
                            })
                        }
                    >
                        <MdDelete size="20" color="#7159c1" />
                    </button>
                </ProductCart>
            ))}
            <footer>
                <button type="button">Finalizar pedido</button>
                <Total>
                    <span>Total:</span>
                    <strong>R$1920,28</strong>
                </Total>
            </footer>
        </Container>
    );
}

const mapStateToProps = state => ({
    cart: state.cart
});

export default connect(mapStateToProps)(Cart);
