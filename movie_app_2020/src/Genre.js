import React from"react"
import PropTypes from"prop-types"
function Genre({genre}){
    return <li className="genres__genre">
        <span className="genre__text">{genre}</span>
    </li>

}
Genre.propTypes ={
    genre : PropTypes.string.isRequired
}
export default Genre