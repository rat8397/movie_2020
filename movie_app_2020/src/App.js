import React from 'react';
import Potato from './Potato'
import PropTypes from "prop-types";
import Axios from 'axios';
import Movie from "./Movie"
class App extends React.Component {
  state = {
    isLoading: true,
    movie: []
  }
  getMovie = async () => {

    const Movie = await Axios.get("https://yts-proxy.now.sh/list_movies.json");
    const {
      movies
    } = Movie.data.data
    console.log(movies);
    this.setState({ movie: movies, isLoading: false })

  }
  componentDidMount() {
    this.getMovie();
  }
  render() {
    const { isLoading, movie } = this.state;//무비 가져오는거 중요.
    return (
      <div>
        {isLoading ? "Loading" : movie.map(
          each => {
            return <Movie
              key={each.id}
              id={each.id}
              title={each.title}
              summary={each.summary} />;/// <MOVIE ID<<프로퍼티 이므로 자바스크립트 코드가 아님 = {JAVASCRIPT 변수}/>
          }
        )}
      </div>
    );
  }
}
//Potato -> external component
//F -> Internal component
export default App;
