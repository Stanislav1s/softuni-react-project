import CarouselItem from "./CarouselItem";

export default function Carousel({ id = "carousel", items = [] }) {

    return (
        <div id={id} className="carousel slide mt-4 container" data-bs-ride="carousel">

            {/* INDICATORS */}
            <div className="carousel-indicators">
                {items.map((_, index) => (
                    <button
                        key={index}
                        type="button"
                        data-bs-target={`#${id}`}
                        data-bs-slide-to={index}
                        className={index === 0 ? "active" : ""}
                    />
                ))}
            </div>

            {/* SLIDES */}
            <div className="carousel-inner rounded shadow">
                {items.map((item, index) => (
                    <CarouselItem
                        key={item._id}
                        item={item}
                        active={index === 0}
                    />
                ))}
            </div>

            {/* CONTROLS */}
            <button
                className="carousel-control-prev"
                type="button"
                data-bs-target={`#${id}`}
                data-bs-slide="prev"
            >
                <span className="carousel-control-prev-icon" />
            </button>

            <button
                className="carousel-control-next"
                type="button"
                data-bs-target={`#${id}`}
                data-bs-slide="next"
            >
                <span className="carousel-control-next-icon" />
            </button>
        </div>
    );
}