function radians(degrees) {
  return (Math.PI / 180) * degrees;
}

function degrees(hour) {
  return hour * 30;
}

function drawHour(clock, hour) {
  const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
  text.setAttribute("x", 120 + 100 * Math.sin(radians(degrees(hour))));
  text.setAttribute("y", 120 - 100 * Math.cos(radians(degrees(hour))));
  text.setAttribute("text-anchor", "middle");
  text.setAttribute("alignment-baseline", "central");

  text.setAttribute("fill", "black");
  text.innerHTML = String(hour);

  clock.appendChild(text);
}

function drawClockFace(clock) {
  const border = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "circle"
  );
  border.setAttribute("cx", 120);
  border.setAttribute("cy", 120);
  border.setAttribute("r", 110);
  border.setAttribute("stroke", "black");
  border.setAttribute("stroke-width", 1);
  border.setAttribute("fill", "white");

  clock.appendChild(border);

  for (let hour = 1; hour <= 12; ++hour) {
    drawHour(clock, hour);
  }
}

function drawHourHand(clock, hour) {
  const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
  line.setAttribute("x1", 120);
  line.setAttribute("y1", 120);
  line.setAttribute("x2", 120 + 60 * Math.sin(radians(degrees(hour))));
  line.setAttribute("y2", 120 - 60 * Math.cos(radians(degrees(hour))));
  line.setAttribute("stroke", "black");
  line.setAttribute("stroke-width", 4);

  clock.appendChild(line);
}

function drawMinuteHand(clock, minute) {
  const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
  line.setAttribute("x1", 120);
  line.setAttribute("y1", 120);
  line.setAttribute("x2", 120 + 80 * Math.sin(radians(degrees(minute * 5))));
  line.setAttribute("y2", 120 - 80 * Math.cos(radians(degrees(minute * 5))));
  line.setAttribute("stroke", "black");
  line.setAttribute("stroke-width", 2);

  clock.appendChild(line);
}

function drawHands(clock, hour, minutes) {
  drawHourHand(clock, hour + minutes / 60);
  drawMinuteHand(clock, minutes);

  clock.setAttribute("data-hour", hour);
  clock.setAttribute("data-minutes", minutes);
}

function drawControls(onCheck) {
  const hourInput = document.createElement("input");
  hourInput.setAttribute("id", "hour");
  hourInput.setAttribute("name", "hour");
  hourInput.setAttribute("type", "number");
  hourInput.setAttribute("min", "1");
  hourInput.setAttribute("max", "12");
  hourInput.setAttribute("value", "6");
  hourInput.addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      document.getElementById("minutes").focus();
    }
  });

  const minuteInput = document.createElement("input");
  minuteInput.setAttribute("id", "minutes");
  minuteInput.setAttribute("name", "minutes");
  minuteInput.setAttribute("type", "number");
  minuteInput.setAttribute("min", "0");
  minuteInput.setAttribute("max", "60");
  minuteInput.setAttribute("step", "5");
  minuteInput.setAttribute("value", "30");
  minuteInput.addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      onCheck();
    }
  });
  const checkButton = document.createElement("button");
  checkButton.innerHTML = "Check";
  checkButton.setAttribute("type", "button");

  if (onCheck) {
    checkButton.addEventListener("click", onCheck);
  }

  const controls = document.createElement("form");
  controls.setAttribute("id", "controls");
  controls.appendChild(hourInput);
  controls.appendChild(document.createTextNode(":"));
  controls.appendChild(minuteInput);
  controls.appendChild(checkButton);

  document.body.appendChild(controls);
}

const clock = document.createElementNS("http://www.w3.org/2000/svg", "svg");
clock.setAttribute("height", 300);
clock.setAttribute("width", 300);
document.body.appendChild(clock);

function clear(svg) {
  while (svg.lastChild) {
    svg.removeChild(svg.lastChild);
  }
}

drawClockFace(clock);

const game = {
  run: [],
};

function newTime(game) {
  game.hour = Math.ceil(Math.random() * 12);
  game.minutes = Math.floor(Math.random() * 12) * 5;
}

function drawRun(game) {
  if (game.run.length > 0) {
    const run = document.getElementById("run");
    run.innerHTML = "";
    run.appendChild(document.createTextNode("Streak: "));
    for (let i = 0; i < game.run.length; ++i) {
      const score = document.createElement("span");
      if (game.run[i]) {
        score.innerHTML = "&#x2713";
        score.setAttribute("style", "color: green;");
      } else {
        score.innerHTML = "&#x2717";
        score.setAttribute("style", "color: red;");
      }
      run.appendChild(score);
    }
  }
}

function newTest() {
  newTime(game);
  clear(clock);
  drawClockFace(clock);
  drawHands(clock, game.hour, game.minutes);
  drawRun(game);
  document.getElementById("hour").focus();
}

drawControls(() => {
  const correct =
    game.hour == document.getElementById("hour").value &&
    game.minutes == document.getElementById("minutes").value;

  game.run.push(correct);
  newTest();
});

const score = document.createElement("div");
score.setAttribute("id", "run");
document.body.appendChild(score);

newTest();
