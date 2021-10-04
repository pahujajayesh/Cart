import React from "react";
import CartItem from './CartItem';
class Cart extends React.Component {
    constructor(){
    super();
    this.state={
        products:[
            {
                price:1999,
                title:"Laptop",
                qty:10,
                img:'',
                id:1
            },{
                price:199,
                title:"Watch",
                qty:1,
                img:'',
                id:2

            },{
                price:199999,
                title:"I phone",
                qty:1,
                img:'',
                id:3
            }
        ]
      }
    }
    handelIncreaseQuantity=(product)=>{
        console.log('hey increase wty of',product);
        const {products}=this.state;
        const index=products.indexOf(product);
        products[index].qty+=1;
        this.setState({
            products:products
        })
    }

    handelDecreaseQuantity=(product)=>{
        const{products}=this.state;
        const index=products.indexOf(product);
        if(products[index].qty === 0){
            return;
        }
        products[index].qty-=1;
        this.setState({
            products
        })
    }
    render(){
        const {products}=this.state;
        return(
            <div className="cart">
            {products.map((product)=>{
                return <CartItem 
                product={product} 
                key={product.id}
                increaseQuantity={this.handelIncreaseQuantity}
                decreaseQuantity={this.handelDecreaseQuantity}
                />
            })}
            </div>
        )
    }
    
}

export default Cart;
