---
layout: post
title: "Pixel Eight - Game Logic"
date: 2019-01-28 21:01:00
---

This post is part of a series creating a snake game on the [Pixel Kit][pixel-kit] using the [pixel-eight] library, the previous posts were [an introduction][pixel-eight-1] and about [adding interactivity][pixel-eight-2].

Today we're going to build out the logic of the game - to make it into an actual game.

The `update` function is going to get quite a lot more logic, so we'll do a bit of re-factoring, first we pull out the code to update the snake's direction into a function:

```js
const updateDirection = ({ dx, dy }, clicked) => {
  if (clicked.up) {
    dy = -1;
    dx = 0;
  }
  if (clicked.down) {
    dy = +1;
    dx = 0;
  }
  if (clicked.left) {
    dx = -1;
    dy = 0;
  }
  if (clicked.right) {
    dx = 1;
    dy = 0;
  }

  return { dx, dy };
};
```

We can pull out the initial state into a variable that can be re-used:

```js
const initialState = { dx: 0, dy: 0, x: 7, y: 3 };

start({
  frameRate: 300,
  init: () => {
    return initialState;
  },
  update: (state, { clicked }) => {
    const { dy, dx } = updateDirection(state, clicked);

    const x = state.x + dx;
    const y = state.y + dy;

    // reset if we hit the edge of the screen
    if (x < 0 || x >= 16 || y < 0 || y >= 8) {
      return initialState;
    }

    return { ...state, x, y, dy, dx };
  },
  draw: (frame, { x, y }) => {
    frame.cls();
    frame.pset(x, y, color.yellow);
  }
});
```

The food for the snake will be placed randomly around the screen, we can write a function to create it:

```js
const createFood = () => {
  return {
    x: Math.floor(Math.random() * 16),
    y: Math.floor(Math.random() * 8)
  };
};
```

Since we will want to initially have some food in the game state we can pull the init out to a function:

```js
const init = () => {
  return { ...initialState, food: createFood() };
};
```

We can then modify our draw function to draw the food:

```js
start({
  frameRate: 300,
  init,
  update: (state, { clicked }) => {
    ...
  },
  draw: (frame, { x, y, food }) => {
    frame.cls();
    frame.pset(x, y, color.yellow);
    frame.pset(food.x, food.y, color.green);
  }
});
```

When the snake eats the food its length increases. Rather than representing the snake as a single point (x,y) we need to represent it as an array of points reflecting the snakes length.

```js
const initialState = { dx: 0, dy: 0, snake: [{x: 7, y: 3}] };
...
start({
  ...
  update: (state, { clicked }) => {
    ...
    let food = state.food;
    // add the new point to the head of the snake
    const snake = [...state.snake, { x, y }];
    if (x === food.x && y === food.y) {
      // we hit the food so create a new one
      food = createFood();
    } else {
      // we missed the food so remove the end of the tail
      snake.shift();
    }
    return { ...state, snake, dy, dx, food };
  },
  draw: (frame, { snake, food }) => {
    frame.cls();
    // draw each part of the snake
    snake.forEach(({ x, y }) => {
      frame.pset(x, y, color.yellow);
    });
    frame.pset(food.x, food.y, color.green);
  }
});
```

Finally we need to add collision detection so that the snake dies when it tries to eat itself.

```js
const snakeHit = (snake, hx, hy) => {
  return snake.reduce((hit, { x, y }) => {
    return hit || (x === hx && y === hy);
  }, false);
};
...
start({
  update: (state, { clicked }) => {
    ...
    // if the snake's moving check if it's eating itself
    if ((dx !== 0 || dy !== 0) && snakeHit(state.snake, x, y)) {
      return init();
    }
    ...
  },
  ...
});
```

In the next post will cover [adding a splash screen and displaying the score][pixel-eight-4].

[pixel-eight-1]: /2019/01/24/pixel-eight
[pixel-eight-2]: /2019/01/25/pixel-eight-2
[pixel-eight-4]: /2019/03/17/pixel-eight-4
[pixel-eight]: https://github.com/thaggie/pixel-eight
[pixel-kit]: https://kano.me/store/us/products/pixel-kit
