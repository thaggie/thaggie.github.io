---
layout: post
title: "Pixel Eight - Splash & Score"
date: 2019-03-17 11:30:00
---

This post is part of a series creating a snake game on the [Pixel Kit][pixel-kit] using the [pixel-eight] library, the previous posts were [an introduction][pixel-eight-1], about [adding interactivity][pixel-eight-2] and [game logic][pixel-eight-3].

Today in the final installment we'll add a splash screen and score display to our game, showing how to use text in [pixel-eight].

Text can be displayed using the `print` statment, it takes the text you want to print, the co-ordinates to print at and the colour to print in (defaulting to 0, 0 white). The font is faily basic, with a-z and a few other characters (period, underscrore etc.). Each character is 3 pixels wide, when printed they're separated with a single pixel between each character.

We'll start with the splash screen, here we run into a problem snake is 5 characters long, each character with the space separator takes up 4 pixels - 5x4 pixels is 20 - the pixel is only 16 pixels wide. A workarround for this is to use colour to separate the characters rather than a pixel - 3x5 = is 15 so will fit on the screen.

We can use the colours from the game:

```js
const drawSplash = frame => {
  frame.print("s", 0, 1, color.green);
  frame.print("n", 3, 1, color.yellow);
  frame.print("a", 6, 1, color.green);
  frame.print("k", 9, 1, color.yellow);
  frame.print("e", 12, 1, color.green);
};
```

Now the score is just the length of the snake, so when the snake dies we set the score to be the length of the snake. We can change the `init` function to take a `score` parameter that's set from the length of the snake:

```js
const init = score => {
  return { ...initialState, food: createFood(), score };
};

start({
  ...
  update: (state, { clicked }) => {
  ...
    // if the snake's moving check if it's eating itself
    if ((dx !== 0 || dy !== 0) && snakeHit(state.snake, x, y)) {
      return init(state.snake.length);
    }
  ...

```

To draw the score we want to center it on the screen, we need to find out how long it is and work out how many pixels it'll take up:

```js
const drawScore = (frame, scoreNum) => {
  const scoreStr = String(scoreNum);
  const x = (16 - scoreStr.length * 4) / 2; // each character takes 4 pixels
  const y = 1; // offset by one vertically so the text doesn't touch the top
  frame.print(scoreStr, x, 1, color.green);
};
```

Now in our draw routine we need to know whether we should be showing the splash screen, the score or the game. When the game is running, the snake is moving, so either `dx` or `dy` is 1 so we can test them to know if the game is on. If the game has been played then a score will have been set so we can test the score to see if we should show the splash or score.

```js
draw: (frame, { score, c, snake, dy, dx, food }) => {
  frame.cls();
  // is the game running?
  if (dy === 0 && dx === 0) {
    // has a score been set?
    if (score) {
      drawScore(frame, score);
    } else {
      drawSplash(frame);
    }
  } else {
    snake.forEach(({ x, y }) => {
      frame.pset(x, y, color.yellow);
    });
    frame.pset(food.x, food.y, color.green);
  }
};
```

[pixel-eight-1]: /2019/01/24/pixel-eight
[pixel-eight-2]: /2019/01/25/pixel-eight-2
[pixel-eight-3]: /2019/01/28/pixel-eight-3
[pixel-eight]: https://github.com/thaggie/pixel-eight
[pixel-kit]: https://kano.me/store/us/products/pixel-kit
