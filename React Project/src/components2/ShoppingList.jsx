import React, { useState } from 'react'

function ShoppingList() {



    const [item, setItem] = useState([]);

    const [itemName, setItemName] = useState('');
    const [itemQuantity, setitemQuantity] = useState('');

    const AddItem = (e) => {
        e.preventDefault();

        setItem(
            [
                ...item, 
                { 
                    name: itemName, 
                    quantity: itemQuantity 
                }
            ]
        );

        setItemName('');
        setitemQuantity('');
    }

    return (
        <div>
            <form onSubmit={AddItem}>
                <div>
                <label >
                    Name:
                    <input type="text" name="name" value={itemName} onChange={(e) => setItemName(e.target.value)} placeholder='Enter product name' />
                </label>
                </div>
                <div>
                <br />
                <label >
                    Quantity:
                    <input type="number" name="quantity" value={itemQuantity} onChange={(e) => setitemQuantity(e.target.value)} placeholder='Enter product Quantity' />
                </label>
                </div>
                <br />
                <button type="submit">Add Item</button>
            </form>

            <h1>Shopping List</h1>

            {item.map((i, idx) => {
                return (
                    <div key={idx}>
                        <h1>Product Name: {i.name}</h1>
                        <h1>Product Name: {i.quantity}</h1>
                    </div>
                )
            })}

        </div>
    )
}

export default ShoppingList;