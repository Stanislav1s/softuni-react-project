export default function Catalog() {
    return (
        <>
            <div>
                <>
                    <header className="container mt-5 text-center">
                        <h1 className="fw-bold">Recipe Catalog</h1>
                        <p className="text-muted">Browse our collection of delicious recipes</p>
                    </header>
                    {/* RECIPE GRID */}
                    <div className="container mt-4 pb-5">
                        <div className="row g-4">
                            {/* RECIPE CARD 1 */}
                            <div className="col-lg-4 col-md-6">
                                <div className="card recipe-card shadow-sm">
                                    <img
                                        src="https://images.unsplash.com/photo-1504674900247-0877df9cc836"
                                        className="card-img-top"
                                        alt="Pasta"
                                    />
                                    <div className="card-body">
                                        <h5 className="card-title">Italian Pasta Carbonara</h5>
                                        <p className="card-text text-muted">
                                            Creamy, rich, and authentic Italian flavors in every bite.
                                        </p>
                                        <a href="#" className="btn btn-primary w-100">
                                            View Recipe
                                        </a>
                                    </div>
                                </div>
                            </div>
                            {/* RECIPE CARD 2 */}
                            <div className="col-lg-4 col-md-6">
                                <div className="card recipe-card shadow-sm">
                                    <img
                                        src="https://images.unsplash.com/photo-1490645935967-10de6ba17061"
                                        className="card-img-top"
                                        alt="Burger"
                                    />
                                    <div className="card-body">
                                        <h5 className="card-title">Homemade Burger Deluxe</h5>
                                        <p className="card-text text-muted">
                                            Juicy beef patty, fresh veggies, and toasted buns.
                                        </p>
                                        <a href="#" className="btn btn-primary w-100">
                                            View Recipe
                                        </a>
                                    </div>
                                </div>
                            </div>
                            {/* RECIPE CARD 3 */}
                            <div className="col-lg-4 col-md-6">
                                <div className="card recipe-card shadow-sm">
                                    <img
                                        src="https://images.unsplash.com/photo-1605478031468-05f3f2ce2f2c"
                                        className="card-img-top"
                                        alt="Cake"
                                    />
                                    <div className="card-body">
                                        <h5 className="card-title">Chocolate Lava Cake</h5>
                                        <p className="card-text text-muted">
                                            Warm molten center with rich chocolate flavor.
                                        </p>
                                        <a href="#" className="btn btn-primary w-100">
                                            View Recipe
                                        </a>
                                    </div>
                                </div>
                            </div>
                            {/* RECIPE CARD 4 */}
                            <div className="col-lg-4 col-md-6">
                                <div className="card recipe-card shadow-sm">
                                    <img
                                        src="https://images.unsplash.com/photo-1546069901-eacef0df6022"
                                        className="card-img-top"
                                        alt="Salad"
                                    />
                                    <div className="card-body">
                                        <h5 className="card-title">Healthy Green Salad</h5>
                                        <p className="card-text text-muted">
                                            A refreshing bowl packed with nutrients.
                                        </p>
                                        <a href="#" className="btn btn-primary w-100">
                                            View Recipe
                                        </a>
                                    </div>
                                </div>
                            </div>
                            {/* RECIPE CARD 5 */}
                            <div className="col-lg-4 col-md-6">
                                <div className="card recipe-card shadow-sm">
                                    <img
                                        src="https://images.unsplash.com/photo-1504754524776-8f4f37790ca0"
                                        className="card-img-top"
                                        alt="Smoothie"
                                    />
                                    <div className="card-body">
                                        <h5 className="card-title">Strawberry Smoothie</h5>
                                        <p className="card-text text-muted">
                                            A sweet, fresh, and healthy drink.
                                        </p>
                                        <a href="#" className="btn btn-primary w-100">
                                            View Recipe
                                        </a>
                                    </div>
                                </div>
                            </div>
                            {/* RECIPE CARD 6 */}
                            <div className="col-lg-4 col-md-6">
                                <div className="card recipe-card shadow-sm">
                                    <img
                                        src="https://images.unsplash.com/photo-1551218808-94e220e084d2"
                                        className="card-img-top"
                                        alt="Steak"
                                    />
                                    <div className="card-body">
                                        <h5 className="card-title">Grilled Steak Plate</h5>
                                        <p className="card-text text-muted">
                                            Perfectly grilled steak with sides.
                                        </p>
                                        <a href="#" className="btn btn-primary w-100">
                                            View Recipe
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>

            </div>
        </>
    )
}