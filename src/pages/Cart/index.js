import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    MdRemoveCircleOutline,
    MdAddCircleOutline,
    MdDelete
} from 'react-icons/md';
import { formatPrice } from '../../util/format';
import * as CartActions from '../../store/modules/cart/actions';
import { Container, ProductCart, Total } from './styles';

export default function Cart() {
    const total = useSelector(state =>
        formatPrice(
            state.cart.reduce((totalSum, product) => {
                return totalSum + product.price * product.amount;
            }, 0)
        )
    );

    const cart = useSelector(state =>
        state.cart.map(product => ({
            ...product,
            subtotal: formatPrice(product.price * product.amount)
        }))
    );

    const dispatch = useDispatch();

    function increment(product) {
        dispatch(
            CartActions.updateAmountRequest(product.id, product.amount + 1)
        );
    }

    function decrement(product) {
        dispatch(
            CartActions.updateAmountRequest(product.id, product.amount - 1)
        );
    }

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
                        <button
                            type="button"
                            onClick={() => decrement(product)}
                        >
                            <MdRemoveCircleOutline size={20} color="#7159c1" />
                        </button>
                        <input type="number" readOnly value={product.amount} />
                        <button
                            type="button"
                            onClick={() => increment(product)}
                        >
                            <MdAddCircleOutline size={20} color="#7159c1" />
                        </button>
                    </div>

                    <strong>{product.subtotal}</strong>
                    <button
                        type="button"
                        onClick={() =>
                            dispatch(CartActions.removeFromCart(product.id))
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
                    <strong>{total}</strong>
                </Total>
            </footer>
        </Container>
    );
}
