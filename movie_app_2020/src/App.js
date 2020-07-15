import React from 'react';
import Potato from './Potato'
import PropTypes from "prop-types";
import Axios from 'axios';
import Movie from "./Movie"
import "./App.css"
class App extends React.Component {
  state = {
    isLoading: true,
    movie: []
  }
  getMovie = async () => {

    const Movie = await Axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
    const {
      movies
    } = Movie.data.data /// ES6에 의하면 Movie.data.data.movies를 movies로 사용할 수 있게 해주는 코드 NODEJS에서 다루었음
    this.setState({ movie: movies, isLoading: false }) ///-> setState 하여 변수에 값을 저장시켜준다. 

  }
  componentDidMount() {
    this.getMovie();
  }
  render() {
    const { isLoading, movie } = this.state;//무비 가져오는거 중요.
    return (
      <section className="container">
        {isLoading ? 
          <div className="loader">
            <span className="loader__text">wait ! Loading...</span>
          </div>
          :
          <div className="movies">
            {movie.map(each=>{
              return <Movie
              key={each.id}
              id={each.id}
              title={each.title}
              poster={each.medium_cover_image}
              summary={each.summary}
              year = {each.year}
              genres ={each.genres}
               />;/// <MOVIE ID<<프로퍼티 이므로 자바스크립트 코드가 아님 = {JAVASCRIPT 변수}/>
            })}
          </div>
          
        }

      </section>
      
    );
  }
}
//Potato -> external component
//F -> Internal component
export default App;
