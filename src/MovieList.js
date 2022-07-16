import { Movie } from "./Movie";
import { useEffect,useState } from "react";
import {API} from "./Global";
import { useNavigate,navigate } from "react-router-dom";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';



export function MovieList() {
  // const movieslist=movies;

  const[moviesList,setMoviesList]=useState([]);

  const getMovie=()=>{
    fetch(`${API}/moviedata`)
.then((data)=>  data.json())
.then((moviedata)=>setMoviesList(moviedata));

  }

useEffect(() =>getMovie(),[]);

const deleteMovie =(id)=>{
  console.log("Delete movie:",id);
  fetch(`${API}/moviedata/${id}`,{method:"DELETE"}).then(()=>getMovie());  

};
const navigate=useNavigate();
  return (
    <div>


      <div className="movie-list">
        {moviesList.map((mv) => (

          <Movie
            key={mv.id}
            movie={mv}
            id={mv.id} 
            deleteButton={
              <IconButton 
              style={{marginLeft:"auto "}}
              aria-label="delete" size="large" onClick={()=>deleteMovie(mv.id)}>
              <DeleteIcon fontSize="inherit" color="error" />
            </IconButton> }
            editButton={
              <IconButton  onClick={()=>navigate(`/movielist/edit/${mv.id}`) }aria-label="delete" size="large">
              <EditIcon fontSize="inherit" color="secondary" />
            </IconButton> }
             
            />
           
            // < MovieDetails
            // movielist={mv}/>

        ))}

      </div>

    </div>
  );
}

