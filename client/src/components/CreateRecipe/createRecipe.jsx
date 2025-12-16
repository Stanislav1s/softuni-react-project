import { useNavigate } from "react-router"
import useRequest from "../../hooks/useRequest.js"
import useForm from "../../hooks/useForm.js"

export default function CreateRecipe() {
    const navigate = useNavigate()
    const { request } = useRequest()
    const createRecipeHandler = async (values) => {
        const data = { ...values };

        // created date
        data.createdAt = new Date().toISOString();

        // ingredients: string → array
        data.ingredients = data.ingredients
            .split('\n')
            .map(i => i.trim())
            .filter(Boolean);

        // steps: string → array of objects
        data.step_by_step_guide = data.steps
            .split('\n')
            .map(step => step.trim())
            .filter(Boolean)
            .map((step, index) => ({
                title: `Step ${index + 1}`,
                description: step
            }));

        // remove raw steps field
        delete data.steps;
        await request('/jsonstore/recipes', 'POST', data)

        navigate('/catalog')

    }
    const {
        register,
        formAction
    } = useForm(createRecipeHandler, {
        title: '',
        description1: '',
        cooking_time: 0,
        servings: 0,
        calories: 0,
        imgUrl: '',
        ingredients: '',
        protein: 0,
        carbs: 0,
        fats: 0,
        category: '',
        steps: []
    })
    return (
        <>
            {/* Hero Header */}
            <div className="hero-header text-center">
                <h1 className="fw-bold display-4">Create a New Recipe</h1>
                <p className="lead">Add ingredients, nutrition, and detailed steps</p>
            </div>
            {/* Create Recipe Form */}
            <section className="container form-section">
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <div className="card shadow-lg border-0 rounded-4">
                            <div className="card-body p-5">
                                <h2 className="fw-bold mb-4 text-center">Recipe Information</h2>
                                <form action={formAction}>
                                    {/* Title & Category */}
                                    <div className="row">
                                        <div className="col-md-8 mb-4">
                                            <label className="form-label fw-semibold">Recipe Title</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="e.g. Spaghetti Carbonara"
                                                required=""
                                                {...register('title')}
                                            />
                                        </div>
                                        <div className="col-md-4 mb-4">
                                            <label className="form-label fw-semibold">Category</label>
                                            <select className="form-select" {...register('category')}>
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
                                            {...register('imgUrl')}

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
                                                {...register('cooking_time')}
                                            />
                                        </div>
                                        <div className="col-md-4 mb-4">
                                            <label className="form-label fw-semibold">Servings</label>
                                            <input
                                                type="number"
                                                className="form-control"
                                                placeholder="e.g. 4"
                                                {...register('servings')}
                                            />
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

                                            {...register('description1')}
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
                                            placeholder="e.g. 200g pasta
100g bacon
2 eggs"
                                            {...register('ingredients')}
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
                                                {...register('calories')}
                                            />
                                        </div>
                                        <div className="col-md-3 mb-4">
                                            <label className="form-label fw-semibold">Protein (g)</label>
                                            <input
                                                type="number"
                                                className="form-control"
                                                placeholder="e.g. 18"
                                                {...register('protein')}
                                            />
                                        </div>
                                        <div className="col-md-3 mb-4">
                                            <label className="form-label fw-semibold">Carbs (g)</label>
                                            <input
                                                type="number"
                                                className="form-control"
                                                placeholder="e.g. 50"
                                                {...register('carbs')}
                                            />
                                        </div>
                                        <div className="col-md-3 mb-4">
                                            <label className="form-label fw-semibold">Fat (g)</label>
                                            <input
                                                type="number"
                                                className="form-control"
                                                placeholder="e.g. 15"
                                                {...register('fats')}
                                            />
                                        </div>
                                    </div>
                                    {/* Instructions */}
                                    <div className="mb-4">
                                        <label className="form-label fw-semibold">
                                            Instructions (steps)
                                        </label>
                                        <textarea
                                            className="form-control"
                                            rows={7}
                                            placeholder="Step-by-step instructions..."
                                            required=""

                                            {...register('steps')}
                                        />
                                    </div>
                                    {/* Submit Button */}
                                    <div className="text-center mt-4">
                                        <button className="btn btn-primary px-5 py-2">
                                            Create Recipe
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>

    )
}