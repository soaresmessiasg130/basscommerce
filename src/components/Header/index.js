import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Cart } from './styles';

import logo from '../../assets/images/bassicon.png';
import { MdShoppingBasket } from 'react-icons/md';

function Header() {
  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="BassCommerce" srcset="" />
      </Link>

      <Cart to="/cart">
        <div>
          <strong>Meu carrinho</strong>
          <span>2 itens</span>
        </div>
        <MdShoppingBasket size={36} color="#FFF" />
      </Cart>
    </Container>
  );
}

export default Header;
