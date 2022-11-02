const axios = require('axios')

//and here is where you call the external API, while your project.js just calls your back end
//so if you need to cache this call, or modify the JSON just for your app, or double check the validity of the country, you could do it here
exports.getCountry = async (req, res) => {
    let country = req.query.country

    let countryData = await axios.get(`https://restcountries.com/v3.1/name/${country}?fullText=true1`)
    res.json(countryData.data)
}