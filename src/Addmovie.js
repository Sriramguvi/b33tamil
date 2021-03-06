import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from "react";
import { API } from "./Global";
import { useNavigate,Navigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from 'yup';


const formValidationSchema=yup.object({
  name :yup
       .string().required("why not fill this name?").min(2),
  poster :yup
       .string().required("why not fill this poster?").min(4),
  rating :yup
  .number().required("why not fill this rating?").min(0).max(10),
  summary :yup
      .string().required("why not fill this summary?").min(20),
  trailer:yup
      .string().required("why not fill this trailer?").min(4),



});
export  function Addmovie() {
  // const [name, setName] = useState("");
  // const [poster, setPoster] = useState("");
  // const [rating, setRating] = useState("");
  // const [summary, setSummary] = useState("");
  // const [trailer, setTrailer] = useState("");

  const {handleSubmit,values,handleChange,errors,handleBlur,touched}=useFormik({
    initialValues:{
      name :"",
       poster :"",
      rating :"",
      summary :"",
      trailer:"",
    },
    validationSchema:formValidationSchema,
    onSubmit:(values) =>{
  console.log("form values",values)
  addMovie(values);
    },
  });




  const navigate=useNavigate();
  const addMovie = (newMovie) => { 

 
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
    <form  onSubmit={handleSubmit} className="add-movie-form">

      <TextField 
      name='name'
      value={values.name}
      onChange={handleChange}
       onBlur={handleBlur}
   
       label="Name"
        variant="outlined"
        error={errors.name && touched.name} 
        helpertext=  {errors.name && touched.name ? errors.name:""}/>
       
      <TextField
           name='poster'
           value={values.poster}
           onChange={handleChange}
            onBlur={handleBlur}
        
     
       label="Poster" 
       variant="outlined"
       error={errors.poster && touched.poster} 
       helpertext=  {errors.poster && touched. poster?errors.poster:""}/> 
       
      <TextField 
           name='rating'
           value={values.rating}
           onChange={handleChange}
            onBlur={handleBlur}
        
       label="Rating"
        variant="outlined" 
        error={errors.rating && touched.rating}
       helperText= {errors.rating && touched.rating?errors.rating:""}/>
        
      <TextField 
          name='summary'
          value={values.summary}
          onChange={handleChange}
           onBlur={handleBlur}
       
       label="summary"
        variant="outlined" 
        error={errors.summary && touched.summary }
        helperText=  {errors.summary && touched.summary ? errors.summary:""}/>
       
      <TextField 
          name='trailer'
          value={values.trailer}
          onChange={handleChange}
           onBlur={handleBlur}
       
      label="Trailer" 
      variant="outlined" 
      error={errors.trailer && touched.trailer }
      helperText=   {errors.trailer && touched.trailer ? errors.trailer:""}/>
      

      <Button type='submit' variant="outlined">Add Movie</Button>

    </form>
  );


}
