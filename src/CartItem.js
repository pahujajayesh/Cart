import React from "react";
const CartItem = (props) => {
  const { title, price, qty } = props.product;
  const {
    product,
    decreaseQuantity,
    increaseQuantity,
    deleteProduct
  } = props;

  return (
    <div className="cart-item">
      <div className="left-block">
        <img alt="" style={styles.image} src={product.img} />
      </div>
      <div className="right-block">
        <div style={{ fontSize: 35, color: "red" }}>{title}</div>
        <div style={{ color: "blue" }}>Price:Rs{price}</div>
        <div style={{ color: "darkgray" }}>Qty:{qty}</div>
        <div className="action-icons">
          <img
            alt="minus"
            className="action-icons"
            src="https://cdn-icons-png.flaticon.com/512/992/992683.png"
            onClick={() => decreaseQuantity(product)}
          />
          <img
            alt="plus"
            className="action-icons"
            src="https://cdn-icons-png.flaticon.com/512/992/992651.png"
            onClick={() => increaseQuantity(product)}
          />


          <img
            alt="delete"
            className="action-icons"
            src="https://cdn-icons-png.flaticon.com/512/1214/1214428.png"
            onClick={() => deleteProduct(product.id)}
          />
        </div>
      </div>
    </div>
  );
}

const styles = {
  image: {
    height: 100,
    width: 100,
    borderRadius: 4,
    background: '#ccc'
  }
}

export default CartItem;
