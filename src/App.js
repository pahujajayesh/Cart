import React from "react";
import Cart from "./cart";
import Navbar from "./NavBar";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [
        {
          price: 50000,
          title: "Laptop",
          qty: 10,
          img: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80",
          id: 1,
        },
        {
          price: 1999,
          title: "Watch",
          qty: 1,
          img: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80",
          id: 2,
        },
        {
          price: 15999,
          title: "Mobile Phone",
          qty: 1,
          img:"https://images.unsplash.com/photo-1580910051074-3eb694886505?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=465&q=80",
          id: 3
        },
      ],
    };
  }
  handelIncreaseQuantity = (product) => {
    console.log("hey increase wty of", product);
    const { products } = this.state;
    const index = products.indexOf(product);
    products[index].qty += 1;
    this.setState({
      products: products,
    });
  };

  handelDecreaseQuantity = (product) => {
    const { products } = this.state;
    const index = products.indexOf(product);
    if (products[index].qty === 0) {
      return;
    }
    products[index].qty -= 1;
    this.setState({
      products,
    });
  };
  handelDeleteProduct = (id) => {
    const { products } = this.state;
    const items = products.filter((item) => item.id !== id);
    this.setState({
      products: items,
    });
  };
  getCartitemsCount = () => {
    const { products } = this.state;
    let count = 0;
    products.forEach((product) => {
      count += product.qty;
    });
    return count;
  }
  getToatalCost=()=>{
    const{products}=this.state;
    let totalPrice=0;
    products.forEach((product)=>{
      totalPrice+=product.qty*product.price;
    })
    return totalPrice;
  }

  render() {
    const { products } = this.state;
    return (
      <div className="App">
        <Navbar count={this.getCartitemsCount()} />
        <Cart
          products={products}
          increaseQuantity={this.handelIncreaseQuantity}
          decreaseQuantity={this.handelDecreaseQuantity}
          deleteProduct={this.handelDeleteProduct}
        />
        <div style={{fontSize:20,padding:10,textTransform:"uppercase"}}>Total Price={this.getToatalCost()}</div>
      </div>
    );
  }
}

export default App;
