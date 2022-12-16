---
layout: post
title: "Times Tables"
date: 2017-08-04 22:55:48
---

<style>
.site {
  max-width: 44rem;
}
table {
    padding: 5px;
    border-radius: 10px;
    text-align: center;
    margin: 0 auto;
    background-color: white;
    transform: translate(-50%);
    margin-left: 50%;
}
@media print {
  @page {
    size: landscape;
    orientation: landscape;
  }
  body {
    margin: 0;
  }

  .site {
    max-width: inherit;
    min-height: inherit;
    margin: 0 inherit;
    line-height: 1.5rem;
    background-color: white;
  }

  .copyright {
    display: none;
  }

  .meta {
    display: none;
  }

table, th, td {
    border: 1px solid black;
    border-collapse: collapse;
}
table {
  margin-top: 1rem;
}

th {
  padding: 0.1rem 0.4rem;
}
  input {
    border-style: none;
    display: inline;
  }

  td {min-width: 4rem;}

  ::-webkit-input-placeholder { /* WebKit browsers */
      color: transparent;
  }
  :-moz-placeholder { /* Mozilla Firefox 4 to 18 */
      color: transparent;
  }
  ::-moz-placeholder { /* Mozilla Firefox 19+ */
      color: transparent;
  }
  :-ms-input-placeholder { /* Internet Explorer 10+ */
      color: transparent;
  }

}

th {
    font-family: sans-serif;
}

table input {
    text-align: center;
}

table input[type=number] {
    -moz-appearance:textfield; 
    margin: 0;
    width: 7ch;
} 

table input[type=number]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

.todo {
    background-color: #fee;
}

.done {
    background-color: #efe;
}

progress {
    width: 100%;
}

</style>
<form>
<progress class="no-print" id="progress-bar" value="1" max="144"></progress>
<table id="times-table" ></table>
<input id="next" class="no-print" type="submit" value="Next" />
</form>
<script>
    var size = 12;
    var current = null;
    var todo = [];
    var table = document.getElementById('times-table');
    for (var i=1; i<=size; ++i) {
        var tr = document.createElement('tr');
        if (i === 1) {
            tr.appendChild(document.createElement('th'))
            for (var j=1; j<=size; ++j) {
                var th = document.createElement('th');
                th.innerHTML = '' + j
                tr.appendChild(th)
            }
            table.appendChild(tr);
            tr = document.createElement('tr');
        }
        table.appendChild(tr);
        for (var j=1; j<=size; ++j) {
            var td = document.createElement('td');
            if (j === 1) {
                var th = document.createElement('th');
                th.innerHTML = '' + i
                tr.appendChild(th);
            }
            var input = document.createElement('input');
            input.setAttribute('type', 'text');
            var id = '' + j + " x " + i;
            todo.push(id);
            input.setAttribute('id', id);
            input.setAttribute('placeholder', id)            
            input.setAttribute('disabled', true)
            input.setAttribute('size', 6)
            input.setAttribute('type', 'number')
            input.setAttribute('pattern', '' + j* i)
            input.setAttribute('title', '' + j + ' times ' +  i)
            input.setAttribute('aria-label', '' + j + ' times ' +  i)

            td.appendChild(input);
            tr.appendChild(td);
        }
    }
    function showWellDone() {
        var marquee = document.createElement('marquee');
        marquee.innerHTML = 'Well Done!'
        var progress = document.getElementById('progress-bar');
        progress.parentElement.appendChild(marquee);
    }

    function checkCurrent(e) {
        var p = current.getAttribute('pattern');
        var v = current.value;
        if (v.trim() === p) {
            var progress = document.getElementById('progress-bar');
            current.setAttribute('class', 'done')
            progress.value = parseInt(progress.value, 10) + 1
            var idx = todo.indexOf(current.id)
            todo.splice(idx, 1)
        } else {
            current.setAttribute('class', 'todo')
        }
    }

    function next() {
        if (current) {
            current.setAttribute('disabled', true)
            checkCurrent()
            current = null;
        }
        if (todo.length === 0) {
            showWellDone()
        } else {
            var idx = Math.floor(todo.length * Math.random());
            var val = todo[idx];
            var input = document.getElementById(val);
            input.removeAttribute('disabled')
            input.focus();
            current = input;
        }
    }

    function moveNext(e) {
        e.preventDefault();
        next()
    }
    var input = document.getElementById('next');
    input.addEventListener("click", moveNext);

    next();

</script>
