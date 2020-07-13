import React from 'react';
import Potato from './Potato'
import PropTypes from "prop-types";
const food = [
  {
    id:1,
    name :"kimchi",
    link : "https://search.naver.com/search.naver?where=image&sm=tab_jum&query=%EA%B9%80%EC%B9%98%EC%82%AC%EC%A7%84#",
    rating:"5.0"
  },
  {
    id:2,
    name : "chicken",
    link : "https://search.naver.com/search.naver?sm=tab_hty.top&where=image&query=%EC%B9%98%ED%82%A8&oquery=%EC%82%BC%EA%B2%B9%EC%82%B4&tqi=UwxU%2Fwprvh8ssCgktDCsssssstl-473323#"
    ,rating:"5.0"
  },
  {
    id:3,
    name : "pie",
    link : "http://blogfiles.naver.net/MjAxOTA1MjZfMzkg/MDAxNTU4ODcxNjcxMzA3.YZB2kqxRFxDog103x8LPboR_Ks2-4URqpNdESVylET4g.Xx4cLe-w8Xs78UTwo3d_AvPmq74FM_P2OWmPF-mzVpAg.JPEG.sea8484/4263cd36-a765-4324-8561-50c7bb89d7c7.jpg"
    ,rating:"5.0"
  },
  {
    id:4,
    name : "buchimgae",
    link : "https://search.naver.com/search.naver?sm=tab_hty.top&where=image&query=%EB%B6%80%EC%B9%A8%EA%B0%9C&oquery=%EA%B9%80%EC%B9%98%EC%82%AC%EC%A7%84&tqi=UwxUHlprvh8ssCgfsH4ssssstN8-212048#"
    ,rating:"5.0"
  }
]//object 배열 -> map을 이용하여 F에서 출력.


function F({name,link,rating}){
    return (
      <>
        <h3>My name Is {name}</h3>
        <img src={link}></img>
        <h5>{rating}/5.0</h5>
      </>
    );
}
F.propTypes={
  name : PropTypes.string.isRequired,
  link : PropTypes.string.isRequired,
  rating:PropTypes.string.isRequired
};
function App() {
  return (
    <div className="App">
      {
        food.map(each =><F key={each.id} name={each.name} link={each.link} rating={each.rating}/>)
      }
      <Potato/>
    </div>
  );
}
//Potato -> external component
//F -> Internal component
export default App;
