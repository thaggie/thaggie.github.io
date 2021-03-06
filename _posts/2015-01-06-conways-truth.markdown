---
layout: post
title: "Conway's Truth"
date: 2015-01-06 23:21:48
---

This is a mashup between a Javascript truthyness table and [Conway's Life](http://en.wikipedia.org/wiki/Conway%27s_Game_of_Life), inspired by [this page](http://dorey.github.io/JavaScript-Equality-Table).

<div>
<style type="text/css">
body {
	
}

th.rotate {
height: 20px;
white-space: nowrap;
}

th.rotate > div {
transform:
translate(0, 0px)
rotate(270deg);
width: 1.5em;
}
th.rotate > div > span {
border-bottom: 1px solid #ccc;
padding: 5px 10px;
}
th {
height: 1.5em;
font-weight: normal;
text-align: right;
}
td.on {
border: solid 2px rgb(0, 109, 0);
border-radius: 2px;
background-color: rgb(87, 192, 86);
}
td.off {
border: solid 2px rgb(177, 177, 177);
border-radius: 2px;
background-color: white;
}
</style>

<input id="start" type="button" value="Start"/>
<input id="next" type="button" value="Next"/>
<input id="reset" type="button" value="Reset"/>
<input id="clear" type="button" value="Clear"/>
<table>
<tbody id="life">
</tbody>
</table>
<script>
var firstFrame = [];
var currentFrame = firstFrame;
var cells=[];
var truths = ['true', 'false', '1', '0', '-1', '"true"', '"false"', '"1"', '"0"', '"-1"','""', 'null', 'undefined', 'Infinity', '-Infinity', '[]', '{}', '[[]]', '[0]','[1]', 'NaN'];
var values1 = [true, false, 1, 0, -1, "true", "false", "1", "0", "-1","", null, undefined, Infinity, -Infinity, [], {}, [[]], [0], [1], NaN];
var values2 = [true, false, 1, 0, -1, "true", "false", "1", "0", "-1","", null, undefined, Infinity, -Infinity, [], {}, [[]], [0], [1], NaN];
var life = document.getElementById("life");
var tr = document.createElement("tr");
var i, j, td, div;
td = document.createElement("td");
tr.appendChild(td);
for (i=0;  i<truths.length; ++i) {
	td = document.createElement("th");
	div = document.createElement("div");
	td.className = 'rotate';
	div.textContent = truths[i];
	td.appendChild(div);
	tr.appendChild(td);
}
life.appendChild(tr);

var toggleCell = function(td, i, j) {
return function() {
if (currentFrame[i][j]) {
td.className = 'off';
currentFrame[i][j] = 0;
} else {
td.className = 'on';
currentFrame[i][j] = 1;
}
};
};

for (i=0; i<truths.length; ++i) {
firstFrame[i] = [];
cells[i] = [];
tr = document.createElement("tr");
td = document.createElement("th");
td.textContent = truths[i];
tr.appendChild(td);

    for (j=0;  j<truths.length; ++j) {
    	td = document.createElement("td");
    	cells[i][j] = td;
    	firstFrame[i][j] = 0
    	tr.appendChild(td);
    	td.addEventListener('click', toggleCell(td, i, j));
    }
    life.appendChild(tr);

}

for (i=0; i<truths.length; ++i) {
for (j=0; j<truths.length; ++j) {
if (values1[i] == values2[j]) {
firstFrame[i][j] = 1;
} else {
firstFrame[i][j] = 0;
}
}
}

var countNeighbours = function(frame, i, j) {
var oi = i;
var oj = j;
var y1 = i >= 1 ? i-1 : i;
var x1 = j >= 1 ? j-1 : j;
var y2 = i < (frame.length-1) ? i+1 : i;
var x2 = j < (frame.length-1) ? j+1 : j;
var count = 0;
for (i=y1; i<=y2; ++i) {
for (j=x1; j<=x2; ++j) {
if (frame[i][j] === 1 && (i !== oi || j !== oj)) {
++count;
}
}
}
return count;

};

var nextFrame = function(frame) {
var nextFrame = [];
var i, j;
for (i=0; i<frame.length; ++i) {
nextFrame[i] = [];
for (j=0; j<frame.length; ++j) {
var neighbours = countNeighbours(frame, i, j);
var alive = frame[i][j] === 1;
if (alive) {
if (neighbours < 2) {
alive = false;
} else if (neighbours < 4) {
alive = true;
} else {
alive = false;
}
} else {
alive = neighbours === 3;
}
nextFrame[i][j] = alive ? 1 : 0;
}
}
return nextFrame;
};
var drawFrame = function(frame) {
for (i=0; i<truths.length; ++i) {
for (j=0; j<truths.length; ++j) {
td = cells[i][j];
if (frame[i][j]) {
td.className = 'on';
} else {
td.className = 'off';
}
}
}
};

drawFrame(currentFrame);

var reset = document.getElementById("reset");
reset.addEventListener('click', function() {
currentFrame = firstFrame;
drawFrame(currentFrame);
});

var start = document.getElementById("start");
var intervalId = null;
var stop = function () {
clearInterval(intervalId);
intervalId = null;
start.value = "Start";
};
var same = function (a, b) {
var i, j;
for (i=0;i<a.length; ++i) {
for (j=0;j<a.length; ++j) {
if (a[i][j] !== b[i][j]) {
return false;
}
}
}
return true;
};
var toggleOn = function() {
if (intervalId === null) {
intervalId = setInterval(function() {
var previousFrame = currentFrame;
currentFrame = nextFrame(currentFrame);
drawFrame(currentFrame);
if (same(currentFrame, previousFrame)) {
stop();
}
}, 1000);
start.value = "Stop";
} else {
stop();
}
};
var next = function() {
currentFrame = nextFrame(currentFrame);
drawFrame(currentFrame);
};

var nextButton = document.getElementById("next");
nextButton.addEventListener('click', next);

var clear = function () {
for (i=0; i<truths.length; ++i) {
for (j=0; j<truths.length; ++j) {
currentFrame[i][j] = 0;
}
}
drawFrame(currentFrame);
};
var clearButton = document.getElementById("clear");
clearButton.addEventListener('click', clear);

start.addEventListener('click', toggleOn);

toggleOn();
</script>

</div>
