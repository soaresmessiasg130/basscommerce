import React from 'react';

import {
  MdDelete,
  MdRemoveCircleOutline,
  MdAddCircleOutline,
} from 'react-icons/md';

import { Container, ProductTable, Total } from './styles';

export default function Cart() {
  return (
    <Container>
      <ProductTable>
        <thead>
          <tr>
            <td />
            <td>Produto</td>
            <td>Quantidade</td>
            <td>Subtotal</td>
            <td />
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTPiK8_lRoX9DyG5yQkSGiJxFy8U1Oz5j2xjpIgiqhkZ1HJifJJ&usqp=CAU"
                alt=""
              />
            </td>
            <td>
              <strong>Baixo 5 cordas FENDER</strong>
              <span>R$ 129,99</span>
            </td>
            <td>
              <div>
                <button type="button">
                  <MdRemoveCircleOutline sixe={20} color="#f88790" />
                </button>
                <input type="number" readOnly value={2} />
                <button type="button">
                  <MdAddCircleOutline sixe={20} color="#88f790" />
                </button>
              </div>
            </td>
            <td>
              <strong>R$ 158,98</strong>
            </td>
            <td>
              <button type="button">
                <MdDelete size={20} color="#b81720" />
              </button>
            </td>
          </tr>
        </tbody>
      </ProductTable>

      <footer>
        <button>FINALIZAR PEDIDO</button>

        <Total>
          <span>Total</span>
          <strong>R$ 1290,99</strong>
        </Total>
      </footer>
    </Container>
  );
}
