import React from 'react';
import {
    MdRemoveCircleOutline,
    MdAddCircleOutline,
    MdDelete
} from 'react-icons/md';

import { Container, ProductTable, Total } from './styles';

export default function Cart() {
    return (
        <Container>
            <ProductTable>
                <thead>
                    <tr>
                        <th />
                        <th>produto</th>
                        <th>qtd</th>
                        <th>subtotal</th>
                        <th />
                    </tr>
                    <tbody>
                        <tr>
                            <td>
                                <img
                                    src="https://i.pinimg.com/564x/68/b6/bf/68b6bf0fe23bb80c71a70581fa87223f.jpg"
                                    alt="produto"
                                />
                            </td>
                            <td>
                                <strong>Tênis muito massa</strong>
                                <span>R$129,00</span>
                            </td>
                            <td>
                                <div>
                                    <button type="button">
                                        <MdRemoveCircleOutline
                                            size={20}
                                            color="#7159c1"
                                        />
                                    </button>
                                    <input type="number" readOnly value={1} />
                                    <button type="button">
                                        <MdAddCircleOutline
                                            size={20}
                                            color="#7159c1"
                                        />
                                    </button>
                                </div>
                            </td>
                            <td>
                                <strong>R$ 258,00</strong>
                            </td>
                            <td>
                                <button type="button">
                                    <MdDelete size="20" color="#7159c1" />
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </thead>
            </ProductTable>

            <footer>
                <button type="button">Finalizar pedido</button>

                <Total>
                    <span />
                    <strong>R$1920,28</strong>
                </Total>
            </footer>
        </Container>
    );
}
