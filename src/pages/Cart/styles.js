import styled from 'styled-components';

import { darken } from 'polished';

export const Container = styled.div`
  color: #fff;
  padding: 16px;
  background: #282730;
  border-radius: 8px;

  footer {
    margin-top: 32px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    button {
      color: #fff;
      padding: 8px 16px;
      border-radius: 8px;
      border: none;
      background: #83b750;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.04, '#83b750')};
      }
    }
  }
`;

export const ProductTable = styled.table`
  width: 100%;

  thead td {
    color: #c7c7c7;
    text-align: left;
    padding: 8px;
  }

  tbody td {
    padding: 8px;
    border-bottom: 1px dashed #575757;
  }

  img {
    max-height: 100px;
  }

  strong {
    display: block;
    color: #ddd;
  }

  span {
    color: #fff;
    display: block;
    margin-top: 4px;
    font-weight: bold;
    font-size: 20px;
  }

  div {
    display: flex;
    align-items: center;

    input {
      background: none;
      color: #ddd;
      font-weight: bold;
      text-align: center;
      border: 0;
      border-radius: 4px;
      width: 40px;
    }
  }

  button {
    background: none;
    border: none;
    padding: 4px;
  }
`;

export const Total = styled.div`
  display: flex;
  align-items: baseline;

  span {
    color: #aaa;
    margin-right: 8px;
  }

  strong {
    font-size: 24px;
    color: #ddd;
  }
`;
