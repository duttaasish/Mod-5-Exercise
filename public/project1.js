
function searchCountry(){
    let countryInput = document.getElementById("country-input");
    let result = document.getElementById("country-details");
    let countryName = countryInput.value;
    //let finalURL =`https://restcountries.com/v3.1/name/${countryName}?fullText=true1`;
    let finalURL = `/countries/details?country=${countryName}`
    fetch(finalURL)
    .then((response) => response.json())
    .then((data) =>{
        console.log(data);
        //try and use a template for this instead to keep your JS and HTML separate
        result.innerHTML=`  
        <img src="${data[0].flags.svg}" class="flag-img">
        <h3> ${data[0].name.common}</h3>
            <table class="tableformat">
                <tr>
                    <th class="thformat">Continents :</th>
                    <td class="tdformat">${data[0].continents}</td>
                </tr>
                    <th class="thformat">Capital :</th>
                    <td class="tdformat">${data[0].capital}</td>
                </tr>
                <tr>
                    <th class="thformat">Common Name :</th>
                    <td class="tdformat">${data[0].name.common}</td>
                </tr>
                <tr>
                    <th class="thformat">Population :</th>
                    <td class="tdformat">${data[0].population}</td>
                </tr>
                <tr>
                    <th class="thformat">Currency :</th>
                    <td class="tdformat">${data[0].currencies[Object.keys(data[0]
                        .currencies)].name} - 
                        ${Object.keys(data[0]
                        .currencies)[0]} - ${data[0].currencies[Object.keys(data[0]
                        .currencies)].symbol}</td>
                </tr>
                <tr>
                    <th class="thformat">Languages :</th>
                    <td class="tdformat">${Object.values(data[0].languages)
                        .toString()
                        .split(",")
                        .join(", ")}</td>
                </tr>
        `;
    })
    .catch(() => {
        if(countryName.length == 0)
        {
            result.innerHTML = `<h4>Country Name required</h4>`;
        }
        else
        {
            result.innerHTML = `<h4> Please enter a valid country name</h4>`;
        }
    });
}
function clearData(){
    document.getElementById("firstName").value="";
    document.getElementById("email").value="";
    document.getElementById("pass").value="";
}
function loginData(){
    var fName = document.getElementById("firstName").value;
    localStorage.setItem("fName",fName);
    window.location.href = "country.html"
}
function displayNameDate(){
    var dispName = localStorage.getItem("fName");
    document.getElementById("name").innerHTML=`Welcome  -  ${dispName}`;
    console.log("Triggerd");
}