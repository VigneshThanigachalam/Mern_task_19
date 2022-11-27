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
          downloadImage(data.webPage);

        })
      })

  })()

function downloadImage(webPage_url) {console.log(webPage_url);
const url = `https://screenshot.abstractapi.com/v1/?api_key=5cb48c2cf5fa40a9a52033e9d4c6979c&url=${webPage_url}`;
 console.log(url);
 document.getElementById("src_image").style.display="block";
 document.getElementById("src_image").src=url;
 
}