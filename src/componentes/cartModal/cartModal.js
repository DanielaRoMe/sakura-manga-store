import React from "react";
import { Link } from "react-router-dom";


//Modal from Bootstrap
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

//Context
import { useContext } from "react";
import { CartContext } from "../cartContext/cartContext";

//CSS
import "../cartModal/cartModal.css";

//FontAwesome Icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

//SweetAlert
import Swal from "sweetalert2";

const CartModal = ({ isOpen, closeModal }) => {
    
    const { cart, incrementQty, decrementQty, removeItemFromCart, cartCounter } = useContext(CartContext);
    
    const handleIncrement = (product) => {
    if (product.quantity < product.stock) {
      incrementQty(product.id);
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Esta cantidad supera nuestro stock",
      });
    }
    };

    const handleDecrement = (product) => {
    if (product.quantity >= 2) {
      decrementQty(product.id);
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "La cantidad no puede ser 0",
      });
    }
    };

    const handleRemoveItem = (product) => {
    removeItemFromCart(product);
    };

    const total = cart.reduce((acumulador,item) => acumulador + (item.price * item.quantity), 0);


  return (
    <>
      {isOpen && (
        <div
          className="modal show"
          style={{ display: "block", position: "initial" }}
        >
          <Modal.Dialog>
            <Modal.Header>
              <Modal.Title>Carrito de compras:</Modal.Title>
            </Modal.Header>

            <Modal.Body>
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th> IMG </th>
                    <th> Nombre </th>
                    <th> Precio </th>
                    <th> Cantidad</th>
                    <th> Eliminar </th>
                  </tr>
                </thead>
                {cart.map((product) => {
                  return (
                    <tbody id="tablaBody">
                      <tr>
                        <td>
                          <img
                            src={product.img}
                            alt={product.title}
                            className="cart-img"
                          />
                        </td>
                        <td>{product.title}</td>
                        <td>${product.price}</td>
                        <td>
                          <button onClick={() => handleDecrement(product)}>
                            <FontAwesomeIcon icon={faMinus} />
                          </button>
                          {product.quantity}
                          <button onClick={() => handleIncrement(product)}>
                            <FontAwesomeIcon icon={faPlus} />
                          </button>
                        </td>
                        <td>
                          <button
                            type="button"
                            className="btn"
                            onClick={() => handleRemoveItem(product)}
                          >
                            <FontAwesomeIcon icon={faTrash} className="fa-2x" />
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  );
                })}
              </table>
            </Modal.Body>

            <Modal.Footer>
              <Button variant="secondary" onClick={closeModal}> Close </Button>
              {cartCounter ? <p>Total: $ {total}</p> : null}
              <Link to={`/confirmShippment`}>
                <Button onClick={closeModal}>Finalizar compra </Button>
              </Link>
              
            </Modal.Footer>
          </Modal.Dialog>
        </div>
      )}
    </>
  );
};

export default CartModal;
