import React from "react"
import PropTypes from "prop-types"
import Genre from "./Genre"
import "./Movie.css"
function Movie({ id, title, summary, poster, year,genres}) {
    return (
        <div className="movie">
            <div className="movie__img">
                <img src={poster} alt={title} title={title}></img>
            </div>
            <div className="movie__data">
                <h3 className="title">{title}</h3>
                <h5 className="year">{year}</h5>
                <ul className="genres">
                    {genres.map((each,index)=>{
                        return <Genre key={index} genre={each}/>
                    })}
                </ul>
                <p className="summary">{summary.slice(0,180)}...</p>
            </div>

        </div>

    );//map() -> current ITEM, current ITEM NUMBER을 인자로 준다!!
    //Genre 컴포넌트를 하나 만들어서 코딩함

}
Movie.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    genres:PropTypes.arrayOf(PropTypes.string).isRequired
}
export default Movie;