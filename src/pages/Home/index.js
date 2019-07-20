import React from 'react';
import { MdAddShoppingCart } from 'react-icons/md';
import { ProductList } from './styles';

export default function Home() {
    return (
        <ProductList>
            <li>
                <img
                    src="https://i.pinimg.com/564x/68/b6/bf/68b6bf0fe23bb80c71a70581fa87223f.jpg"
                    alt="tenis"
                />
                <strong>Vans old School</strong>
                <span>R$ 129,00</span>

                <button type="button">
                    <div>
                        <MdAddShoppingCart size={16} color="#FFF" /> 3
                    </div>
                    <span>Adicionar ao carrinho</span>
                </button>
            </li>

            <li>
                <img
                    src="https://i.pinimg.com/564x/68/b6/bf/68b6bf0fe23bb80c71a70581fa87223f.jpg"
                    alt="tenis"
                />
                <strong>Vans old School</strong>
                <span>R$ 129,00</span>

                <button type="button">
                    <div>
                        <MdAddShoppingCart size={16} color="#FFF" /> 3
                    </div>
                    <span>Adicionar ao carrinho</span>
                </button>
            </li>

            <li>
                <img
                    src="https://i.pinimg.com/564x/68/b6/bf/68b6bf0fe23bb80c71a70581fa87223f.jpg"
                    alt="tenis"
                />
                <strong>Vans old School</strong>
                <span>R$ 129,00</span>

                <button type="button">
                    <div>
                        <MdAddShoppingCart size={16} color="#FFF" /> 3
                    </div>
                    <span>Adicionar ao carrinho</span>
                </button>
            </li>
        </ProductList>
    );
}
