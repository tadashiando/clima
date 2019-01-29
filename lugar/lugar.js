const axios = require('axios');

const getUbicacion = async(direccion) => {
    let encodedUrl = encodeURI(direccion);

    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${ encodedUrl }&key=AIzaSyCeZHz_fP0PbDX_LkAoiQLSy1atOYIpGrI`)

    if (resp.data.status === 'ZERO_RESULTS') {
        throw new Error(`No hay resultado para la ciudad ${ direccion }`);
    }

    let location = resp.data.results[0];

    // console.log(JSON.stringify(resp.data, undefined, 2));

    return {
        direccion: location.formatted_address,
        lat: location.geometry.location.lat,
        lng: location.geometry.location.lng
    }
}

module.exports = {
    getUbicacion
}