const inputText = document.getElementById("inputText");
const Sembuh = document.getElementById("Sembuh");
const Lokasi = document.getElementById("Lokasi");
const Meninggal = document.getElementById("Meninggal");
const Confirmed = document.getElementById("Confirmed");


$("#submitBtn").click(function(e)
{
    e.preventDefault();
    const url ="https://coronavirus-tracker-api.herokuapp.com/v2/locations/";

    fetch(url)
    .then((res) => res.json())
    .then(data => {
        console.log(data)
        // if(inputText == locations.country.value )
        // {

        const locations = data.locations
        
        const getData = locations.filter((location) => location.country === inputText.value)

        // console.log(inputText)
        console.log(getData)

        Lokasi.innerHTML = `Country : ${getData[0].country}`
        Sembuh.innerHTML = `Recovered : ${getData[0].latest.recovered}`
        Meninggal.innerHTML = `Deaths : ${getData[0].latest.deaths}`
        Confirmed.innerHTML = `Confirmed : ${getData[0].latest.confirmed}`
        // }
        // else
        // {
        //     alert("Wrong input, try Again")
        // }
    })

})

