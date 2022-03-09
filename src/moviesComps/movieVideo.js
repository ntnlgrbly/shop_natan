import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import "./css/all.css";

export const MovieVideo = (props) => {
    let movId = props.match.params.id;
    let [item,setItem] = useState([])
    useEffect(()=>{
        doApiVideo();
    },[])
    const doApiVideo =async () =>{
        let id = props.match.params.id;
        let url = `http://www.omdbapi.com/?i=${id}&apikey=e7c61f3b`;
        let resp = await axios.get(url);
        console.log(resp.data);
        setItem(resp.data);
    }
  return(
   <div className="container">
    <div className=" col-lg-6 shadow p-3 mx-auto over-flow-hidden">
    <img className="pic_bg" src={item.Poster}/>
    <h2>Name :{item.Title}</h2>
   <div>Score :{item.imdbRating}.</div>
   <div>Votes count :{item.imdbVotes}</div>
   <div>Genre : {item.Genre}.</div> 
   <div>Year : {item.Year}.</div>
   <div>Rating : {item.imdbRating}.</div>
   <Link className="btn btn-dark mt-5" to="/">Back to  movies list</Link>
    </div>   
  </div>
  )
}

