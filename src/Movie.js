import { useState } from "react";
import { useNavigate } from "react-router-dom";
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';
import { Counter } from "./Counter";
import IconButton from '@mui/material/IconButton';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Card from '@mui/material/Card';
import { CardContent } from "@mui/material";
import CardActions from '@mui/material/CardActions';


export function Movie({ movie, id, deleteButton, editButton }) {

  const styles = {
    color: movie.rating > 8 ? "green" : "red"
  };
  const [show, setShow] = useState(true);
  // const summaryStyle={
  //   display:show?"block":"none"
  // }
  const navigate = useNavigate();
  return (

    <Card className="movie-container">

      <img src={movie.poster} alt="RRR" className="movie-poster" />
      <CardContent>

        <div className="movie-specs">

          <h6 className="movie-name">{movie.name} <IconButton aria-label="info" color="primary" onClick={() => navigate("/movielist/" + id)}><InfoRoundedIcon />

          </IconButton>
            <IconButton aria-label="info" color="primary" onClick={() => setShow(!show)}>
              {show ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </IconButton>
          </h6>

          <p style={styles} className="movie-rating">⭐ {movie.rating}</p>
        </div>




        {/* <p style={
              summaryStyle}className="movie-summary">{summary}</p> */}
        {show ? <p className="movie-summary">{movie.summary}</p> : ""}
      </CardContent>
      <CardActions>
        <Counter /> {deleteButton}  {editButton}
      </CardActions>

    </Card>

  );

}
