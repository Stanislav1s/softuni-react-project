import "./Home.css"
export default function Home() {
    return (<>
        <div>
            <div
                id="recipeCarousel"
                className="carousel slide mt-4 container"
                data-bs-ride="carousel"
            >
                <div className="carousel-indicators">
                    <button
                        type="button"
                        data-bs-target="#recipeCarousel"
                        data-bs-slide-to={0}
                        className="active"
                    />
                    <button
                        type="button"
                        data-bs-target="#recipeCarousel"
                        data-bs-slide-to={1}
                    />
                    <button
                        type="button"
                        data-bs-target="#recipeCarousel"
                        data-bs-slide-to={2}
                    />
                </div>
                <div className="carousel-inner rounded shadow">
                    {/* RECIPE 1 */}
                    <div className="carousel-item active">
                        <img
                            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836"
                            className="d-block w-100 recipe-img"
                            alt="Recipe 1"
                        />
                        <div className="carousel-caption bg-dark bg-opacity-50 p-3 rounded">
                            <h3>Italian Pasta Carbonara</h3>
                            <p>Creamy, hearty, and ready in 20 minutes!</p>
                        </div>
                    </div>
                    {/* RECIPE 2 */}
                    <div className="carousel-item">
                        <img
                            src="https://images.unsplash.com/photo-1490645935967-10de6ba17061"
                            className="d-block w-100 recipe-img"
                            alt="Recipe 2"
                        />
                        <div className="carousel-caption bg-dark bg-opacity-50 p-3 rounded">
                            <h3>Homemade Burger Deluxe</h3>
                            <p>Juicy beef, fresh veggies, toasted buns.</p>
                        </div>
                    </div>
                    {/* RECIPE 3 */}
                    <div className="carousel-item">
                        <img
                            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836"
                            className="d-block w-100 recipe-img"
                            alt="Recipe 3"
                        />
                        <div className="carousel-caption bg-dark bg-opacity-50 p-3 rounded">
                            <h3>Chocolate Lava Cake</h3>
                            <p>Warm, gooey, and indulgent dessert.</p>
                        </div>
                    </div>
                </div>
                <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#recipeCarousel"
                    data-bs-slide="prev"
                >
                    <span className="carousel-control-prev-icon" />
                </button>
                <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#recipeCarousel"
                    data-bs-slide="next"
                >
                    <span className="carousel-control-next-icon" />
                </button>
            </div>
        </div>
    </>
    )
}