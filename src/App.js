import React, { useState } from 'react';
import Axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import "./App.css";
import Recipe from './components/Recipe';
import Alert from './components/alert';
import { PopUp } from './components/PopUp';

const App = () => {
    const [query, setQuery] = useState("");
    const [recipes, setRecipes] = useState([]);
    const [alert, setAlert] = useState("");
    //const [cart] = useState([{ name: "read" }])


    const APP_ID = ""

    const APP_KEY = ""

    const url = ``

    const getData = async () => {
        if (query !== "") {
            const result = await Axios.get(url);
            if (!result.data.more) {
                return setAlert("No food with such name");
            }
            setRecipes(result.data.hits);
            console.log(result);
            setAlert("");
            setQuery("");
        } else {
            setAlert("Please fill the form")
        }
    };

    const onChange = (e) => {
        setQuery(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        getData();
    }

    const handleAddFunc = (product) => {
        const existingProduct = this.state.cart.filter(p => p.recipe === product.recipe);

        if (existingProduct.length > 0) {

            const withoutExistingProduct = this.state.cart.filter(p => p.recipe !== product.recipe);
            const updatedUnitsProduct = {
                ...existingProduct[0],
                units: existingProduct[0].text + product.text
            };

            this.setState({
                cart: [...withoutExistingProduct, updatedUnitsProduct]
            });

        } else {
            this.setState({
                cart: [...this.state.cart, product]
            });
        }
    }


    return (
        <div>
            <PopUp />
            <div className="App" >
                <h1><a href="/" style={{ color: '#336fb3' }}>Food Recipes</a></h1>
                <form className="search-form" onSubmit={onSubmit}>
                    {alert !== "" && <Alert alert={alert} />}
                    <input
                        type="text"
                        placeholder="Search Food"
                        autocomplete="off"
                        onChange={onChange}
                        value={query} />
                    <input type="submit" value="search" />
                </form>
                <div className="recipes">
                    {recipes !== [] && recipes.map(recipe => <Recipe key={uuidv4} recipe={recipe} addFunc={handleAddFunc.bind(this)} />)}
                </div>
            </div>
        </div>

    )
}
//<div>
//{cart.map(c => <li>{c.name} </li>)}
//</div>

export default App
