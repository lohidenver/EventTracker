var avg = 0;
window.addEventListener('load', function(e) {
	console.log('document loaded');
	init();
	document.getElementById('btn').addEventListener('click', create);
	

});


getAvg();

function init() {
	getMigraines();
}

function getMigraines() {
	avg = 0;
	getAvg();

	var xhr = new XMLHttpRequest();

	var link = "api/migraine";
	xhr.open('GET', link, true);

	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4 && xhr.status < 400) {
			var migraine = JSON.parse(xhr.responseText);
			displayMigraines(migraine);
		}

		if (xhr.readyState === 4 && xhr.status >= 400) {
			console.log("ERROR");
		}
	};
	xhr.send(null);

}
function getAvg() {
	
	var xhr = new XMLHttpRequest();
	
	var link = "api/migraine/avg";
	xhr.open('GET', link, true);
	
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4 && xhr.status < 400) {
			avg = xhr.responseText;
			console.log(avg);
		}
		
		if (xhr.readyState === 4 && xhr.status >= 400) {
			console.log("Error");
		}
	};
	xhr.send(null);

	
}

function displayMigraines(migraine) {
	var div = document.getElementById('migraineData');
	div.innerHTML = "";
	var table = document.createElement('table');
	var head = document.createElement('thead');
	var tr = document.createElement('tr');
	for (p in migraine[0]) {
		var th = document.createElement('th');
		th.textContent = p;
		tr.appendChild(th);
	}

	head.appendChild(tr);
	table.appendChild(head);
	var tbody = document.createElement('tbody');
	for (var i = 0; i < migraine.length; i++) {
		var tr2 = document.createElement('tr');
		for (p in migraine[i]) {
			var td = document.createElement('td');
			td.textContent = migraine[i][p];
			td.migraine = migraine[i];
			tr2.appendChild(td);
		}
		tr2.migraine = migraine[i];
		tr2.addEventListener('click', displayMigraine);
		tbody.appendChild(tr2);
	}
	var tr2 = document.createElement('tr');
	var td = document.createElement('td');
	td.textContent = "Average Migraine";
	tr2.appendChild(td);
	var hold = document.createElement('td');
	tr2.appendChild(hold);
	var td2 = document.createElement('td');
	getAvg();
	console.log(avg);
	td2.textContent = avg;
	tr2.appendChild(td2);
	tbody.appendChild(tr2);
	table.appendChild(tbody);
	div.appendChild(table);
}

function displayMigraine(e) {
	var migraine = e.target.migraine;
	var div = document.getElementById('indDiv');
	div.innerHTML = "";
	var form = document.createElement('form');
	form.id = 'update';
	var ul = document.createElement('ul');
	for (p in migraine) {
		var li = document.createElement('li');
		li.textContent = p + ": " + migraine[p] + "       ";

		if (p !== 'id') {
			var input = document.createElement('input');
			input.name = p;
			li.appendChild(input);
		}
		ul.appendChild(li);
	}
	var submit = document.createElement('button');
	submit.textContent = "Update";
	submit.migraine = migraine;
	submit.addEventListener('click', update);
	var submit2 = document.createElement('button');
	submit2.textContent = "Delete";
	submit2.migraine = migraine;
	submit2.addEventListener('click', demolish);
	form.appendChild(ul);
	form.appendChild(submit);
	form.appendChild(submit2);
	div.appendChild(form);
}
function demolish(e) {
	var migraine = e.target.migraine;
	e.preventDefault();
	var xhr = new XMLHttpRequest();
	var path = "api/migraine/" + migraine.id;
	console.log(path);
	xhr.open("DELETE", path, true);
	xhr.setRequestHeader("Content-Type", "application/json");
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4 && xhr.status < 400) {
			getMigraines();
			var div = document.getElementById('indDiv');
			div.innerHTML = "";
		}
		
		if (xhr.readyState === 4 && xhr.status >= 400) {
			console.log("Enemy not deleted");
		}
	};
	xhr.send(null);
}
function update(e) {
	e.preventDefault();
	var form = document.getElementById('update');
	var migraine = e.target.migraine;
	if(form.intensity.value !== '') {
	migraine.intensity = form.intensity.value;
	}
	if(form.intensity.value !== '') {
	migraine.intensity = form.intensity.value;
	}

	var xhr = new XMLHttpRequest();
	var path = "api/migraine/" + migraine.id;
	console.log(path);
	xhr.open("PUT", path, true);
	xhr.setRequestHeader("Content-Type", "application/json");
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4 && xhr.status < 400) {
			getMigraines();
			displayEnemy(e);
		}
		if (xhr.readyState === 4 && xhr.status >= 400) {
			console.log("Enemy not updated");
		}
	};
	console.log(JSON.stringify(migraine));
	xhr.send(JSON.stringify(migraine));
}
function create() {
	var form = document.getElementById('create');
	var migraine = {};
	migraine.hp = form.hp.value;
	migraine.name = form.name.value;
	console.log(migraine);

	var xhr = new XMLHttpRequest();
	xhr.open("POST", "api/migraine", true);
	xhr.setRequestHeader("Content-Type", "application/json");
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4 && xhr.status < 400) {
			getMigraines();
		}

		if (xhr.readyState === 4 && xhr.status >= 400) {
			console.log("Enemy not created");
		}
	};
	xhr.send(JSON.stringify(migraine));
}/**
 * 
 */