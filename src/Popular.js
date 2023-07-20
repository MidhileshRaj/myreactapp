import React,{useState,useEffect, useContext} from 'react'
import axios from 'axios'
import { API_KEY, imageUrl } from './Url'
import { Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { hideContext, movieContext } from './App';
//import YouTube from 'react-youtube';



function Popular({url}) {
  
  const[movies,setMovies]=useState([]);
  const [movieurl,setMovieurl]= useContext(movieContext);
  console.log(url);
  const [hide,setHide]=useContext(hideContext);


  useEffect(() => {
    setMovieurl(movies);
    setHide(true);
    
  }, [movies]);
  console.log(movieurl);
  
  // const[Editid,setEditid]=useState('');
  // const Trailer=(T)=>{
  //  console.log(T)
  //  axios.get(`https://api.themoviedb.org/3/movie/${T}/videos?api_key=${API_KEY}&language=en-US`).then((res)=>setEditid(res.data.results[0]))
  
  // }
  // const opts = {
  //   height: '390',
  //   width: '640',
  //   playerVars: {
  //     // https://developers.google.com/youtube/player_parameters
  //     autoplay: 1,
  //   },
  // };

  useEffect(() => {

    axios.get(url).then((res)=>setMovies(res.data.results))
   console.log('Movies' ,movies)
   
  },[url])
  
return (
  <div className='' >

      {movies.map((i,index) => {
        
      return(
      // <h1>{i.title}</h1>
  <Link to={`/details/${index}`}>
  <Card className='col-md-3 float-left m-3' >
  {/* style={{ maxWidth: '10rem' }} className='m-4 float-left' */}
   {/* onClick={()=>Trailer(i.id)} */}
   key={index}
    <Card.Img variant="top" src={imageUrl+i.backdrop_path} />
    <Card.Body>
      <Card.Title>{i.title}</Card.Title>
      <Card.Text>
        {i.overview}
      </Card.Text>
      <Button variant="primary">Go somewhere</Button>
    </Card.Body>
  </Card>
  </Link>

       )
              
      })}
    {/* <YouTube videoId={Editid.key} opts={opts}/>; */}
 </div>
  )
  

}

export default Popular