import { useContext } from "react";
import CartItem from "../../components/CartItem/CartItem";
import Container from "../../components/UI/Container/Container";
import { CartContext } from "../../context/cartContext";

const index = () => {
  const { items } = useContext(CartContext);

  return (
    <section className="cart">
      <Container>
        <div className="cart-wrapper">
          {items.length > 0 &&
            items.map(({ id, image, name, count, price }) => {
              return (
                <CartItem
                  key={id}
                  id={id}
                  src={image}
                  name={name}
                  counter={count}
                  price={price}
                />
              );
            })}
          <div className="cart-total">
            {items.reduce((a, b) => {
              return a + b.price * b.count;
            }, 0)}
            <span>تومان</span>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default index;
