import { useEffect, useState } from "react";
import "./Home.css";
import Carousel from "../carousel/Carousel.jsx";

export default function Home() {

    const [latestRecipes, setLatestRecipes] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3030/jsonstore/recipes")
            .then(res => res.json())
            .then(result => {
                const sortedLatest = Object.values(result)
                    .filter(r => r.createdAt) // safety
                    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
                    .slice(0, 3);

                setLatestRecipes(sortedLatest);
            });
    }, []);

    return (
        <>
            <header className="text-center my-5">
                <h1 className="fw-bold mb-3">
                    Welcome to My<span className="foody-orange">Foody</span>
                </h1>
                <h4 className="text-muted">
                    A recipe sharing platform
                </h4>

                <p className="text-secondary fs-5 mt-4">
                    Check out our latest recipes...
                </p>
            </header>
            <Carousel id="resultRecipes" items={latestRecipes} />
        </>
    );
}