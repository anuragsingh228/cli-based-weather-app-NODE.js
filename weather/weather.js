const request = require('request');

var getWeather = (lat, lng, callback) => {
    request({
        url: `https://api.darksky.net/forecast/xxxxxxxxxxxxxxxxx/${lat},${lng}`,
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
