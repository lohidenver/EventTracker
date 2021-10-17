window.addEventListener('load', function(e) {
  console.log('document loaded');
  init();
  getPain();
});

function init() {
  window.addEventListener('load', function(event) {
    event.preventDefault();

    console.log("went to get pain");


  })
  document.painForm.addPain.addEventListener('click', function(event) {
    event.preventDefault();
    addPain();
  })



}



function getPain() {

  console.log("got to getPain");

  var xhr = new XMLHttpRequest();

  xhr.open('GET', 'api/pain/');

  xhr.onreadystatechange = function() {
    if (xhr.status < 400 && xhr.readyState === 4) {
      // convert responseText to JSON
      var data = JSON.parse(xhr.responseText);

      // print out JSON data
      console.log(data[0].id);
      displayPain(data);


    } else if (xhr.readyState === 4 && xhr.status >= 400) {
      console.error('Pain not found');
    }
  };

  xhr.send(null);

}


function getPainById(id) {

  var xhr = new XMLHttpRequest();

  xhr.open('GET', 'api/pain/' + id);

  xhr.onreadystatechange = function() {
    if (xhr.status < 400 && xhr.readyState === 4) {
      // convert responseText to JSON
      var data = JSON.parse(xhr.responseText);

    } else if (xhr.readyState === 4 && xhr.status >= 400) {
      console.error('Pain not found');
    }
  };

  xhr.send(null);

}



function displayPain(pain) {
  var d1 = document.getElementById('painData');

  console.log("displayPain");

  d1.textContent = '';
  var total = 0;
  var avg = 0;
  var avgTotal = 0;
  console.log(avg + ' start');
  pain.forEach(function(value, index, array) {

    console.log(value);

    let p1 = document.createElement('td');
    let p2 = document.createElement('td');
    let p3 = document.createElement('td');
    let p4 = document.createElement('td');
    let p5 = document.createElement('td');
    let p6 = document.createElement('td');

    var pId = document.createElement('tr');
    pId.addEventListener("click", function(e) {
      popUp(value);
    })
    console.log("got here");

    p1.textContent = value.painLocation;
    p2.textContent = value.intensity;
    p3.textContent = value.painStartDate;
    p4.textContent = value.painEndDate;
    p5.textContent = value.painTrigger;
    p6.textContent = value.typeOfPain;
    pId.textContent = value.id + " ";
    console.log(p1);
    pId.appendChild(p1);
    pId.appendChild(p2);
    pId.appendChild(p3);
    pId.appendChild(p4);
    pId.appendChild(p5);
    pId.appendChild(p6);

    d1.append(pId);
    total += 1;
    console.log(total);
    console.log(value.intensity + "intensity");
    avg += value.intensity;
    console.log(avg + "==");

    avgTotal = avg / total;

  });

  var d2 = document.getElementById('avgPain');
  console.log(avgTotal.toFixed(2));
  d2.textContent = " ";
  d2.textContent = "You average pain intensity is " + avgTotal.toFixed(2);
  console.log(d2);

}

function addPain() {
  // e.preventDefault();
  var xhr = new XMLHttpRequest();
  xhr.open('POST', 'api/pain', true);

  xhr.setRequestHeader("Content-type", "application/json"); // Specify JSON request body

  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
      if (xhr.status == 200 || xhr.status == 201) { // Ok or Created
        let painObject = JSON.parse(xhr.responseText);
        // getPain(painObject.id);
        getPain();
        console.log("Pain added");
        alert("Pain Added");
      } else {

        document.getElementById('painData').textContent = 'Pain Not Found';
        console.log(xhr.responseText);
      }
    }
  };

  var painObject = {
    painLocation: document.painForm.painLocation.value,
    intensity: document.painForm.intensity.value,
    painStartDate: document.painForm.painStartDate.value,
    painEndDate: document.painForm.painEndDate.value,
    painTrigger: document.painForm.painTrigger.value,
    typeOfPain: document.painForm.typeOfPain.value
  };
  console.log(painObject);
  console.log("test object added   " + document.painForm.painLocation.value);
  var painObjectJson = JSON.stringify(painObject); // Convert JS object to JSON string

  xhr.send(painObjectJson);

  document.painForm.reset();

}

