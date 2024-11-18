import React, {useState} from 'react';


// Creating the AddProductForm component

function AddProductForm({ addProduct }) {
    // setting up variables w/ useState
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault()
        const newProduct = {
            id: Date.now (),
            name,
            price,
            description
        };
        // calling addProduct function (done in a future task)
        addProduct(newProduct)
        // resetting fields
        setName('');
        setPrice('');
        setDescription('');
    };

    // formatting form
    return (
    <form onSubmit= {handleSubmit}>
            <h2>Add a new product:</h2>
        <div>
            <label>Name: </label>
            <input type= "text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
            <label>Price: </label>
            <input type= "text" value={price} onChange={(e) => setPrice(e.target.value)} />
        </div>
        <div>
            <label>Description: </label>
            <textarea type= "text" value={description} onChange={(e) => setDescription(e.target.value)} />
        </div>
        <button type="submit">Add Product</button>
    </form>
    )
}

export default AddProductForm