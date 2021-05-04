import { CircularProgress } from '@material-ui/core';
import React, {useContext, useEffect} from 'react';
import { topicContext } from '../../context/TopicContext';
import { calcTotalPrice } from '../helpers/calcPrice';

import './Cart.css';



const Cart = () => {
    const {getCart, cart, changeProductCount} = useContext(topicContext)
    useEffect(() => {
        getCart()
    }, [])
    console.log(cart.products+"cart")
    return (
        <div className="cart">
            {cart.products ? (
            <div className="asd">
                <table>
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Title</th>
                            <th>Price</th>
                            <th>Count</th>
                            <th>SubPrice</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.products.map(elem => (
                            <tr key={elem.item.id}>
                                <td>
                                    <img style={{width: "50px"}} src={elem.item.img} alt="product-img" />
                                </td>
                                <td>{elem.item.title}</td>
                                <td>{elem.item.price}</td>
                                <td> <input 
                                type="number" 
                                value={elem.count}
                                onChange={(e) => changeProductCount(e.target.value, elem.item.id)}
                                
                                /></td>
                                <td>{elem.subPrice}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <h4>Total: {calcTotalPrice(cart.products)} </h4>
                <button>Buy:</button>
            </div> 
            ) : (
                <CircularProgress />
            )}
        </div>
    );
};

export default Cart;