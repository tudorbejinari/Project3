
require("dotenv").config({path: "../../.env.development"})

const KEY = process.env.REACT_APP_YELP_API_KEY;

let myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer " + KEY);

fetch("https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?categories=realestatesvcs&limit=5&location={term}", {
  headers: myHeaders 
}).then((res) => {
  return res.json();
}).then((json) => {
  console.log(json);
});