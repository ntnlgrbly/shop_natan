import React, {useRef} from "react";
import {Link} from "react-router-dom";
import { useNavigate } from "react-router";
import {useEffect} from "react";
import { useHistory } from "react-router-dom";

export const MoviesInput = (props) => {
    let inputRef = useRef();
    let sortRef = useRef();
    const history = useHistory();



    return (
        <div className="container-fluid bg-danger p-3">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <h2>Movies search</h2>
                    </div>
                    <div className="col-lg-8 d-flex align-items-center justify-content-end ">
                        <input ref={inputRef} placeholder="Search...." type="search" className="form-control w-25"/>

                            <button onClick={() => {
                                // history.push("/")

                                // props.setSearch(inputRef.current.value)
                                // let navigate = useNavigate();
                                // navigate("/" +  inputRef.current.value);
                                history.push("/" + inputRef.current.value);
                                window.location.reload();
                            }} className="btn btn-dark"> Search
                            </button>

                        <div className="mx-2">Sort:</div>

                        <select onChange={() => {
                            props.sortMovies(sortRef.current.value)
                        }} ref={sortRef} className="from-select w-25">


                            <option value="Title">name</option>
                            <option value="Year">year</option>
                            <option value="2017">Year : 2017</option>
                            <option value="2018">Year : 2018</option>
                            <option value="2019">year : 2019</option>
                            <option value="2020">year : 2020</option>
                            <option value="2021">Year : 2021  </option>


                        </select>
                    </div>
                </div>

            </div>
        </div>
    )
}
