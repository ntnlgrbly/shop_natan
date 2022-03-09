import React, {useEffect, useState} from "react";
import axios from "axios";
import {sortBy} from "lodash";
import "./css/all.css";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

import {MoviesInput} from "./moviesInput";
import {StripHome} from "./stripHome";
import {MoviesList} from "./moviesList";
import {MovieVideo} from "./movieVideo";
import Footer from "./footer";


export const AppMovies = () => {
    
    let [search, setSearch] = useState("bank")
    let [ar, setAr] = useState([])
    let [sortSelect, setSortSelect] = useState("Title");
 
    const sortMovies = async (_sort) => {

        console.log("_sort = ", _sort);
        //TODO -more conditions for years
        let temp_ar = null;
        //if .... Title || Year? - do this
        if (_sort == "Title" || _sort == "Year") {
            //   console.log("if work");
            temp_ar = sortBy(ar, _sort);
        } else {
            //   console.log("else work");
            let url = `https://www.omdbapi.com/?s=bank&y=${_sort}&apikey=e7c61f3b`;
            // let resp = await fetch(url);
            // let data = await resp.json();
            let resp = await axios.get(url);
            console.log("axios", resp);
            //   temp_ar = sortBy(resp.data.Search, _sort);
            temp_ar = resp.data.Search;
        }

        setAr(temp_ar);
    };

    // http://localhost:3000/abc
    const doSearchApi2 = async (searchQuery) => {
        let url = `http://www.omdbapi.com/?s=${searchQuery}&apikey=e7c61f3b`
        // let resp = await fetch(url);
        // let data = await resp.json();
        let resp = await axios.get(url);
        console.log("axios", resp);
        let temp_ar = sortBy(resp.data.Search, sortSelect);
        setAr(temp_ar);
    }

    return (
        <Router>
            <MoviesInput sortMovies={sortMovies}   setSearch={setSearch}  />
            <Switch>
                <Route exact path={["/:search", "/"]} render={(data) =>
                    // <Route exact path="/" render={(data) =>

                    <div>
                        <StripHome/>
                        <MoviesList movies_ar={ar}
                                    doSearchApi2={doSearchApi2} {...data}/>
                    </div>
                }/>
                <Route exact path="/Video/:id" component={MovieVideo}/>

            </Switch>
        <Footer/>
        </Router>
    )
}

