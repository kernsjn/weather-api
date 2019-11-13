const qs = x => document.querySelector(x)

let url = 'https://api.openweathermap.org/data/2.5/weather?'
let myApiKey = 'APPID=5a673c11a54e728d26522f385446c06a'
let temp

const randomColor = () => {
  let x = Math.floor(Math.random() * 256)
  let y = Math.floor(Math.random() * 256)
  let z = Math.floor(Math.random() * 256)
  let bgColor = 'rgb(' + x + ',' + y + ',' + z + ')'
  console.log(bgColor)

  // qs('.colorCode').textContent = bgColor
  document.body.style.background = bgColor
}
randomColor()

const getWeatherZip = async () => {
  const zipCode = qs('input.zipInput').value

  const response = await fetch(
    `${url}zip=${zipCode}&${myApiKey}&units=imperial`
  )
  const weatherData = await response.json()
  displayData(weatherData)
}

const displayData = weatherData => {
  qs('.temp').textContent = 'Temperature: ' + weatherData.main.temp + '°'
  qs('.conditions').textContent =
    'Conditions: ' + weatherData.weather[0].description
  qs('.city').textContent = 'City: ' + weatherData.name
}

qs('.getWeatherZip').addEventListener('click', getWeatherZip)
qs('.getWeatherZip').addEventListener('click', randomColor)
