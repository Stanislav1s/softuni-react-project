import { useContext, useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router";
import UserContext from "../../contexts/UserContext.jsx";
import useRequest from "../../hooks/useRequest.js";

export default function Details() {
    const { request } = useRequest();
    const navigate = useNavigate();
    const { recipeId } = useParams();
    const { user, isAuthenticated } = useContext(UserContext);

    const [recipe, setRecipe] = useState(null);
    const [likes, setLikes] = useState([]);

    const userId = user?._id;

    // Load recipe
    useEffect(() => {
        fetch(`http://localhost:3030/jsonstore/recipes/${recipeId}`)
            .then(res => res.json())
            .then(result => {
                setRecipe(result);
                setLikes(result.likes || []);
            })
            .catch(err => alert(err.message));
    }, [recipeId]);

    // Bootstrap imports
    useEffect(() => {
        import("bootstrap-icons/font/bootstrap-icons.css");
        import("bootstrap/dist/css/bootstrap.min.css");
        import("bootstrap/dist/js/bootstrap.bundle.min.js");
    }, []);

    // Delete recipe
    const deleteHandler = async () => {
        if (!window.confirm("Are you sure you want to delete this recipe?")) return;

        try {
            await request(`/jsonstore/recipes/${recipe._id}`, "DELETE");
            alert("Recipe deleted successfully");
            navigate("/catalog");
        } catch (err) {
            alert(err.message);
        }
    };

    // Like / Unlike
    const handleLike = async () => {
        if (!userId) return alert("You must be logged in to like a recipe!");

        const updatedLikes = likes.includes(userId)
            ? likes.filter(id => id !== userId)
            : [...likes, userId];

        try {
            // JSONStore requires PUT, not PATCH
            const response = await fetch(
                `http://localhost:3030/jsonstore/recipes/${recipeId}`,
                {
                    method: "PUT",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ ...recipe, likes: updatedLikes }),
                }
            );

            if (!response.ok) throw new Error("Failed to update likes.");

            setLikes(updatedLikes);
        } catch (err) {
            alert(err.message);
        }
    };

    if (!recipe) return <p>Loading...</p>;

    const hasLiked = likes.includes(userId);

    return (
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
                <p className="text-muted">{recipe.description1}</p>

                <div className="d-flex gap-4 text-muted mt-2">
                    <span><i className="bi bi-clock me-1"></i>{recipe.cooking_time}</span>
                    <span><i className="bi bi-person me-1"></i>{recipe.servings}</span>
                    <span><i className="bi bi-fire me-1"></i>{recipe.calories}</span>
                    <span><i className="bi bi-fork-knife"></i> {recipe.category}</span>
                </div>

                <hr className="mt-4" />
            </div>

            <div className="d-flex justify-content-center align-items-center mb-3">
                <button
                    className={`btn btn-sm ${hasLiked ? "btn-danger" : "btn-outline-danger"}`}
                    onClick={handleLike}
                >
                    {hasLiked ? "❤️ Liked" : "🤍 Like"} ({likes.length})
                </button>

                {isAuthenticated && recipe.ownerId === userId && (
                    <>
                        <Link to={`/${recipeId}/edit`} className="btn btn-warning ms-3">
                            <i className="bi bi-pencil-square"></i> Edit
                        </Link>

                        <button className="btn btn-danger ms-3" onClick={deleteHandler}>
                            <i className="bi bi-trash"></i> Delete
                        </button>
                    </>
                )}
            </div>

            <div className="container mt-4 pb-5">
                <div className="row">
                    <div className="col-lg-4 mb-4 shadow p-3 mb-5 bg-body rounded">
                        <h4 className="fw-bold mb-3">Ingredients</h4>
                        <ul className="list-group list-group-flush">
                            {recipe.ingredients?.map((item, index) => (
                                <li className="list-group-item" key={index}>{item}</li>
                            ))}
                        </ul>

                        <h4 className="fw-bold mt-5 mb-3">Nutrition (per serving)</h4>
                        <div className="nutrition-box">
                            <p><strong>Calories:</strong> {recipe.calories}</p>
                            <p><strong>Protein:</strong> {recipe.protein}</p>
                            <p><strong>Carbs:</strong> {recipe.carbs}</p>
                            <p><strong>Fats:</strong> {recipe.fats}</p>
                        </div>
                    </div>

                    <div className="col-lg-8">
                        <h4 className="fw-bold mb-3 ms-3">Instructions</h4>
                        {Object.entries(recipe.step_by_step_guide || {}).map(([key, step], index) => (
                            <div className="step-box ms-3" key={key}>
                                <h5 className="fw-bold">{index + 1}. {step.title}</h5>
                                <p>{step.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
