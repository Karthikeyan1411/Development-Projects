import React, {useState} from "react";
import './App.css';
import shirt1 from '../images/shirt1.jpeg';
import shirt2 from '../images/shirt2.jpeg';
import shirt3 from '../images/shirt3.jpeg';
import ethnic from '../images/ethnic wear.jpg';
import party from '../images/party dress.jpg';
import traditional from '../images/traditional shirt.jpg';
import unicorn from '../images/unicorn.jpg';

var products = [
    {id: 1, name: 'NIKE', price: 20, image: shirt1},
    {id: 2, name: 'PUMA', price: 30, image: shirt2},
    {id: 3, name: 'AJIO', price: 25, image: shirt3},
    {id: 4, name: 'ETHNIC WEARS', price: 30, image: ethnic},
    {id: 5, name: 'PARTY DRESS', price: 50, image: party},
    {id: 6, name: 'TRADITIONALS', price: 45, image: traditional},
    {id: 7, name: 'UNICORN WEARS', price: 60, image: unicorn},
];

function App () {

    var [cart, setCart] = useState([]);
    
    var addToCart = (productId) => {
        var selectedProduct = products.find(product => product.id === productId);
        if (selectedProduct){
            setCart([...cart, selectedProduct]);
        }
    };

    var checkout = () => {
        alert('Thank You For Your Purchace!');
        setCart([]);
    }

    return(
        <div className="App">
            <header className="App-header">
                <h1>E-COMMERCE STORE</h1>
            </header>
            <section className="App-products">
                {products.map(product => (
                    <div className="App-product" key={product.id}>
                        <img src={product.image} alt={product.name} style={{width: 250, height: 250}}/>
                        <h3>{product.name}</h3>
                        <p><span>$</span> {product.price}</p>
                        <button onClick={() => addToCart(product.id)}>Add to Cart</button>
                    </div>
                ))}
            </section>
            
            <section className="App-cart">
                <h2>Shopping Cart</h2>
                <ul>
                    {cart.map(item => (
                        <li key={item.id}>{item.name} - ${item.price}</li>
                    ))}
                </ul>
                <button onClick={checkout}>CheckOut</button>
            </section>

            <footer>
                Created by Spyde🔥
            </footer>
        </div>
    );
}

export default App;