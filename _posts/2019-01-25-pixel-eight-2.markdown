---
layout: post
title: "Pixel Eight - Interactivity"
date: 2019-01-25 22:47:00
---

This post is part of a series creating a snake game on the [Pixel Kit][pixel-kit] using the [pixel-eight] library, please follow the [first post for an introduction][previous].

Today we're going to introduce interactivity, via the `update` function. The `update` function takes the game state (initially created by the `init` function, subsiquently the result from the previous call to `update`) and an object representing the button state.

### Buttons

The button state has two equivalent parts `pressed` and `clicked`. Pressed is for buttons that are currently being held down, clicked means the button was pressed but needs releasing before it gets set again for a second press.

Let's write a function to move the yellow dot around the screen.

```js
start({
  init: () => {
    return { x: 7, y: 3 };
  },
  update: ({ x, y }, { pressed }) => {
    if (pressed.up) {
      y -= 1;
    }
    if (pressed.down) {
      y += 1;
    }
    if (pressed.left) {
      x -= 1;
    }
    if (pressed.right) {
      x += 1;
    }
    return { x, y };
  },
  draw: (frame, { x, y }) => {
    frame.pset(x, y, color.yellow);
  }
});
```

Here we're using the `pressed` button so as you hold the directional button the yellow dot will continue to move.

Try replacing `pressed` with `clicked`, notice that now the yellow dot now just moves one pixel each time you press the directional button.

In all the button structures have 7 boolean fields, the 4 directions plus:

- `j` - The center button of the directional pad
- `a` - The right of the two red buttons
- `b` - The left of the two red buttons

### The Game

In the game the snake continually moves, pressing the directional buttons causes it to change direction. The snake moves horizontally of vertically, to model the snake's direction we'll add `dx` and `dy` variables to the game state.

We pass in a custom `frameRate` (how frequently the pixel is updated) to slow the game down to a speed at which it can be played.

```js
start({
  frameRate: 300, // to slow the game down to update every 300 milliseconds
  init: () => {
    return { dx: 0, dy: 0, x: 7, y: 3 };
  },
  ...
});
```

We set `dx` and `dy` to `0` to start with so the snake doesn't move till the player presses a direction.

The `update` function needs to be changed so that the joystick changes `dx` and `dy` rather than `x` and `y`.

```js
  ...
  update: ({ dy, dx, x, y }, { clicked }) => {
    if (clicked.up) {
      dy = -1;
      dx = 0;
    }
    if (clicked.down) {
      dy = 1;
      dx = 0;
    }
    ...
    x += dx;
    y += dy;
    return { dy, dx, x, y };
  }
```

Note that the code `clicked.left` and `clicked.right` **also needs updating** in a similar way, with the `dy` set to `0` and `dx` set to either `1` or `-1`.

`draw` can be updated to clear the screen, so we always draw everything from scratch. `cls` is used to clear the screen, it can optionally take a `color` argument (the default is black).

```js
draw: (frame, { x, y }) => {
  frame.cls();
  frame.pset(x, y, color.yellow);
};
```

We can add collision detection to the `update` function to reset if the snake goes out of bounds.

```
  update: ({ dy, dx, x, y }, { clicked }) => {
    ...
    // reset if we hit the edge of the screen
    if (x < 0 || x >= 16 || y < 0 || y >= 8) {
      x = 7;
      y = 3;
      dx = 0;
      dy = 0;
    }

    return { x, y, dy, dx };
  },
```

The next post will cover getting the snake to eat food and grow.

[previous]: /2019/01/24/pixel-eight
[pixel-eight]: https://github.com/thaggie/pixel-eight
[pixel-kit]: https://kano.me/store/us/products/pixel-kit
