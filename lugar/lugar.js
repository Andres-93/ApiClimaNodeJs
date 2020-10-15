const axios = require('axios');



const getLugar = (direccion) =>{


    const encodedUrl = encodeURI(direccion);

    axios.get(`http://api.weatherapi.com/v1/current.json?key=d0fd8b246791411abc3100719201510&q=${encodedUrl}`)
    .then(function (response) {
        console.log(response.data.location);
    })
    .catch(function (error) {
        console.log('Error sitio no encontrado');
    })
    .then(function () {
        // always executed
    });  

}

module.exports = {
    getLugar
}