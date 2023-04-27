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
    let calories = document.getElementById('calories');
    let name = document.getElementById('name');
    let wt = document.getElementById('Weight');
    let tfat = document.getElementById('tFat');
    let tsat = document.getElementById('tSat');
    let transfat = document.getElementById('transFat');
    let chol = document.getElementById('chol');
    let na = document.getElementById('na');
    let carb = document.getElementById('carb');
    let dfiber = document.getElementById('dfiber');
    let sugar = document.getElementById('sugar');
    let prot = document.getElementById('prot');
    let vitA = document.getElementById('vitA');
    let vitC = document.getElementById('vitC');
    let ca = document.getElementById('ca');
    let fe = document.getElementById('fe');
    let vitD = document.getElementById('vitD');
    let mg = document.getElementById('mg');
    let pot = document.getElementById('pot');
  
    var url = 'https://api.edamam.com/api/nutrition-data?app_id=' + app_id + '&app_key=' + app_key + '&nutrition-type=logging&ingr=' + recipe;
  
    var xhr = createCORSRequest('GET', url);
    if (!xhr) {
      alert('CORS not supported');
      return;
    }

    // Response handlers.
    xhr.onload = function() {
      var text = xhr.responseText;
      //parse text to input into the table
      const obj = JSON.parse(text)
      calories.innerHTML = obj.calories;
      name.innerHTML = recipe;
      wt.innerHTML = Math.round(obj.totalWeight);
      const nut = obj.totalNutrients;
      tfat.innerHTML = nut.FAT.quantity.toFixed(1) + ' ' + nut.FAT.unit;
      tsat.innerHTML = nut.FASAT.quantity.toFixed(1) + ' ' + nut.FASAT.unit;
      transfat.innerHTML = nut.FATRN.quantity.toFixed(1) + ' ' + nut.FATRN.unit;
      chol.innerHTML = Math.round(nut.CHOLE.quantity) + ' ' + nut.CHOLE.unit;
      na.innerHTML = Math.round(nut.NA.quantity) + ' ' + nut.FAT.unit;
      carb.innerHTML = Math.round(obj['totalNutrients']['CHOCDF.net']['quantity']) + ' ' + obj['totalNutrients']['CHOCDF.net']['unit'];
      dfiber.innerHTML = nut.FIBTG.quantity.toFixed(1) + ' ' + nut.FIBTG.unit;
      sugar.innerHTML = Math.round(nut.SUGAR.quantity) + ' ' + nut.SUGAR.unit;
      prot.innerHTML = Math.round(nut.PROCNT.quantity) + ' ' + nut.PROCNT.unit;
      vitA.innerHTML = Math.round(nut.VITA_RAE.quantity) + ' ' + nut.VITA_RAE.unit;
      vitC.innerHTML = Math.round(nut.VITC.quantity) + ' ' + nut.VITC.unit;
      ca.innerHTML = Math.round(nut.CA.quantity) + ' ' + nut.CA.unit;
      fe.innerHTML = Math.round(nut.FE.quantity) + ' ' + nut.FE.unit;
      vitD.innerHTML = Math.round(nut.VITD.quantity) + ' ' + nut.VITD.unit;
      mg.innerHTML = Math.round(nut.MG.quantity) + ' ' + nut.MG.unit;
      pot.innerHTML = Math.round(nut.K.quantity) + ' ' + nut.K.unit;

    };
  
    xhr.onerror = function() {
      alert('Woops, there was an error making the request.');
    };

    xhr.setRequestHeader('Accept', 'application/json');
    xhr.send(recipe);    
    
  }

  function addFood(){
    

  }