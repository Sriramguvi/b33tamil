import "./App.css";

export default function App() {

// Definition of App

  

  const movies = [
    {
      name: "Harry Potter and the Philosopher's Stone",
      pic:
      "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1627678495-13187196-1054877505181104.jpg?crop=1xw:1xh;center,top&resize=480%3A%2A"    ,
       rating: 8.8,
      summary: `Harry Potter and the Philosopher's Stone (released in the United States, India and the Philippines as Harry Potter and the Sorcerer's Stone) is a 2001 fantasy film directed by Chris Columbus and distributed by Warner Bros. Pictures, based on J. K. Rowling's 1997 novel of the same name.`,
    },
    {
      name: "Harry Potter and the Chamber of Secrets ",
      pic:
        "https://wallpapercave.com/wp/wp5692227.jpg",
      rating: 7,
      summary:
        "Harry Potter and the Chamber of Secrets is a 2002 fantasy film directed by Chris Columbus and distributed by Warner Bros. Pictures, based on J. K. Rowling's 1998 novel of the same name. Produced by David Heyman and written by Steve Kloves, it is the sequel to Harry Potter and the Philosopher's Stone (2001) and the second instalment in the Harry Potter film series..",
    },
    {
      name: "Harry Potter and the Prisoner of Azkaban",
      pic:
        "https://wallpaperaccess.com/full/2209649.jpg",
      rating: 8.1,
      summary:
        "Harry Potter and the Prisoner of Azkaban is a 2004 fantasy film directed by Alfonso Cuarón and distributed by Warner Bros. Pictures, based on J. K. Rowling's 1999 novel of the same name. The film was written by Steve Kloves, and produced by Chris Columbus and David Heyman. It is the sequel to Harry Potter and the Chamber of Secrets (2002) and the third instalment in the Harry Potter film series..",
    },
    {
      name: "Harry Potter and the Goblet of Fire",
      pic:
        "https://picfiles.alphacoders.com/342/thumb-342037.jpg",
      summary:
        "Harry Potter and the Goblet of Fire is a 2005 fantasy film directed by Mike Newell and distributed by Warner Bros. Pictures, based on the 2000 novel of the same name. Produced by David Heyman and written by Steve Kloves, it is the sequel to Harry Potter and the Prisoner of Azkaban (2004) and the fourth instalment in the Harry Potter film series.",
      rating: 8.8,
    },
    {
      name: "Harry Potter and the Order of the Phoenix",
      rating: 8,
      summary: `Harry Potter and the Order of the Phoenix is a 2007 fantasy film directed by David Yates and distributed by Warner Bros. Pictures.[6] It is based on J. K. Rowling's 2003 novel of the same name. The fifth instalment in the Harry Potter film series, it was written by Michael Goldenberg (making this the only film in the series not to be scripted by Steve Kloves) and produced by David Heyman and David Barron. .`,
        pic:
"https://wallpaperaccess.com/full/4002739.jpg"    },
    {
      name: "Harry Potter and the Half-Blood Prince ",
      pic: "https://m.media-amazon.com/images/M/MV5BNWM1NjNmZGEtOTk5Mi00ODBhLTgxMGUtNzNlYThlODA2ZGE4XkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_.jpg",
      rating: 8.6,
      summary: `Harry Potter and the Half-Blood Prince is a 2009 fantasy film directed by David Yates and distributed by Warner Bros. Pictures. It is based on J. K. Rowling's 2005 novel of the same name. The film, which is the sixth instalment in the Harry Potter film series, was written by Steve Kloves, and produced by David Heyman and David Barron. It stars Daniel Radcliffe as Harry Potter, alongside Rupert Grint and Emma Watson as Harry's best friends Ron Weasley and Hermione Granger respectively.`,
    },
    {
      name: "Harry Potter and the Deathly Hallows – Part 1",
      pic: "https://upload.wikimedia.org/wikipedia/en/thumb/2/2d/Harry_Potter_and_the_Deathly_Hallows_%E2%80%93_Part_1.jpg/220px-Harry_Potter_and_the_Deathly_Hallows_%E2%80%93_Part_1.jpg",
      rating: 8,
      summary: `Harry Potter and the Deathly Hallows – Part 1 is a 2010 fantasy film directed by David Yates and distributed by Warner Bros. Pictures.[5] It is the first of two cinematic parts based on J. K. Rowling's 2007 novel of the same name and the seventh instalment in the Harry Potter film series.[6] It was written by Steve Kloves and produced by David Heyman, David Barron, and Rowling and features an ensemble cast..`,
    },
    {
      name: "Harry Potter and the Deathly Hallows – Part 2",
      pic:
        "https://upload.wikimedia.org/wikipedia/en/d/df/Harry_Potter_and_the_Deathly_Hallows_%E2%80%93_Part_2.jpg",
      rating: 8,
      summary: `Harry Potter and the Deathly Hallows – Part 2 is a 2011 fantasy film directed by David Yates and distributed by Warner Bros. Pictures.[4] It is the second of two cinematic parts based on J. K. Rowling's 2007 novel of the same name and the eighth and final instalment in the Harry Potter film series.[5] It was written by Steve Kloves and produced by David Heyman, David Barron, and Rowling. The story continues to follow Harry Potter's quest to find and destroy Lord Voldemort's Horcruxes in order to stop him once and for all.`,
    },

    
    {
      name: "Dark Knight",
      pic:
        "https://i.pinimg.com/originals/0f/a9/af/0fa9afc141f0096e064a5ab1854b36f1.jpg",
      rating: 9,
      summary:
        "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    },
    {
      name: "King Kong",
      pic: "https://m.media-amazon.com/images/I/817FBcXLN2L._SL1500_.jpg",
      rating: 9,
      summary:
        "Peter Jackson's expansive remake of the 1933 classic follows director Carl Denham (Jack Black) and his crew on a journey from New York City to the ominous Skull Island to film a new movie. Accompanying him are playwright Jack Driscoll (Adrien Brody) and actress Ann Darrow (Naomi Watts), who is whisked away by the monstrous ape, Kong, after they reach the island. The crew encounters dinosaurs and other creatures as they race to rescue Ann, while the actress forms a bond with her simian captor.",
    },
  ];
  return (
    <div className="App">
      {/* {users.map(({ name, pic }) => (
        <Welcome name={name} pic={pic} />
      ))} */}

      <div className="movie-list">
        {movies.map(({ name, pic, rating, summary }) => (
          
          <Movie
            name={name}
            pic={pic}
            rating={rating}
            summary={summary}
          />
        ))}

      </div>
    </div>
  );
}

function Movie({ name, pic, rating, summary }) {
  return (
    <div className="movie-container">
      <img src={pic} alt={name} className="movie-poster" />
<button onClick=showandhide()
      <div className="movie-specs">
        <h3 className="movie-name">{name}</h3>
        <p className="movie-rating"> ⭐ {rating}</p>
      </div>

      <p className="movie-summary">{summary}</p>
    </div>
  );
}  