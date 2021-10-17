window.addEventListener('load', function(e) {
  console.log('document loaded');
  init();
  getMigraine();
});

function init() {
  window.addEventListener('load', function(event) {
    event.preventDefault();

    console.log("went to get migraine");


  })
  document.migraineForm.addMigraine.addEventListener('click', function(event) {
    event.preventDefault();
    addMigraine();
  })



}



function getMigraine() {

  console.log("got to getMigraine");

  var xhr = new XMLHttpRequest();

  xhr.open('GET', 'api/migraine/');

  xhr.onreadystatechange = function() {
    if (xhr.status < 400 && xhr.readyState === 4) {
      // convert responseText to JSON
      var data = JSON.parse(xhr.responseText);

      // print out JSON data
      console.log(data[0].id);
      displayMigraine(data);


    } else if (xhr.readyState === 4 && xhr.status >= 400) {
      console.error('Migraine not found');
    }
  };

  xhr.send(null);

}


function getMigraineById(id) {

  var xhr = new XMLHttpRequest();

  xhr.open('GET', 'api/migraine/' + id);

  xhr.onreadystatechange = function() {
    if (xhr.status < 400 && xhr.readyState === 4) {
      // convert responseText to JSON
      var data = JSON.parse(xhr.responseText);

    } else if (xhr.readyState === 4 && xhr.status >= 400) {
      console.error('Migraine not found');
    }
  };

  xhr.send(null);

}

function displayMigraine(migraine) {
  var d1 = document.getElementById('migraineData');
  
  console.log("displayMigraine");

  d1.textContent = '';
  var total = 0;
  var avg = 0;
  var avgTotal = 0;
  console.log(avg + ' start');
  migraine.forEach(function(value, index, array) {

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
  
  
    p1.textContent = value.intensity;
    p2.textContent = value.migraineStartDate;
    p3.textContent = value.migraineEndDate;
    p4.textContent = value.migraineTrigger;
    p5.textContent = value.typeOfTreatment;
    pId.textContent = value.id + " ";
    console.log(p1);
    pId.appendChild(p1);
    pId.appendChild(p2);
    pId.appendChild(p3);
    pId.appendChild(p4);
    pId.appendChild(p5);
    
 


    d1.append(pId);
    total += 1;
    console.log(total);
    console.log(value.intensity + "intensity");
    avg += value.intensity;
    console.log(avg + "==");

    avgTotal = avg / total;

  });

  var d2 = document.getElementById('avgMigraine');
  console.log(avgTotal.toFixed(2));
  d2.textContent = " ";
  d2.textContent = "Your average migraine intensity is " + avgTotal.toFixed(2);
  console.log(d2);

}

function addMigraine() {
  // e.preventDefault();
  var xhr = new XMLHttpRequest();
  xhr.open('POST', 'api/migraine', true);

  xhr.setRequestHeader("Content-type", "application/json"); // Specify JSON request body

  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
      if (xhr.status == 200 || xhr.status == 201) { // Ok or Created
        let migraineObject = JSON.parse(xhr.responseText);
        // getMigraine(migraineObject.id);
        getMigraine();
        console.log("Migraine added");
        alert("Migraine Added");
      } else {

        document.getElementById('migraineData').textContent = 'Migraine Not Found';
        console.log(xhr.responseText);
      }
    }
  };

  var migraineObject = {
    intensity: document.migraineForm.intensity.value,
    migraineStartDate: document.migraineForm.migraineStartDate.value,
    migraineEndDate: document.migraineForm.migraineEndDate.value,
    migraineTrigger: document.migraineForm.migraineTrigger.value,
    typeOfTreatment: document.migraineForm.typeOfTreatment.value
  };
  
  console.log(migraineObject);
  console.log("test object added   " + document.migraineForm.typeOfTreatment.value);
  var migraineObjectJson = JSON.stringify(migraineObject); // Convert JS object to JSON string

  xhr.send(migraineObjectJson);

  document.migraineForm.reset();

}

