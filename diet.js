app_id = 'e720fa61'
app_key = 'c1876b2d223e5c7de125fbe72326460b'

// Create the XHR object.
function createCORSRequest(method, url) {
    var xhr = new XMLHttpRequest();
    if ("withCredentials" in xhr) {
      // XHR for Chrome/Firefox/Opera/Safari.
      xhr.open(method, url, true);
    } else if (typeof XDomainRequest != "undefined") {
      // XDomainRequest for IE.
      xhr = new XDomainRequest();
      xhr.open(method, url);
    } else {
      // CORS not supported.
      xhr = null;
    }
    return xhr;
  }
  
  // Make the actual CORS request.
  function makeCorsRequest() {
    let recipe = document.getElementById('recipe').value;
    let pre = document.getElementById('response');
    let calories = document.getElementById('calories');
    let name = document.getElementById('name');
    let wt = document.getElementById('Weight');
    let tfat = document.getElementById('tFat');
    let tsat = document.getElementById('tSat');
    let carb = document.getElementById('carb');
    let dfiber = document.getElementById('dfiber');
    let sugar = document.getElementById('sugar');
  
    var url = 'https://api.edamam.com/api/nutrition-data?app_id=' + app_id + '&app_key=' + app_key + '&nutrition-type=logging&ingr=' + recipe;
  
    var xhr = createCORSRequest('GET', url);
    if (!xhr) {
      alert('CORS not supported');
      return;
    }

    // Response handlers.
    xhr.onload = function() {
      var text = xhr.responseText;
      pre.innerHTML = text;

      const obj = JSON.parse(text)
      calories.innerHTML = obj.calories;
      name.innerHTML = recipe;
      wt.innerHTML = Math.round(obj.totalWeight);
      tfat.innerHTML = obj.totalNutrients.FAT.quantity;
      tsat.innerHTML = obj.totalNutrients.FASAT.quantity;
      carb.innerHTML = obj['totalNutrients']['CHOCDF.net']['quantity'];
      dfiber.innerHTML = obj.totalNutrients.FIBTG.quantity;
      sugar.innerHTML = obj.totalNutrients.SUGAR.quantity;
    };
  
    xhr.onerror = function() {
      alert('Woops, there was an error making the request.');
    };

    xhr.setRequestHeader('Accept', 'application/json');
    xhr.send(recipe);

    //create table with nutritional information
    
    
  }