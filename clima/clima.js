const axios = require('axios');

const getClima = async(lat, lng) => {

    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=b7062ab31cf803b432609d46f3ed8b77`);

    if (resp.data.cod === '400') {
        throw new Error(`No hay resultados para estas coordenadas`);
    }

    let location = resp.data;

    return {
        now: location.main.temp
    }
}

module.exports = {
    getClima
}