function popUp(value) {

  // store boolean in response variable
  var response = confirm('Would you like to edit this entry? ' + 'Migraine ID: ' + value.id);

  // if 'ok'
  if (response) {
    document.getElementById('migraineId').value = value.id;
    document.getElementById('intensity').value = value.intensity;
    document.getElementById('migraineStartDate').value = value.migraineStartDate;
    document.getElementById('migraineEndDate').value = value.migraineEndDate;
    document.getElementById('migraineTrigger').value = value.migraineTrigger;
    document.getElementById('typeOfTreatment').value = value.typeOfTreatment;


    if (document.getElementById('updateMigraine') === null) {
      var update = document.createElement('input');
      update.setAttribute('type', 'submit');
      update.setAttribute('name', 'updateMigraine');
      update.setAttribute('value', 'Update Migraine');
      update.setAttribute('id', 'updateMigraine');

      update.textContent = ''
      document.migraineForm.appendChild(update);
    }

    if (document.getElementById('deleteMigraine') === null) {
      var del = document.createElement('input');
      del.setAttribute('type', 'submit');
      del.setAttribute('name', 'deleteMigraine');
      del.setAttribute('value', 'Delete Migraine');
      del.setAttribute('id', 'deleteMigraine');

      del.textContent = '';

      document.migraineForm.appendChild(del);
    }
    document.migraineForm.updateMigraine.addEventListener('click', function(event) {
      event.preventDefault();
      updateMigraine(value.id);
    })

    document.migraineForm.deleteMigraine.addEventListener('click', function(event) {
      event.preventDefault();
      var kill = confirm('Are you sure you want to delete this entry? Migraine ID: ' + value.id);
      if (kill) {
        deleteMigraine(value.id);
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

function updateMigraine(migraineId) {
  // e.preventDefault();
  var xhr = new XMLHttpRequest();
  xhr.open('PUT', 'api/migraine/' + migraineId, true);

  xhr.setRequestHeader("Content-type", "application/json"); // Specify JSON request body

  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
      if (xhr.status == 200 || xhr.status == 201) { // Ok or Created
        let migraineObject = JSON.parse(xhr.responseText);
        // getMigraine(migraineObject.id);
        getMigraine();
        console.log("Migraine updated");
        alert("Migraine updated");
      } else {

        document.getElementById('migraineData').textContent = 'Migraine Could Not Be Updated';
        console.log(xhr.responseText);
      }
    }
  };

  var migraineObject = {

    intensity: document.migraineForm.intensity.value,
    migraineStartDate: document.migraineForm.migraineStartDate.value,
    migraineEndDate: document.migraineForm.migraineEndDate.value,
    migraineTrigger: document.migraineForm.migraineTrigger.value,
    typeOfTreatment: document.migraineForm.typeOfTreatment.value
  };
  
  console.log(migraineObject);
  console.log("Updated object   " + document.migraineForm.migraineTrigger.value);
  var migraineObjectJson = JSON.stringify(migraineObject); // Convert JS object to JSON string

  xhr.send(migraineObjectJson);

  document.migraineForm.reset();

}

function deleteMigraine(migraineId) {
  // e.preventDefault();
  var xhr = new XMLHttpRequest();
  xhr.open('DELETE', 'api/migraine/' + migraineId, true);

  xhr.setRequestHeader("Content-type", "application/json"); // Specify JSON request body

  xhr.onreadystatechange = function() {

    if (xhr.readyState === 4 && xhr.status === 204) { // Ok or Created

      getMigraine();
      console.log("Migraine deleted");
      alert("Migraine deleted");
    }
    if (xhr.readyState === 4 && xhr.status >= 400) {
      console.error('ERROR: ' + xhr.status + ': ' + xhr.responseText);
    }

  };

  xhr.send();

  document.migraineForm.reset();

}
