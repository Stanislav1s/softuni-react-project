import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router"
import request from "../../utils/request.js"

const initialValues = {

    title: '',
    description1: '',
    cooking_time: '',
    servings: '',
    calories: '',
    imgUrl: '',
    createdAt: '',
    ingredients: [],
    protein: '',
    carbs: '',
    fats: '',
    step_by_step_guide: [],
}

export default function Edit() {
    const navigate = useNavigate()
    const { recipeId } = useParams()
    const [value, setValue] = useState(initialValues)
    const changeHandler = (e) => {
        setValue(state => ({
            ...state,
            [e.target.name]: e.target.value,
        }))
    };
    useEffect(() => {
        request(`/${recipeId}`)
            .then(result => {

                const stepsObject = result.step_by_step_guide || {};
                const stepsArray = Object.values(stepsObject);

                setValue({
                    ...initialValues,
                    ...result,
                    step_by_step_guide: stepsArray
                });
            })
            .catch(err => alert(err.message));
    }, [recipeId]);

    const editHandler = async () => {

        try {
            await request(`/${recipeId}`, 'PUT', value)
            navigate(`/${recipeId}/details`)
        } catch (err) {
            alert(err.message)
        }
    }


    const addStep = () => {
        setValue(state => ({
            ...state,
            step_by_step_guide: [
                ...state.step_by_step_guide,
                { title: "", description: "" }
            ]
        }));
    };

    const handleStepChange = (index, field, newValue) => {
        setValue(state => {
            const steps = [...state.step_by_step_guide];
            steps[index] = {
                ...steps[index],
                [field]: newValue
            };

            return {
                ...state,
                step_by_step_guide: steps
            };
        });
    };
    return (<>
        <>
            {/* Hero Header */}
            <div className="hero-header text-center">
                <h1 className="fw-bold display-4">Edit Recipe</h1>
                <p className="lead">Add ingredients, nutrition, and detailed steps</p>
            </div>
            {/* Create Recipe Form */}
            <section className="container form-section">
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <div className="card shadow-lg border-0 rounded-4">
                            <div className="card-body p-5">
                                <h2 className="fw-bold mb-4 text-center">Recipe Information</h2>
                                <form action={editHandler}>
                                    {/* Title & Category */}
                                    <div className="row">
                                        <div className="col-md-8 mb-4">
                                            <label className="form-label fw-semibold">Recipe Title</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="e.g. Spaghetti Carbonara"
                                                required=""
                                                name="title"
                                                onChange={changeHandler}
                                                value={value.title}
                                            />
                                        </div>
                                        <div className="col-md-4 mb-4">
                                            <label className="form-label fw-semibold">Category</label>
                                            <select className="form-select">
                                                <option value='Breakfast'>Breakfast</option>
                                                <option value='Lunch'>Lunch</option>
                                                <option value='Dinner'>Dinner</option>
                                                <option value='Dessert'>Dessert</option>
                                                <option value='Drinks'>Drinks</option>
                                            </select>
                                        </div>
                                    </div>
                                    {/* Image URL */}
                                    <div className="mb-4">
                                        <label className="form-label fw-semibold">Image URL</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Paste an image URL..."
                                            required=""
                                            onChange={changeHandler}
                                            value={value.imgUrl}
                                            name="imgUrl"
                                        />
                                    </div>
                                    {/* Cooking Time, Servings, Difficulty */}
                                    <div className="row">
                                        <div className="col-md-4 mb-4">
                                            <label className="form-label fw-semibold">
                                                Cooking Time (minutes)
                                            </label>
                                            <input
                                                type="number"
                                                className="form-control"
                                                placeholder="e.g. 30"
                                                onChange={changeHandler}
                                                value={value.cooking_time}
                                                name="cooking_time"
                                            />
                                        </div>
                                        <div className="col-md-4 mb-4">
                                            <label className="form-label fw-semibold">Servings</label>
                                            <input
                                                type="number"
                                                className="form-control"
                                                placeholder="e.g. 4"
                                                onChange={changeHandler}
                                                value={value.servings}
                                                name="servings"
                                            />
                                        </div>
                                        <div className="col-md-4 mb-4">
                                            <label className="form-label fw-semibold">Difficulty</label>
                                            <select className="form-select">
                                                <option value='Easy'>Easy</option>
                                                <option value='Medium'>Medium</option>
                                                <option value='Hard'>Hard</option>
                                            </select>
                                        </div>
                                    </div>
                                    {/* Description */}
                                    <div className="mb-4">
                                        <label className="form-label fw-semibold">
                                            Short Description
                                        </label>
                                        <textarea
                                            className="form-control"
                                            rows={3}
                                            placeholder="A short intro to the recipe..."
                                            required=""
                                            onChange={changeHandler}
                                            value={value.description1}
                                            name="description1"
                                        />
                                    </div>
                                    {/* Ingredients */}
                                    <div className="mb-4">
                                        <label className="form-label fw-semibold">
                                            Ingredients (one per line)
                                        </label>
                                        <textarea
                                            className="form-control"
                                            rows={5}
                                            value={value.ingredients.join("\n")}
                                            onChange={(e) =>
                                                setValue(state => ({
                                                    ...state,
                                                    ingredients: e.target.value.split("\n")
                                                }))
                                            }
                                        />
                                    </div>
                                    {/* Nutrition Facts */}
                                    <h4 className="fw-bold mt-4 mb-3">Nutrition Facts</h4>
                                    <div className="row">
                                        <div className="col-md-3 mb-4">
                                            <label className="form-label fw-semibold">Calories</label>
                                            <input
                                                type="number"
                                                className="form-control"
                                                placeholder="e.g. 450"
                                                onChange={changeHandler}
                                                value={value.calories}
                                                name="calories"

                                            />
                                        </div>
                                        <div className="col-md-3 mb-4">
                                            <label className="form-label fw-semibold">Protein (g)</label>
                                            <input
                                                type="number"
                                                className="form-control"
                                                placeholder="e.g. 18"
                                                onChange={changeHandler}
                                                value={value.protein}
                                                name="protein"
                                            />
                                        </div>
                                        <div className="col-md-3 mb-4">
                                            <label className="form-label fw-semibold">Carbs (g)</label>
                                            <input
                                                type="number"
                                                className="form-control"
                                                placeholder="e.g. 50"
                                                onChange={changeHandler}
                                                value={value.carbs}
                                                name="carbs"
                                            />
                                        </div>
                                        <div className="col-md-3 mb-4">
                                            <label className="form-label fw-semibold">Fat (g)</label>
                                            <input
                                                type="number"
                                                className="form-control"
                                                placeholder="e.g. 15"
                                                onChange={changeHandler}
                                                value={value.fats}
                                                name="fats"
                                            />
                                        </div>
                                    </div>
                                    {/* Instructions */}
                                    <h4>Instructions</h4>

                                    {value.step_by_step_guide.map((step, index) => (
                                        <div key={index} className="mb-3">
                                            <input
                                                type="text"
                                                className="form-control mb-2"
                                                value={step.title}
                                                onChange={(e) =>
                                                    handleStepChange(index, "title", e.target.value)
                                                }
                                                placeholder={`Step ${index + 1} title`}
                                            />

                                            <textarea
                                                className="form-control"
                                                value={step.description}
                                                onChange={(e) =>
                                                    handleStepChange(index, "description", e.target.value)
                                                }
                                                placeholder={`Step ${index + 1} description`}
                                            />
                                        </div>
                                    ))}
                                    <button type="button" onClick={addStep} className="btn btn-outline-primary">
                                        + Add Step
                                    </button>
                                    {/* Submit Button */}
                                    <div className="text-center mt-4">
                                        <button className="btn btn-primary px-5 py-2">
                                            Edit Recipe
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>

    </>)
}