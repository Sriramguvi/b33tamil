import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from "react";
import { API } from "./Global";
import { useNavigate,Navigate } from "react-router-dom";

export  function Addmovie() {
  const [name, setName] = useState("");
  const [poster, setPoster] = useState("");
  const [rating, setRating] = useState("");
  const [summary, setSummary] = useState("");
  const [trailer, setTrailer] = useState("");
  const navigate=useNavigate();
  const addMovie = () => { 

   const newMovie = {
      name,
      pic: poster,
      rating,
      summary,
      trailer,
    };
    console.log(newMovie);

    fetch(`${API}/moviedata`, {
      method: "POST",
      body: JSON.stringify(newMovie),
      headers: {
        "Content-Type": "application/json"
      },
    }).then(() => navigate("/movielist"));
  };
  return (
    <div className="add-movie-form">

      <TextField onChange={(event) => setName(event.target.value)} label="Name" variant="outlined" />
      <TextField onChange={(event) => setPoster(event.target.value)} label="Poster" variant="outlined" />
      <TextField onChange={(event) => setRating(event.target.value)} label="Rating" variant="outlined" />
      <TextField onChange={(event) => setSummary(event.target.value)} label="summary" variant="outlined" />
      <TextField onChange={(event) => setTrailer(event.target.value)} label="Trailer" variant="outlined" />

      <Button onClick={addMovie} variant="outlined">Add Movie</Button>

    </div>
  );


}
