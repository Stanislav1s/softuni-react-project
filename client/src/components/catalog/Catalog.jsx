import { useEffect, useState } from "react";
import RecipeCard from "../recipeCard/recipeCard.jsx";

export default function Catalog() {

    const [data, setData] = useState([])
    useEffect(() => {
        (async () => {
            try {
                const response = await fetch("http://localhost:3030/jsonstore/recipes");
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
            <header className="container mt-5 text-center">
                <h1 className="fw-bold">Recipe Catalog</h1>
                <p className="text-muted">Browse our collection of delicious recipes</p>
            </header>
            {data.length === 0 && (
                <div className="text-center mt-5">
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/4076/4076549.png"
                        alt="No recipes"
                        style={{ width: "120px", opacity: 0.6 }}
                    />
                    <h3 className="mt-3 fw-bold">No Recipes Found</h3>
                    <p className="text-muted">There are no recipes yet. Add one to get started!</p>
                </div>
            )}

            <div>


                {/* RECIPE GRID */}
                <div className="container mt-4 pb-5">
                    <div className="row g-4">
                        {data
                            .slice()
                            .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
                            .map(recipe => (
                                <RecipeCard key={recipe._id} {...recipe} />
                            ))
                        }
                    </div>
                </div>


            </div>
        </>
    )
}