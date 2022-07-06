import { Addcolor } from "./Addcolor";
import "./App.css";
import { useEffect, useState } from "react";
import {  Route, Routes, useNavigate,Navigate } from "react-router-dom";
import { ColorBox } from "./ColorBox";
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';
import { MovieDetails } from "./MovieDetails";
import { Addmovie } from "./Addmovie";
import { NotFound } from "./NotFound";
import { MovieList } from "./MovieList";
import { Counter } from "./Counter";
import { Home } from "./Home";
import IconButton from '@mui/material/IconButton';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import { CardContent } from "@mui/material";
import CardActions from '@mui/material/CardActions';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import TextField from '@mui/material/TextField';
import {  useParams } from "react-router-dom";
import {API} from "./Global";
import DeleteIcon from '@mui/icons-material/Delete';




export default function App() {

// Definition of App





const navigate=useNavigate();
 
const [mode,setMode]=useState("light")
const theme = createTheme({
  palette: {
    mode: mode,
  },
});

  return (
    <ThemeProvider theme={theme}>
      <Paper elevation={4} style={{minHeight:"10"} }>
    <div className="App">
<AppBar position="static">
  <Toolbar>
    <Button color="inherit" onClick={()=> navigate("/") }>Home</Button>
    <Button color="inherit" onClick={()=> navigate("/movielist") }>Movielist</Button>
    <Button color="inherit" onClick={()=> navigate("/movielist/addmovie") }>AddMovie</Button>
    <Button color="inherit" onClick={()=> navigate("/addcolor") }>AddColor</Button>
    <Button  
    style={{marginLeft:"auto "}}
   startIcon={mode === "dark"?<Brightness7Icon/> :<Brightness4Icon/>}
    color="inherit" 
    onClick={()=> setMode(mode === "dark" ? "light" : "dark") }>
      {mode === "dark"?"light":"dark"}mode</Button>
</Toolbar>
  </AppBar>
<div className="router-container">
  <Routes>
       <Route path="/" element={<Home/>}/>
        <Route path="/movielist" element={<MovieList />}/>
        <Route path="/films" element={<Navigate replace to="/movielist"/>}/>
        <Route path="/movielist/:id" element={<MovieDetails />}/>
        <Route path="/movielist/addmovie" element={<Addmovie />}/>
        <Route path="/movielist/edit/:id" element={<Editmovie />}/>
           <Route path="/colorbox" element={<ColorBox/>}/>
           <Route path="/addcolor" element={<Addcolor/>}/>
           <Route path="/404" element={<NotFound/>}/>
           <Route path="*" element={<Navigate replace to="/404"/>}/>
      </Routes>
      </div>
    </div> 
     </Paper >
     </ThemeProvider>
  );

}

function Editmovie(){
  const { id } = useParams();
  const[movie,setMovie]=useState(null);

  useEffect(() =>{
    fetch(`${API}/moviedata/${id}`)
    .then((data)=>  data.json())
    .then((mv)=>setMovie(mv));
    
    
    },[id]);

 
  return(
 <div>
{movie ? < EditMovieForm movie={movie} /> : "Loading....."}
  </div>
 );
}
function EditMovieForm({movie}){
  const [name, setName] = useState(movie.name);
  const [poster, setPoster] = useState(movie.poster);
  const [rating, setRating] = useState(movie.rating);
  const [summary, setSummary] = useState(movie.summary);
  const [trailer, setTrailer] = useState(movie.trailer);
  const navigate=useNavigate();
  const editMovie = () => { 

   const updateMovie = {
      name,
      pic: poster,
      rating,
      summary,
      trailer,
    };
    console.log(updateMovie);

    fetch(`${API}/moviedata/${movie.id}`, {
      method: "PUT",
      body: JSON.stringify(updateMovie),
      headers: {
        "Content-Type": "application/json"
      },
    }).then(() => navigate("/movielist"));
  };
  return (
    <div className="add-movie-form">

      <TextField onChange={(event) => setName(event.target.value)} label="Name" variant="outlined"value={name} />
      <TextField onChange={(event) => setPoster(event.target.value)} label="Poster" variant="outlined"value={poster} />
      <TextField onChange={(event) => setRating(event.target.value)} label="Rating" variant="outlined"value={rating} />
      <TextField onChange={(event) => setSummary(event.target.value)} label="summary" variant="outlined"value={summary} />
      <TextField onChange={(event) => setTrailer(event.target.value)} label="Trailer" variant="outlined"value={trailer} />

      <Button color="success" onClick={editMovie} variant="outlined">Save</Button>

    </div>
  );


}




export function Movie({movie,id,deleteButton,editButton}){

const styles={
  color:movie.rating > 8 ? "green":"red"
}
const [show,setShow]=useState(true)
// const summaryStyle={
//   display:show?"block":"none"
// }
const navigate=useNavigate();
  return(
    
    <Card className="movie-container">
      
    <img src={movie.pic} alt="RRR" className="movie-poster" />
<CardContent>
  
    <div className="movie-specs">
      
      <h6 className="movie-name">{movie.name} <IconButton aria-label="info"color="primary"  onClick={()=>navigate("/movielist/"+id)} ><InfoRoundedIcon />
  
   </IconButton>
   <IconButton aria-label="info"color="primary" onClick={()=>setShow(!show)} >
   {show? <ExpandLessIcon /> : <ExpandMoreIcon/>}
     </IconButton>
  </h6>
  
      <p  style={styles}className="movie-rating">⭐ {movie.rating}</p>
    </div>
    
    
  
  
    {/* <p style={
      summaryStyle}className="movie-summary">{summary}</p> */}
   {show? <p className="movie-summary">{movie.summary}</p> :""}
   </CardContent>
   <CardActions>
   <Counter/> {deleteButton}  {editButton}
   </CardActions>
    
  </Card>

  );

}
