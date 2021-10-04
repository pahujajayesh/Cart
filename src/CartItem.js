import React from "react";
class CartItem extends React.Component {
    render() {
      console.log('this.prop',this.props);
        const { title, price, qty } = this.props.product;
        return (
          <div className="cart-item">
            <div className="left-block">
              <img alt="" style={styles.image} />
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
                  onClick={()=>this.props.decreaseQuantity(this.props.product)}
                />
                <img
                  alt="plus"
                  className="action-icons"
                  src="https://cdn-icons-png.flaticon.com/512/992/992651.png"
                  onClick={()=>this.props.increaseQuantity(this.props.product)}
                />
                
                
                <img
                  alt="delete"
                  className="action-icons"
                  src="https://cdn-icons-png.flaticon.com/512/1214/1214428.png"
                />
              </div>
            </div>
          </div>
        );
    }
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
