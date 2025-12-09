export default function Details() {
    return (<>
        <>
            <div className="container mt-4 mb-4">
                <img
                    src="https://media.istockphoto.com/id/637214478/photo/pasta-plate.jpg?s=612x612&w=0&k=20&c=oebCQG_Zfv2zJpobSzpF6JFNdsBQUjG6MdQh-En5l3c="
                    alt="Italian Pasta Carbonara"
                    className="img-fluid rounded-4 shadow"
                    style={{ width: "100%", objectFit: "cover", maxHeight: "420px" }}
                />
            </div>

            <div className="container mt-4">
                <h1 className="fw-bold">Italian Pasta Carbonara</h1>
                <p className="text-muted">
                    Creamy, rich, classic Italian dish ready in 20 minutes.
                </p>
                <div className="d-flex gap-4 text-muted mt-2">
                    <span>
                        <i className="fa fa-clock me-1" /> 20 min
                    </span>
                    <span>
                        <i className="fa fa-person me-1" /> Serves 2
                    </span>
                    <span>
                        <i className="fa fa-fire me-1" /> 650 kcal
                    </span>
                </div>
                <hr className="mt-4" />
            </div>
            {/* CONTENT GRID */}
            <div className="container mt-4 pb-5">
                <div className="row">
                    {/* LEFT SIDE: INGREDIENTS */}
                    <div className="col-lg-4 mb-4">
                        <h4 className="fw-bold mb-3">Ingredients</h4>
                        <div className="ingredient-item">200g spaghetti</div>
                        <div className="ingredient-item">100g pancetta (or bacon)</div>
                        <div className="ingredient-item">2 large eggs</div>
                        <div className="ingredient-item">1/2 cup grated Parmesan</div>
                        <div className="ingredient-item">2 cloves garlic, minced</div>
                        <div className="ingredient-item">Salt &amp; black pepper</div>
                        <div className="ingredient-item">Olive oil</div>
                        <h4 className="fw-bold mt-5 mb-3">Nutrition (per serving)</h4>
                        <div className="nutrition-box">
                            <p>
                                <strong>Calories:</strong> 650 kcal
                            </p>
                            <p>
                                <strong>Protein:</strong> 25 g
                            </p>
                            <p>
                                <strong>Carbs:</strong> 60 g
                            </p>
                            <p>
                                <strong>Fats:</strong> 30 g
                            </p>
                        </div>
                    </div>
                    {/* RIGHT SIDE: STEPS */}
                    <div className="col-lg-8">
                        <h4 className="fw-bold mb-3">Instructions</h4>
                        <div className="step-box">
                            <h5 className="fw-bold">1. Cook the spaghetti</h5>
                            <p>Boil salted water and cook the spaghetti until al dente.</p>
                        </div>
                        <div className="step-box">
                            <h5 className="fw-bold">2. Prepare the pancetta</h5>
                            <p>Heat olive oil in a pan, add pancetta, and cook until crispy.</p>
                        </div>
                        <div className="step-box">
                            <h5 className="fw-bold">3. Mix eggs &amp; cheese</h5>
                            <p>In a bowl, whisk together eggs and Parmesan cheese.</p>
                        </div>
                        <div className="step-box">
                            <h5 className="fw-bold">4. Combine pasta and pancetta</h5>
                            <p>Add the cooked pasta to the pan and stir well.</p>
                        </div>
                        <div className="step-box">
                            <h5 className="fw-bold">5. Add the egg mixture</h5>
                            <p>Remove the pan from heat and quickly stir in the egg mixture.</p>
                        </div>
                        <div className="step-box">
                            <h5 className="fw-bold">6. Serve and enjoy</h5>
                            <p>Season with black pepper and serve hot with extra Parmesan.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>

    </>)
}