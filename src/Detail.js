import React, { useContext, useEffect } from 'react'
import { useParams } from "react-router-dom"
import { hideContext, movieContext } from './App';
import { imageUrl } from './Url';

function Detail() {
  const { user } =useParams();
  const [movieurl,setMovieurl] = useContext(movieContext);
  console.log(movieurl);
  console.log(user);
  const DetailData = movieurl[user];
  console.log(DetailData);
  const [hide, setHide]=useContext(hideContext)

  useEffect(() => {
      setHide(false);

  }, [hide])
  
  return (
    <div>
        <h1>{DetailData.name || DetailData.title}</h1>
        <p>{DetailData.overview}</p>
        <p>Movie Popularity :
          {DetailData.popularity}
        </p>
        <p>{DetailData.original_country}</p>

        {/* <img src={imageUrl+DetailData.backdrop_path} 
        style={{height:"300px",width:"600px",marginBottom:"30px"}}
        alt="img"
        /> */}
        <img src={imageUrl+DetailData.poster_path} 
        style={{height:"400px",width:"800px",marginBottom:"30px"}}
        alt="img"
        />


    </div>
  )
}

export default Detail