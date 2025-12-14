import { useEffect, useState } from "react";
import { useParams, Link } from "react-router"


export default function Details() {
    const { recipeId } = useParams()
    const [recipe, setRecipe] = useState([])
    useEffect(() => {
        fetch(`http://localhost:3030/jsonstore/recipes/${recipeId}`)
            .then(response => response.json())
            .then(result => setRecipe(result))
            .catch(err => alert(err.message))



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
                    <span>
                        <i className="bi bi-fork-knife"></i> {recipe.category}
                    </span>
                </div>
                <hr className="mt-4" />
            </div>
            <div className="d-flex justify-content-center align-items-center mb-3">

                <Link to="/favourites" className="btn btn-outline-danger rounded-square">
                    <i className="bi bi-heart"></i> Favourite
                </Link>

                <Link to={`/${recipeId}/edit`} className="btn btn-warning ms-3">
                    <i className="bi bi-pencil-square"></i> Edit
                </Link>

                <Link to={`/${recipeId}/delete`} className="btn btn-danger ms-3">
                    <i className="bi bi-trash"></i> Delete
                </Link>

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
                        <h4 className="fw-bold mb-3 ms-3">Instructions</h4>
                        {Object.entries(recipe.step_by_step_guide || {}).map(([stepKey, step], index) => (
                            <div className="step-box ms-3" key={stepKey}>
                                <h5 className="fw-bold ">{index + 1}.{step.title}</h5>
                                <p>{step.description}</p>
                            </div>))}
                    </div>
                </div>
            </div>
        </>

    </>)
}