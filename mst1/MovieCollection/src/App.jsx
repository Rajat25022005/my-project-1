import { useState } from "react";
import "./App.css";

export default function App() {

  const [movies, setMovies] = useState([
    { id: 1, title: "Inception", genre: "Sci-Fi", rating: 8.8 },
    { id: 2, title: "Interstellar", genre: "Sci-Fi", rating: 8.6 },
    { id: 3, title: "The Dark Knight", genre: "Action", rating: 9.0 },
    { id: 4, title: "Dark matter", genre:"Sci-fi", rating: 10.0}
  ]);

  const removeMovie = (id) => {
    setMovies(movies.filter((m) => m.id !== id));
  };

  return (
    <div className="container">
      <h1>Movie Collection</h1>
      <div className="cards">
        {movies.map((movie) => (
          <div key={movie.id} className="card">
            <h2>{movie.title}</h2>
            <p><strong>Genre:</strong> {movie.genre}</p>
            <p><strong>Rating:</strong> {movie.rating}</p>
            <button onClick={() => removeMovie(movie.id)}>Remove</button>
          </div>
        ))}
        {movies.length === 0 && <p>No movies left!</p>}
      </div>
    </div>
  );
}
