import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API } from "./Global";
import { EditMovieForm } from "./EditMovieForm";

export function Editmovie() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch(`${API}/moviedata/${id}`)
      .then((data) => data.json())
      .then((mv) => setMovie(mv));


  }, [id]);


  return (
    <div>
      {movie ? <EditMovieForm movie={movie} /> : "Loading....."}
    </div>
  );
}
