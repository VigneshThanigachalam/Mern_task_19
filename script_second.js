(function () {
    'use strict'
    const data = {};

    var forms = document.querySelectorAll('.needs-validation')
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          event.preventDefault()
          event.stopPropagation()

          Array.from(event.target.elements).forEach((element) => {
            if (element.nodeName == "INPUT") {
              data[element.name] = element.value;
            }
          });
          holiday(data.city);

        })
      })

  })()


  const holiday = async (city_name) => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city_name}&APPID=69f4aafc5eec73e45327babebaab487a`).then((response) => {
      response.json().then((result) => {
        if (response.status == 200) {
          document.getElementById("no_result").style = "display:none";
          document.getElementById("weather_result").className = "d-block";
          document.getElementById("wind_speed").innerHTML = ((result.wind.speed) * 1.852).toFixed(2) + " kmph";
          document.getElementById("temp").innerHTML = Math.round(parseFloat(result.main.temp) - 273.15) + " &degC"
          document.getElementById("humidity").innerHTML = result.main.humidity + " %";
          document.getElementById("sun_rise").innerHTML = (new Date(result.sys.sunrise * 1000)).toLocaleTimeString();
          document.getElementById("sun_set").innerHTML = (new Date(result.sys.sunset * 1000)).toLocaleTimeString();
        }
        else {
          document.getElementById("weather_result").className = "d-none";
          document.getElementById("no_result").style = "display:block";
        }
      });

    }).catch(e => console.log(e));



  }