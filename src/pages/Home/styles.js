import styled from 'styled-components';

import { darken } from 'polished';

export const ProductsList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 16px;
  list-style: none;

  li {
    display: flex;
    flex-direction: column;
    background: #282730;
    padding: 16px;
    border-radius: 8px;

    img {
      align-self: center;
      max-width: 240px;
    }

    > strong {
      color: #d7d7d7;
      font-size: 16px;
      line-height: 20px;
      margin-top: 4px;
    }

    > span {
      color: #d7d7d7;
      font-size: 20px;
      line-height: 24px;
      margin: 4px 0 8px;
    }

    button {
      color: #fff;
      background: #83b750;
      border: 0;
      border-radius: 8px;
      overflow: hidden;
      margin-top: auto;

      display: flex;
      align-items: center;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.04, '#83b750')}
      }

      div {
        display: flex;
        align-items: center;
        padding: 8px;
        background: rgba(0, 0, 0, 0.1);

        svg {
          margin-right: 4px;
        }
      }

      span {
        flex: 1;
        text-align: center;
        font-weight: bold;s
      }
    }
  }
`;
