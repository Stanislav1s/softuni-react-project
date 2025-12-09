export default function Edit() {
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
                                <form>
                                    {/* Title & Category */}
                                    <div className="row">
                                        <div className="col-md-8 mb-4">
                                            <label className="form-label fw-semibold">Recipe Title</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="e.g. Spaghetti Carbonara"
                                                required=""
                                            />
                                        </div>
                                        <div className="col-md-4 mb-4">
                                            <label className="form-label fw-semibold">Category</label>
                                            <select className="form-select">
                                                <option>Breakfast</option>
                                                <option>Lunch</option>
                                                <option>Dinner</option>
                                                <option>Dessert</option>
                                                <option>Drinks</option>
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
                                            />
                                        </div>
                                        <div className="col-md-4 mb-4">
                                            <label className="form-label fw-semibold">Servings</label>
                                            <input
                                                type="number"
                                                className="form-control"
                                                placeholder="e.g. 4"
                                            />
                                        </div>
                                        <div className="col-md-4 mb-4">
                                            <label className="form-label fw-semibold">Difficulty</label>
                                            <select className="form-select">
                                                <option>Easy</option>
                                                <option>Medium</option>
                                                <option>Hard</option>
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
                                            defaultValue={""}
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
                                            defaultValue={""}
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
                                            />
                                        </div>
                                        <div className="col-md-3 mb-4">
                                            <label className="form-label fw-semibold">Protein (g)</label>
                                            <input
                                                type="number"
                                                className="form-control"
                                                placeholder="e.g. 18"
                                            />
                                        </div>
                                        <div className="col-md-3 mb-4">
                                            <label className="form-label fw-semibold">Carbs (g)</label>
                                            <input
                                                type="number"
                                                className="form-control"
                                                placeholder="e.g. 50"
                                            />
                                        </div>
                                        <div className="col-md-3 mb-4">
                                            <label className="form-label fw-semibold">Fat (g)</label>
                                            <input
                                                type="number"
                                                className="form-control"
                                                placeholder="e.g. 15"
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
                                            defaultValue={""}
                                        />
                                    </div>
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