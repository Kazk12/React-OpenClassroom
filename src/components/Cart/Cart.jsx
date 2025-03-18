import React from "react";
import './Cart.css';

function Cart() {
  const monstera = 8;
  const lierre = 10;
  const bouquet = 15;

  const total = monstera + lierre + bouquet;
  return (
    <section className="lmj-cart">
      <h2>Panier</h2>
      <ul>
        <li>Monstera : {monstera}€</li>
        <li>Lierre : {lierre}€</li>
        <li>Bouquet de fleurs : {bouquet}€</li>
      </ul>
      <p>Total : {total}€</p>
    </section>
  );
}

export default Cart;
