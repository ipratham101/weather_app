const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '14a685f95emshdd7eeaf831fa29ap11148cjsnf819cd28140a',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
let city = prompt('enter your city');
console.log(city)
document.getElementById('localtion_timezone').innerHTML = city;
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city ,options).then(response=>
    response.json()
).then(response=>
    
    temperature_in_degree.innerHTML = response.temp

).catch(error=> console.log(error));
