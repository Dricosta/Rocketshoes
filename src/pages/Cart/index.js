import React from 'react';
import {
    MdRemoveCircleOutline,
    MdAddCircleOutline,
    MdDelete
} from 'react-icons/md';

import { Container, ProductCart, Total } from './styles';

export default function Cart() {
    return (
        <Container>
            <header>
                <span>produto</span>
                <span>qtd</span>
                <span>subtotal</span>
            </header>
            <ProductCart>
                <img
                    src="https://i.pinimg.com/564x/68/b6/bf/68b6bf0fe23bb80c71a70581fa87223f.jpg"
                    alt="produto"
                />

                <div className="description-group">
                    <strong>Tênis muito massa</strong>
                    <span>R$129,00</span>
                </div>

                <div>
                    <button type="button">
                        <MdRemoveCircleOutline size={20} color="#7159c1" />
                    </button>
                    <input type="number" readOnly value={1} />
                    <button type="button">
                        <MdAddCircleOutline size={20} color="#7159c1" />
                    </button>
                </div>

                <strong>R$ 258,00</strong>
                <button type="button">
                    <MdDelete size="20" color="#7159c1" />
                </button>
            </ProductCart>

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
