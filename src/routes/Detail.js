import { useEffect } from "react";
import { useParams } from "react-router-dom";

function Detail({ coverImg, title, year, summary, genres }) {
   const { id } = useParams();
   const getMovie = async () => {
      const json = await(
         await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
         ).json();
         console.log(json);
   };
   useEffect(() => {
      getMovie();
   }, [])
   return (
   <div>
      <img src={coverImg} alt={title}/>
      <div>
        <p>{summary}</p>
        <ul>
          {genres.map((g) => (
            <li key={g}>{g}</li>
          ))}
        </ul>
      </div>
    </div>
   );
}

export default Detail;