import { useEffect, useState } from "react";
import RecipeCard from "../recipeCard/recipeCard.jsx";

export default function Catalog() {

    const [data, setData] = useState([])
    useEffect(() => {
        (async () => {
            try {
                const response = await fetch("http://localhost:3030/jsonstore/Recipes");
                const result = await response.json();
                setData(Object.values(result));
            }
            catch (err) {
                alert(err.message)
            }


        })();
    }, []);
    return (
        <>
            <div>

                <header className="container mt-5 text-center">
                    <h1 className="fw-bold">Recipe Catalog</h1>
                    <p className="text-muted">Browse our collection of delicious recipes</p>
                </header>
                {/* RECIPE GRID */}
                <div className="container mt-4 pb-5">
                    <div className="row g-4">
                        {data.map(recipe => <RecipeCard key={recipe._id} {...recipe} />)}

                    </div>
                </div>


            </div>
        </>
    )
}