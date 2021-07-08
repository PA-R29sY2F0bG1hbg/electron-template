window.addEventListener('load', function load(event) {

    var randomResult = document.getElementById('random-result')
  
    document.getElementById('random-button').onclick = function(event) {
      randomResult.textContent = Math.floor(Math.random() * 100)
    }
  
    document.getElementById('hello-wolrd').onclick = function(event) {
      window.alert("Hello World")
       }
  })

