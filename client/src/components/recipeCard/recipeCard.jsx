export default function RecipeCard({
    _id,
    title,
    description1,
    imgUrl
}) {
    return (
        <>
            {/* RECIPE CARD 6 */}
            <div className="col-lg-4 col-md-6">
                <div className="card recipe-card shadow-sm">
                    <img
                        src={imgUrl}
                        className="card-img-top"
                        alt={title}
                    />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text text-muted">
                            {description1}
                        </p>
                        <a href="#" className="btn btn-primary w-100">
                            View Recipe
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}