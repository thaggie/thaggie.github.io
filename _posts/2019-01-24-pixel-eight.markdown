---
layout: post
title: "Pixel Eight 1"
date: 2019-01-24 22:47:00
---

I've created a little wrapper around the [Kano Community SDK][kano-sdk] for building games for the [Kano Pixel][pixel-kit] called [pixel-eight][]. The API is inspired by that for the [pico-8][] but is Javascript based rather than [lua][]. This post is a walkthrough of developing a snake game using the [pixel-eight][] library.

&nbsp;

### Getting Started

I'm assuming you have a relatively modern version of [node][] installed.

First we create a node project:

```sh
mkdir snake
cd snake
npm init -y
npm install --save pixel-eight
```

Typically we use source control to manage how projects evolve, I'll write out the few steps to get use git to manage the source here but won't mention it for future steps, typically you'd want to `commit` after each step.

First we initialize the git repository and tell it to ignore the installed files:

```sh
git init
echo node_modules > .gitignore
```

Create the first commit:

```sh
git add --all
git commit -m "Boilerplate node project with pixel-eight"
```

&nbsp;

### A First Program

The basics of starting a game running.

```js
const { color, start } = require("pixel-eight");

start({
  draw: frame => {
    const x = 0;
    const y = 0;
    frame.pset(x, y, color.red);
  }
});
```

Here we've created a game, the `start` function starts the game runs in a loop calling `draw` (by default) at 10 times per second.

`pset` sets one pixel to a specific color, the colors are from a standard palette for which there are names in the `color` export of the library. The co-ordinates system starts at the top left of the board with (0,0) and goes to (15,7) at the bottom right.

This "game" should be runnable on your [pixel][pixel-kit], create an `index.js` file and copy the code above into it:

- Ensure that your pixel is connected to your computer via USB.
- Ensure that youre pixel is turned on.
- At the command line run `node index.js`
- You should see the pixel go blank with a single red pixel in the top left
- Ctrl+C to stop the program from running.

Create a commit:

```sh
git add --all
git commit -m "A First Program, sets the pixel at the top left to red"
```

&nbsp;

### A Development Environment

While we can work writing code, running, writing more, stoping and then starting again it's preferable to let the program restart for us every time we save.

```sh
npm add --save-dev nodemon
```

Edit the `package.json` file, there's a `scripts` section, change `test` to `start`, set it to `nodemon index.js`. `nodemon` is a progam which will run and watch a source file, restarting if there are changes.

```js
  ...
  "scripts": {
    "start": "nodemon index.js"
  },
  ...
```

Now at the command line you should be able to run:

```sh
npm start
```

Again you should see that the screen of the pixel is now blank with a red pixel in the top left.

Edit `index.js`, change `color.red` to `color.yellow` and save, notice that the terminal says something like: `restarting due to changes...` and on the pixel it the color of the pixel in the top left changes from red to yellow.

&nbsp;

### Game State

[pixel-eight][] manages game state via the `init` and `update` functions, which is used to initialize and update the game state which is then passed as the second argument to the `draw` function.

```js
start({
  init: () => {
    return { x: 7, y: 3 };
  },
  draw: (frame, { x, y }) => {
    frame.pset(x, y, color.yellow);
  }
});
```

On saving we should now see the yellow pixel move from the top left to the center of the pixel.

The next post will how to react to the buttons being pressed and changing the game state in the `update` function.

[kano-sdk]: https://github.com/KanoComputing/community-sdk/tree/nodejs
[pixel-kit]: https://kano.me/store/us/products/pixel-kit
[pixel-eight]: https://github.com/thaggie/pixel-eight
[pico-8]: https://www.lexaloffle.com/pico-8.php
[lua]: https://www.lua.org
[node]: https://nodejs.org
