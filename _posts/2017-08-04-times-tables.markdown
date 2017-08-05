---
layout: post
title:  "Times Tables"
date:   2017-08-04 22:55:48
---
<style>

table {
    text-align: center;
    margin: 0 auto;
}

th {
    font-family: sans-serif;
}

input {
    text-align: center;
}

input:required:invalid {
    background-color: #fee;
}

input:required:valid {
    background-color: #efe;
}

progress {
    width: 100%;
}


</style>
<progress id="progress-bar" value="1" max="144"></progress>
<table id="times-table"></table>

<script>
    var current = null;
    var todo = [];
    var table = document.getElementById('times-table');
    for (var i=1; i<=12; ++i) {
        var tr = document.createElement('tr');
        if (i === 1) {
            tr.appendChild(document.createElement('th'))
            for (var j=1; j<=12; ++j) {
                var th = document.createElement('th');
                th.innerHTML = '' + j
                tr.appendChild(th)
            }
            table.appendChild(tr);
            tr = document.createElement('tr');
        }
        table.appendChild(tr);
        for (var j=1; j<=12; ++j) {
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
            input.setAttribute('required', true)
            input.setAttribute('placeholder', id)
            input.setAttribute('disabled', true)
            input.setAttribute('size', 6)
            input.setAttribute('pattern', '' + j* i)
            input.setAttribute('title', '' + j + ' times ' +  i)

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
            progress.value = parseInt(progress.value, 10) + 1
            next()
        }
    }

    function next() {
        if (current) {
            current.removeEventListener('input', checkCurrent)
            current = null;
        }
        if (todo.length === 0) {
            showWellDone()
        } else {
            var idx = Math.floor(todo.length * Math.random());
            var val = todo.splice(idx, 1);
            var input = document.getElementById(val[0]);
            input.removeAttribute('disabled')
            input.focus();
            current = input;
            current.addEventListener('input', checkCurrent)
        }
    }

    next();
</script>
