const request = require('request');

var getWeather = (lat, lng, callback) => {
    request({
        url: `https://api.darksky.net/forecast/c5f3c415cb477e49a598f920497a7e9d/${lat},${lng}`,
        json: true
    }, (error, responce, body) => {
        if (!error && responce.statusCode == 200) {
            callback(undefined, {
                temperature: body.currently.temperature,
                apparentTemperature: body.currently.apparentTemperature
            });
        } else {
            callback('unable to fetch weather');
        }
    });
};

module.exports.getWeather = getWeather;