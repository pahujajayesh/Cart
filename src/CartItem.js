import React from "react";
class CartItem extends React.Component {
    constructor() {
        super();
        this.state = {
            title: 'Mobile Phone',
            price: 999,
            qty: 1,
            img: ''
        }
        // this.increaseQuantity=this.increaseQuantity.bind(this);
    }
    increaseQuantity =()=>{
        // console.log("this",this.state);
        // this.setState({
        //   qty:this.state.qty +1
        // })
        this.setState((prevState)=>{
          return{
            qty:prevState.qty+1
          }
        })
    
    }
    decreaseQuantity=()=>{
      this.setState((prevState)=>{
        return{
        qty:prevState.qty -1
        }
      })
    }
    render() {
        const { title, price, qty } = this.state
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
                  onClick={this.decreaseQuantity}
                ></img>
                <img
                  alt="plus"
                  className="action-icons"
                  src="https://cdn-icons-png.flaticon.com/512/992/992651.png"
                  onClick={this.increaseQuantity}
                ></img>
                <img
                  alt="delete"
                  className="action-icons"
                  src="https://cdn-icons-png.flaticon.com/512/1214/1214428.png"
                ></img>
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
