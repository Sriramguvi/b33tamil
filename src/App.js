import { Addcolor } from "./Addcolor";
import "./App.css";
import { useState } from "react";
import {  Route, Routes, useNavigate,Navigate } from "react-router-dom";
import { ColorBox } from "./ColorBox";
import { MovieDetails } from "./MovieDetails";
import { Addmovie } from "./Addmovie";
import { NotFound } from "./NotFound";
import { MovieList } from "./MovieList";
import { Home } from "./Home";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import DeleteIcon from '@mui/icons-material/Delete';
import { Editmovie } from "./Editmovie";





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
      <Paper elevation={4} style={{minHeight:"100vh"} }>
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


