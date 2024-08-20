const axios = require('axios');

const apiUrl = 'https://jsonplaceholder.typicode.com/posts/1'; //api url

axios.get(apiUrl)
    .then(response => {
        console.log('response:', response.data);
    })
    .catch(error =>{
        console.error('Error:', error.message);
    })