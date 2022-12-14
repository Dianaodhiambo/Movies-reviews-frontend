import React, {useState, useEffect} from "react";
import Card from '../Components/Card'

function MovieList () {
    const [movies, setMovies] = useState([])

useEffect(()=> {
    fetch("https://moviesreviews-production.up.railway.app//movies")
    .then((r) => r.json())
    .then((movies)=> {
        setMovies(movies);
    });
}, []);
console.log()

return (
    
    <div className="movies-card">
        {movies.map((movies_id, id) => {
            return (<Card key={id}
            title = {movies_id.title}
            description = {movies_id.description}
            category = {movies_id.category}
            image_url={movies_id.image_url}
            reviews ={movies_id.reviews}>
            </Card>)

        })}

  
    </div>
   
 )
}
export default MovieList;