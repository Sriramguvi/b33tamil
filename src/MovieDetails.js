import { useNavigate, useParams } from "react-router-dom";
import Button from '@mui/material/Button';
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';
import { useEffect,useState } from "react";
import {API} from "./Global";
export function MovieDetails() {
  const { id } = useParams();
  const[movie,setMovie]=useState({});

  useEffect(() =>{
    fetch(`${API}/moviedata/${id}`)
    .then((data)=>  data.json())
    .then((mv)=>setMovie(mv));
    
    
    },[id]);


  
  const navigate = useNavigate();
  const styles = {
    color: movie.rating > 8 ? "green" : "red"
  };
  return (


    <div>
      <iframe width="853" height="480" src={movie.trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <div className="movie-detail-container">


        <div className="movie-specs">
          <h3 className="movie-name">{movie.name}-{id}</h3>
          <p style={styles} className="movie-rating">⭐ {movie.rating}</p>
        </div>



        <p className="movie-summary">{movie.summary}</p>
        <Button startIcon={<ArrowBackIosRoundedIcon />} onClick={() => navigate(-1)} variant="outlined">back</Button>

      </div>
    </div>

  );
}
