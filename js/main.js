document.querySelector('button').addEventListener('click', ghibli)

function ghibli(){
    let url = `https://data.nasa.gov/resource/gvk9-iz74.json`

    fetch(url) 
    .then(res => res.json()) // parse response as JSON 
    .then(data => { 
      console.log(data) 
      for(let i = 0; i < data.length; i++){
          let nasaAreas = document.getElementById('nasaAreas')
          let location = data[i].center
          let zipcode = data[i].zipcode

          let urlTwo = `http://api.weatherapi.com/v1/current.json?key=6eae67d093cf4ac4a3742044220805&q=${zipcode}&aqi=no`
          fetch(urlTwo)
          .then(res => res.json())
          .then(data => {
              console.log(data)
              let li = document.createElement('li')
              let temp = data.current.temp_f
              let country = data.location.country
              li.innerText = `The current temp is ${temp} degrees in ${location}, ${country}.`
              nasaAreas.appendChild(li)
          })
          .catch(err => { 
            console.log(`error ${err}`) 
            })
      }
    })
    .catch(err => { 
        console.log(`error ${err}`) 
    })
   
}