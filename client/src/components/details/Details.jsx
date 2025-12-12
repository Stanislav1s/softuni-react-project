import { useEffect, useState } from "react";
import { useParams } from "react-router"


export default function Details() {
    const { recipeId } = useParams()
    const [recipe, setRecipe] = useState([])
    useEffect(() => {
        fetch(`http://localhost:3030/jsonstore/recipes/${recipeId}`)
            .then(response => response.json())
            .then(result => setRecipe(result))
            .catch(err => alert(err.message))
        console.log(recipe.ingredients);


    }, [recipeId]);

    useEffect(() => {
        import('bootstrap-icons/font/bootstrap-icons.css');
        import('bootstrap/dist/css/bootstrap.min.css')
        import('bootstrap/dist/js/bootstrap.bundle.min.js')
    }, []);


    return (<>
        <>

            <div className="container mt-4 mb-4">
                <img
                    src={recipe.imgUrl}
                    alt={recipe.title}
                    className="img-fluid rounded-4 shadow"
                    style={{ width: "100%", objectFit: "cover", maxHeight: "420px" }}
                />
            </div>

            <div className="container mt-4">
                <h1 className="fw-bold">{recipe.title}</h1>
                <p className="text-muted">
                    {recipe.description1}
                </p>
                <div className="d-flex gap-4 text-muted mt-2">
                    <span>
                        <i className="bi bi-clock me-1"></i>{recipe.cooking_time}
                    </span>
                    <span>
                        <i className="bi bi-person me-1"></i>{recipe.servings}
                    </span>
                    <span>
                        <i className="bi bi-fire me-1" ></i>{recipe.calories}
                    </span>
                </div>
                <hr className="mt-4" />
            </div>
            {/* CONTENT GRID */}
            <div className="container mt-4 pb-5">
                <div className="row">
                    {/* LEFT SIDE: INGREDIENTS */}
                    <div className="col-lg-4 mb-4 shadow p-3 mb-5 bg-body rounded">
                        <h4 className="fw-bold mb-3">Ingredients</h4>
                        <ul className="list-group list-group-flush">
                            {recipe.ingredients?.map((item, index) => (
                                <div className="list-group-item" key={index}>
                                    {item}
                                </div>
                            ))}</ul>
                        <h4 className="fw-bold mt-5 mb-3">Nutrition (per serving)</h4>
                        <div className="nutrition-box">
                            <p>
                                <strong>Calories:</strong> {recipe.calories}
                            </p>
                            <p>
                                <strong>Protein:</strong> {recipe.protein}
                            </p>
                            <p>
                                <strong>Carbs:</strong> {recipe.carbs}
                            </p>
                            <p>
                                <strong>Fats:</strong> {recipe.fats}
                            </p>
                        </div>
                    </div>
                    {/* RIGHT SIDE: STEPS */}
                    <div className="col-lg-8">
                        <h4 className="fw-bold mb-3">Instructions</h4>
                        {Object.entries(recipe.step_by_step_guide || {}).map(([stepKey, step], index) => (
                            <div className="step-box" key={stepKey}>
                                <h5 className="fw-bold ">{index + 1}.{step.title}</h5>
                                <p>{step.description}</p>
                            </div>))}
                    </div>
                </div>
            </div>
        </>

    </>)
}