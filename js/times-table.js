(function() {
  var size = 12;
  var current = null;
  var todo = [];
  // var table = document.getElementById('times-table');
  for (var i = 1; i <= size; ++i) {
    // var tr = document.createElement('tr');
    if (i === 1) {
      // tr.appendChild(document.createElement('th'));
      for (var j = 1; j <= size; ++j) {
        // var th = document.createElement('th');
        // th.innerHTML = '' + j;
        // tr.appendChild(th);
      }
      // table.appendChild(tr);
      // tr = document.createElement('tr');
    }
    // table.appendChild(tr);
    for (var j = 1; j <= size; ++j) {
      // var td = document.createElement('td');
      if (j === 1) {
        // var th = document.createElement('th');
        // th.innerHTML = '' + i;
        // tr.appendChild(th);
      }
      // var input = document.createElement('input');
      // input.setAttribute('type', 'text');
      var id = '' + j + ' x ' + i;
      todo.push(id);
      // input.setAttribute('id', id);
      // input.setAttribute('placeholder', id);
      // input.setAttribute('disabled', true);
      // input.setAttribute('size', 6);
      // input.setAttribute('pattern', '' + j * i);
      // input.setAttribute('title', '' + j + ' times ' + i);

      // td.appendChild(input);
      // tr.appendChild(td);
    }
  }
  function showWellDone() {
    // var marquee = document.createElement('marquee');
    // marquee.innerHTML = 'Well Done!';
    // var progress = document.getElementById('progress-bar');
    // progress.parentElement.appendChild(marquee);
  }

  function checkCurrent(e) {
    // var p = current.getAttribute('pattern');
    // var v = current.value;
    // if (v.trim() === p) {
    //   var progress = document.getElementById('progress-bar');
    //   current.setAttribute('class', 'done');
    //   progress.value = parseInt(progress.value, 10) + 1;
    //   var idx = todo.indexOf(current.id);
    //   todo.splice(idx, 1);
    // } else {
    //   current.setAttribute('class', 'todo');
    // }
  }

  function next() {
    if (current) {
      // current.setAttribute('disabled', true);
      // checkCurrent();
      current = null;
    }
    if (todo.length === 0) {
      showWellDone();
    } else {
      var idx = Math.floor(todo.length * Math.random());
      var val = todo[idx];
      // var input = document.getElementById(val);
      // input.removeAttribute('disabled');
      // input.focus();
      // current = input;
    }
  }

  function moveNext(e) {
    e.preventDefault();
    next();
  }
  // var input = document.getElementById('next');
  // input.addEventListener('click', moveNext);

  next();
})();
