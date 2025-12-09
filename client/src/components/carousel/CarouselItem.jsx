import { Link } from "react-router";
export default function CarouselItem({ item, active }) {
    return (
        <div className={`carousel-item ${active ? "active" : ""}`}>
            <Link to={`/${item._id}/details`} className="text-decoration-none">
                <img
                    src={item.imgUrl}
                    className="d-block w-100 recipe-img"
                    alt={item.title}
                />

                <div className="carousel-caption bg-dark bg-opacity-50 p-3 rounded">
                    <h3 className="text-white">{item.title}</h3>
                    <p className="text-light">{item.description}</p>
                </div>
            </Link>
        </div>
    );
}