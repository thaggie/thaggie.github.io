const IMAGE_WIDTH = 320;
const IMAGE_HEIGHT = 320;
const OFFSET_X = 160;
const OFFSET_Y = 160;
const FACE_RADIUS = 155;
const MINUTE_RADIUS = 145;
const HOUR_RADIUS = 125;
const HOUR_SIZE = 80;
const MINUTE_SIZE = 110;

function radians(degrees) {
  return (Math.PI / 180) * degrees;
}

function degrees(hour) {
  return hour * 30;
}

function drawHour(clock, hour) {
  const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
  text.setAttribute(
    "x",
    OFFSET_X + HOUR_RADIUS * Math.sin(radians(degrees(hour)))
  );
  text.setAttribute(
    "y",
    OFFSET_Y - HOUR_RADIUS * Math.cos(radians(degrees(hour)))
  );
  text.setAttribute("text-anchor", "middle");
  text.setAttribute("alignment-baseline", "central");
  text.setAttribute("font-size", "24px");
  text.setAttribute("font-family", "Arial");

  text.setAttribute("fill", "black");
  text.innerHTML = String(hour);

  clock.appendChild(text);
}

function drawDot(clock, hour) {
  const dot = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  dot.setAttribute(
    "cx",
    OFFSET_X + HOUR_RADIUS * Math.sin(radians(degrees(hour)))
  );
  dot.setAttribute(
    "cy",
    OFFSET_Y - HOUR_RADIUS * Math.cos(radians(degrees(hour)))
  );
  dot.setAttribute("r", "5");
  dot.setAttribute("fill", "black");
  clock.appendChild(dot);
}

function drawMinute(clock, minute) {
  const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
  text.setAttribute(
    "x",
    OFFSET_X + MINUTE_RADIUS * Math.sin(radians(degrees(minute / 5)))
  );
  text.setAttribute(
    "y",
    OFFSET_Y - MINUTE_RADIUS * Math.cos(radians(degrees(minute / 5)))
  );
  text.setAttribute("text-anchor", "middle");
  text.setAttribute("alignment-baseline", "central");
  text.setAttribute("font-size", "8px");
  text.setAttribute("font-family", "Arial");

  text.setAttribute("fill", "black");
  text.innerHTML = String(minute);

  clock.appendChild(text);
}

function drawClockFace(clock, minutes, hours) {
  const border = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "circle"
  );
  border.setAttribute("cx", OFFSET_X);
  border.setAttribute("cy", OFFSET_Y);
  border.setAttribute("r", FACE_RADIUS);
  border.setAttribute("stroke", "black");
  border.setAttribute("stroke-width", 4);
  border.setAttribute("fill", "white");

  clock.appendChild(border);

  for (let hour = 1; hour <= 12; ++hour) {
    if (hours) {
      drawHour(clock, hour);
    } else {
      drawDot(clock, hour);
    }
  }
  if (minutes) {
    for (let minute = 0; minute < 60; ++minute) {
      drawMinute(clock, minute);
    }
  }
}

function drawHourHand(clock, hour) {
  const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
  line.setAttribute("x1", OFFSET_X);
  line.setAttribute("y1", OFFSET_Y);
  line.setAttribute(
    "x2",
    OFFSET_X + HOUR_SIZE * Math.sin(radians(degrees(hour)))
  );
  line.setAttribute(
    "y2",
    OFFSET_Y - HOUR_SIZE * Math.cos(radians(degrees(hour)))
  );
  line.setAttribute("stroke", "black");
  line.setAttribute("stroke-width", 6);

  clock.appendChild(line);
}

function drawMinuteHand(clock, minute) {
  const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
  line.setAttribute("x1", OFFSET_X);
  line.setAttribute("y1", OFFSET_Y);
  line.setAttribute(
    "x2",
    OFFSET_X + MINUTE_SIZE * Math.sin(radians(degrees(minute / 5)))
  );
  line.setAttribute(
    "y2",
    OFFSET_Y - MINUTE_SIZE * Math.cos(radians(degrees(minute / 5)))
  );
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
  hourInput.setAttribute("value", "");
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
  minuteInput.setAttribute("value", "");
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
  controls.appendChild(document.createElement("br"));
  controls.appendChild(checkButton);

  // content.appendChild(controls);

  const content = document.createElement("div");
  content.setAttribute("id", "content");

  content.appendChild(controls);
  const score = document.createElement("div");
  score.setAttribute("id", "run");
  content.appendChild(score);

  document.body.appendChild(content);
}

const clock = document.createElementNS("http://www.w3.org/2000/svg", "svg");
clock.setAttribute("height", IMAGE_HEIGHT);
clock.setAttribute("width", IMAGE_WIDTH);
const clockContainer = document.createElement("div");
clockContainer.appendChild(clock);
document.body.appendChild(clockContainer);

function clear(svg) {
  while (svg.lastChild) {
    svg.removeChild(svg.lastChild);
  }
}

const game = {
  run: [],
};

function newTime(game, h, m) {
  if (h === undefined && m === undefined) {
    game.hour = Math.ceil(Math.random() * 12);
    game.minutes = Math.floor(Math.random() * 12) * 5;
  } else {
    game.hour = h;
    game.minutes = m;
  }
}

function drawRun(game) {
  if (game.run.length > 0) {
    const run = document.getElementById("run");
    run.innerHTML = "";
    for (let i = 0; i < game.run.length; ++i) {
      const score = document.createElement("div");
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

function newTest(h, m) {
  newTime(game, h, m);
  clear(clock);
  drawClockFace(clock, game.run.length < 6, game.run.length < 12);
  drawHands(clock, game.hour, game.minutes);
  drawRun(game);
  document.getElementById("hour").focus();
}

function drawMessage(message) {
  const run = document.getElementById("run");
  run.innerHTML = message;
}

drawControls(() => {
  const hourInput = document.getElementById("hour");
  const minutesInput = document.getElementById("minutes");
  const correct =
    game.hour == hourInput.value && game.minutes == minutesInput.value;

  hourInput.value = "";
  minutesInput.value = "";
  game.run.push(correct);
  if (correct) {
    drawMessage("");
    newTest();
  } else {
    game.run = [];
    drawMessage("Try again!");
  }
});

const d = new Date();
const h = d.getHours() > 12 ? d.getHours() - 12 : d.getHours();
const m = Math.floor(d.getMinutes() / 5) * 5;
newTest(h, m);
