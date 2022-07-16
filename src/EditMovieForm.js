
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { API } from "./Global";
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

export function EditMovieForm({ movie }) {
  // const [name, setName] = useState(movie.name);
  // const [poster, setPoster] = useState(movie.poster);
  // const [rating, setRating] = useState(movie.rating);
  // const [summary, setSummary] = useState(movie.summary);
  // const [trailer, setTrailer] = useState(movie.trailer);
 
  const {handleSubmit,values,handleChange,errors,handleBlur,touched}=useFormik({
    initialValues:{
      name :movie.name,
       poster :movie.poster,
      rating :movie.rating,
      summary :movie.summary,
      trailer:movie.trailer,
    },
    validationSchema:formValidationSchema,
    onSubmit:(values) =>{
  console.log("form values",values)
  editMovie(values);
    },
  });

 
 
 
 
  const navigate = useNavigate();
  const editMovie = (updateMovie) => {

    // const updateMovie = {
    //  name,
    // poster,
    //   rating,
    //   summary,
    //   trailer,
    // };
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
      

      <Button type='submit' variant="outlined">edit Movie</Button>

    </form>
    // <div className="add-movie-form">

    //   <TextField onChange={(event) => setName(event.target.value)} label="Name" variant="outlined" value={name} />
    //   <TextField onChange={(event) => setPoster(event.target.value)} label="Poster" variant="outlined" value={poster} />
    //   <TextField onChange={(event) => setRating(event.target.value)} label="Rating" variant="outlined" value={rating} />
    //   <TextField onChange={(event) => setSummary(event.target.value)} label="summary" variant="outlined" value={summary} />
    //   <TextField onChange={(event) => setTrailer(event.target.value)} label="Trailer" variant="outlined" value={trailer} />

    //   <Button color="success" onClick={editMovie} variant="outlined">Save</Button>

    // </div>
  );


}
