import { Route, Routes } from "react-router";
import { Login } from "./pages/login/login";
import { Movies } from "./pages/movies/movies";
import { DetailMovie } from "./pages/detailMovie/detailMovie";
import { CreateMovie } from "./pages/createMovie/createMovie";
import SimpleIcon from ".//assets/images/avatar.jpeg";
import SimplWolf from ".//assets/images/wilf.jpg";
import SimpleLegend from ".//assets/images/legend.jpg";
import Simple300 from ".//assets/images/300.jpg";
import SimpleInter from ".//assets/images/interstellar.jpg";
import SimplePain from ".//assets/images/pain.jpg";
import SimpleOne from ".//assets/images/one.jpg";
import SimpleAss from ".//assets/images/assassins.jpg";
import SimpleHoll from ".//assets/images/holl.jpg";
import SimpleStar from ".//assets/images/star1.jpg";
import { useState } from "react";


function App() {
  const [movie, setMovie] = useState([
    {
        id: 1,
        img: SimpleIcon,
        Title: "Avatar",
        Year: "2009",
        Genre: "Action, Adventure, Fantasy",
        Director: "James Cameron",
        star: SimpleStar,
        comments:""

    },
    {
        id: 2,
        img: SimplWolf,
        Title: "The Wolf of Wall Street",
        Year: "2013",
        Genre: "Biography, Comedy, Crime",
        Director: "Martin Scorsese",
        star: SimpleStar


    },
    {
        id: 3,
        img: SimpleLegend,
        Title: "I Am Legend",
        Year: "2007",
        Genre: "Drama, Horror, Sci-Fi",
        Director: "Francis Lawrence",
        star: SimpleStar


    },
    {
        id: 4,
        img: Simple300,
        Title: "300",
        Year: "2006",
        Genre: "Action, Drama, Fantasy",
        Director: "Zack Snyder",
        star: SimpleStar

    },
    {
        id: 5,
        img: SimpleInter,
        Title: "Interstellar",
        Year: "2014",
        Genre: "Adventure, Drama, Sci-Fi",
        Director: "Christopher Nolan",
        star: SimpleStar

    },
    {
        id: 6,
        img: SimplePain,
        Title: "Pain & Gain",
        Year: 2013,
        Genre: "Action, Comedy, Crime, Drama",
        Director: "Michael Bay",
        star: SimpleStar

    },
    {
        id: 7,
        img: SimpleOne,
        Title: "Rogue One: A Star Wars Story",
        Year: "2016",
        Genre: "Action, Adventure, Sci-Fi",
        Director: "Gareth Edwards",
        star: SimpleStar

    },

    {
        id: 8,
        img: SimpleAss,
        Title: "Assassin's Creed",
        Year: "2016",
        Genre: "Action, Adventure, Fantasy",
        Director: "Justin Kurzel",
        star: SimpleStar

    },
    {
        id: 9,
        img: SimpleHoll,
        Title: "Once Upon a Time... in Hollywood",
        Year: 2019,
        Genre: "Comedy, Drama",
        Director: "Quentin Tarantino",
        star: SimpleStar
    }
]);

 
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/movies" element={<Movies movie={movie}/>} />
        <Route path="/detailMovie/:id" element={<DetailMovie movie={movie}/>} />
        <Route path="/createMovie" element={<CreateMovie />} />


      </Routes>
    </div>
  );
}

export default App;
