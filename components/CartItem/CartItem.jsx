import { useContext } from "react";
import { number, string } from "prop-types";
import Icon from "../UI/Icon/Icon";
import { CartContext } from "../../context/cartContext";

const CartItem = ({ id, src, name, counter, price }) => {
  const { addMinuseItem, removeItem } = useContext(CartContext);

  return (
    <div className="cart-item d-flex align-items-center position-relative">
      <img src={src} alt={name} title={name} className="cart-item-image" />
      <div className="cart-item-detail">
        <h3 className="cart-item-name">{name}</h3>
        <div className="cart-item-counter d-flex align-items-center">
          <button type="button" onClick={() => addMinuseItem(id, "add")}>
            +
          </button>
          <span>{counter}</span>
          <button type="button" onClick={() => addMinuseItem(id, "minuse")}>
            -
          </button>
        </div>
        <div className="cart-item-price">
          {price}
          <span>تومان</span>
        </div>
        <button
          type="button"
          className="cart-item-remove"
          onClick={() => removeItem(id)}
        >
          <Icon name="x" />
        </button>
      </div>
    </div>
  );
};

CartItem.propTypes = {
  id: number,
  src: string,
  name: string,
  counter: number,
  price: number,
};

export default CartItem;
