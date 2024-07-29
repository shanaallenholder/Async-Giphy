require('dotenv').config(); // imports enviroment variables from the .env file 


// Print out value of API key stored in .env file

console.log(process.env.API_KEY)

async function getImage(query) {
const endpoint = `https://api.giphy.com/v1/gifs/search?api_key=${process.env.API_KEY}&q=${query}&limit=25&offset=0&rating=g&lang=en`

const response = await fetch (endpoint) //Create a fetch request to the endpoint. Don’t forget to await the result!
console.log(response) //Parse the data using .json(). Don’t forget to await the result!
const data = await response.json();
console.log(data)

const gifUrl = 'http://gph.is/2gSwoWe'
console.log(gifUrl);

}
getImage();