function popUp(value) {

  // store boolean in response variable
  var response = confirm('Would you like to edit this entry? ' + 'Pain ID: ' + value.id);

  // if 'ok'
  if (response) {
    document.getElementById('painId').value = value.id;
    document.getElementById('painLocation').value = value.painLocation;
    document.getElementById('intensity').value = value.intensity;
    document.getElementById('painStartDate').value = value.painStartDate;
    document.getElementById('painEndDate').value = value.painEndDate;
    document.getElementById('painTrigger').value = value.painTrigger;
    document.getElementById('typeOfPain').value = value.typeOfPain;

    if (document.getElementById('updatePain') === null) {
      var update = document.createElement('input');
      update.setAttribute('type', 'submit');
      update.setAttribute('name', 'updatePain');
      update.setAttribute('value', 'Update Pain');
      update.setAttribute('id', 'updatePain');

      update.textContent = ''
      document.painForm.appendChild(update);
    }

    if (document.getElementById('deletePain') === null) {
      var del = document.createElement('input');
      del.setAttribute('type', 'submit');
      del.setAttribute('name', 'deletePain');
      del.setAttribute('value', 'Delete Pain');
      del.setAttribute('id', 'deletePain');

      del.textContent = '';

      document.painForm.appendChild(del);
    }
    document.painForm.updatePain.addEventListener('click', function(event) {
      event.preventDefault();
      updatePain(value.id);
    })

    document.painForm.deletePain.addEventListener('click', function(event) {
      event.preventDefault();
      var kill = confirm('Are you sure you want to delete this entry? Pain ID: ' + value.id);
      if (kill) {
        deletePain(value.id);
      } else {
        // popup message failure
        alert('No changes made')
      }

    })

  } else {
    // popup message failure
    alert('No changes made')
  }

}

function updatePain(painId) {
  // e.preventDefault();
  var xhr = new XMLHttpRequest();
  xhr.open('PUT', 'api/pain/' + painId, true);

  xhr.setRequestHeader("Content-type", "application/json"); // Specify JSON request body

  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
      if (xhr.status == 200 || xhr.status == 201) { // Ok or Created
        let painObject = JSON.parse(xhr.responseText);
        // getPain(painObject.id);
        getPain();
        console.log("Pain updated");
        alert("Pain updated");
      } else {

        document.getElementById('painData').textContent = 'Pain Could Not Be Updated';
        console.log(xhr.responseText);
      }
    }
  };

  var painObject = {

    painLocation: document.painForm.painLocation.value,
    intensity: document.painForm.intensity.value,
    painStartDate: document.painForm.painStartDate.value,
    painEndDate: document.painForm.painEndDate.value,
    painTrigger: document.painForm.painTrigger.value,
    typeOfPain: document.painForm.typeOfPain.value
  };
  console.log(painObject);
  console.log("Updated object   " + document.painForm.painLocation.value);
  var painObjectJson = JSON.stringify(painObject); // Convert JS object to JSON string

  xhr.send(painObjectJson);

  document.painForm.reset();

}

function deletePain(painId) {
  // e.preventDefault();
  var xhr = new XMLHttpRequest();
  xhr.open('DELETE', 'api/pain/' + painId, true);

  xhr.setRequestHeader("Content-type", "application/json"); // Specify JSON request body

  xhr.onreadystatechange = function() {

    if (xhr.readyState === 4 && xhr.status === 204) { // Ok or Created

      getPain();
      console.log("Pain deleted");
      alert("Pain deleted");
    }
    if (xhr.readyState === 4 && xhr.status >= 400) {
      console.error('ERROR: ' + xhr.status + ': ' + xhr.responseText);
    }

  };

  xhr.send();

  document.painForm.reset();

}
