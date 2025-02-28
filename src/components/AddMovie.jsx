// src/components/AddMovie.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddMovie = ({ movies, setMovies }) => {
  const navigate = useNavigate();

  const [newMovie, setNewMovie] = useState({
    title: "",
    director: "",
    genre: "",
    releaseYear: "",
    synopsis: "",
    posterUrl: "",
  });

  const handleChange = (e) => {
    setNewMovie({ ...newMovie, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!newMovie.title || !newMovie.director || !newMovie.genre || !newMovie.releaseYear || !newMovie.synopsis || !newMovie.posterUrl) {
      alert("Please fill all fields!");
      return;
    }

    const updatedMovies = [
      ...movies,
      { id: movies.length + 1, ...newMovie, releaseYear: Number(newMovie.releaseYear) },
    ];
    
    setMovies(updatedMovies);
    navigate("/"); // Redirect back to Dashboard
  };

  return (
    <div className="add-movie-form">
      <h2>Add a New Movie</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="title" placeholder="Title" value={newMovie.title} onChange={handleChange} />
        <input type="text" name="director" placeholder="Director" value={newMovie.director} onChange={handleChange} />
        <select name="genre" value={newMovie.genre} onChange={handleChange}>
          <option value="">Select Genre</option>
          <option value="Action">Action</option>
          <option value="Comedy">Comedy</option>
          <option value="Drama">Drama</option>
          <option value="Science Fiction">Science Fiction</option>
        </select>
        <input type="number" name="releaseYear" placeholder="Release Year" value={newMovie.releaseYear} onChange={handleChange} />
        <textarea name="synopsis" placeholder="Synopsis" value={newMovie.synopsis} onChange={handleChange}></textarea>
        <input type="text" name="posterUrl" placeholder="Poster Image URL" value={newMovie.posterUrl} onChange={handleChange} />
        
        <button type="submit">Add Movie</button>
        <button type="button" onClick={() => navigate("/")}>Cancel</button>
      </form>
    </div>
  );
};

export default AddMovie;
