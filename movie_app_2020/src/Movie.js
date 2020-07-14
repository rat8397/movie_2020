import React from "react"
import PropTypes from "prop-types"
function Movie({id,title,summary}){
    return(
        <>
            <h2>{title}</h2>
            <h3>{summary}</h3>
        </>    
         
    );
    
}
Movie.propTypes = {
    id:PropTypes.number.isRequired,
    title:PropTypes.string.isRequired,
    summary:PropTypes.string.isRequired
}
export default Movie;