import React, { useRef } from "react";
import axios from "axios";

const CreateProduct = () => {
    const multiRef = useRef();
    const handleSubmit = (e) => {
        e.preventDefault();
        const children = multiRef.current.children;
        const newData = [...children].reduce((obj, child) => {
            if (!child.name) return obj;
            return { ...obj, [child.name]: child.value };
        }, {});
        axios.post(`products`, newData).then((res) => console.log(res));
    };
    return (
        <div className="createproduct">
            <h4>Create Product</h4>
            <form ref={multiRef} onSubmit={handleSubmit}>
                <label>Title</label>
                <input type="text" placeholder="Title" name="title" />
                <label>Image</label>
                <input type="text" placeholder="Title" name="image" />
                <label>Description</label>
                <input
                    type="text"
                    placeholder="Description"
                    name="description"
                />
                <label>Category</label>
                <input type="text" placeholder="Title" name="category" />
                <label>Price</label>
                <input type="number" placeholder="2" name="price" />
                <button>Add Product</button>
            </form>
        </div>
    );
};

export default CreateProduct;
