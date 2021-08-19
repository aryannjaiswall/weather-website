const inp = document.getElementById('inp')
inp.addEventListener("click", () => {
    inp.classList.add("cityOnClick")
    inp.classList.add("animation")
    inp.classList.remove("cityBeforeClick")
})

var flag = 0
const btn = document.getElementById("btn")
const btn2 = document.getElementById('btn2')

btn.addEventListener("click", () => fetchAndDisplay(0))
btn2.addEventListener("click", () => {
    flag = 1
    HideAndShow()
    fetchAndDisplay(3)
   
})
function HideAndShow() {
    const button_div = document.getElementById('button-div')
    const container_btn = document.getElementById('container-btn')
    
    button_div.classList.add('hide')
    container_btn.classList.remove('hide')
}

function fetchAndDisplay(i){
    if(flag == 1){
        var j = i + 6
    }
    else{
        var j = i + 3
    }
    const city = inp.value
    inp.classList.remove("cityOnClick")
    inp.classList.add("cityBeforeClick")

    const key = 'dbe4fe92110347ca8b1b8c68bcaf2fc7'
    fetch(`https://api.weatherbit.io/v2.0/forecast/daily?city=${city}&key=${key}`)
        .then(response => response.json())
        .then(data1 => {
                for(i; i < j; i++) {

                    if(data1.data[i].weather.description == "Overcast clouds"){
                        var src = "img/Overcast.png"
                    }
                    else if(data1.data[i].weather.description == "Scattered clouds"){
                        var src = "img/Scattered.png"
                    }
                    else if(data1.data[i].weather.description == "Thunderstorm with heavy rain"){
                        var src = "img/Thunderstorm.png"
                    }
                    else if(data1.data[i].weather.description == "Thunderstorm with rain"){
                        var src = "img/Moderate.png"
                    }
                    else if(data1.data[i].weather.description == "Broken clouds"){
                        var src = "img/Broken.png"
                    }
                    else if(data1.data[i].weather.description == "Few clouds"){
                        var src = "img/Few2.png"
                    }
                    else if(data1.data[i].weather.description == "Moderate rain"){
                        var src = "img/Light.png"
                    }
                    else if(data1.data[i].weather.description == "Heavy rain"){
                        var src = "img/Light.png"
                    }
                    else if(data1.data[i].weather.description == "Clear Sky"){
                        var src = "img/Clear.png"
                    }
                    else if(data1.data[i].weather.description == "Light rain"){
                        var src = "img/Light1.png"
                    }
                    else if(data1.data[i].weather.description == "Light shower rain"){
                        var src = "img/Light1.png"
                    }
                    else{
                        var src = "img/Default.png"
                    }




                const containerToChange = document.getElementById(`containerToChange${i+1}`)
                containerToChange.innerHTML = ` <div class="date">
                                                    ${data1.data[i].datetime}
                                                </div>
                                                <div class="container-2">
                                                    <div class="brand-logo">
                                                    <img src=${src} alt="">
                                                    </div>
                                                    <p>${data1.data[i].weather.description}</p>
                                                </div>
                                                <div class="container-2-max-min" >
                                                    <div class="temp-min">
                                                        <img src="./img/Temperature.png" alt="" class="img">
                                                        <p>${data1.data[i].max_temp}&#xb0;C</p>
                                                    </div>
                                                    <div class="temp-min" >
                                                        <img src="./img/Low-temperature.png" alt="" class="img">
                                                        <p>${data1.data[i].min_temp}&#xb0;C</p>
                                                    </div>
                                                    <div class="temp-min" id="fx">
                                                        <img src="./img/Precipitation.png" alt="" class="img">
                                                        <p>${data1.data[i].precip}</p>
                                                    </div>
                                                </div>
                                                <div class="container-2-max-min">
                                                    <div class="temp-min" id="fx">
                                                        <img src="./img/Snowflake.png" alt="" class="img">
                                                        <p>${data1.data[i].snow}</p>
                                                    </div>
                                                    <div class="temp-min" id="fx">
                                                        <img src="./img/Weather-vane.png" alt="" class="img">
                                                        <p>${data1.data[i].wind_cdir_full}</p>
                                                    </div>
                                                    <div class="temp-min" id="fx">
                                                        <img src="./img/Wind.png" alt="" class="img">
                                                        <p>${data1.data[i].wind_gust_spd}</p>
                                                    </div>
                                                </div>
            `
            }
        })
}