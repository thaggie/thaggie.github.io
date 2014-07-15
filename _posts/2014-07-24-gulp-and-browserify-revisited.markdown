---
layout: post
title:  "Gulp & Browserify Revisited"
date:   2014-07-14 22:50:48
---

In my previous post I wrote about [React, Browserify & Gulp](/2014/06/20/react-and-gulp.html) since it was written [gulp-browserify][] has been [blacklisted](https://github.com/deepak1556/gulp-browserify#note-this-plugin-has-been-blacklisted) and [browserify][] has announced a [security notice](https://github.com/substack/node-browserify/blob/master/changelog.markdown#421) around one of its dependencies - syntax-error. 

So in reaction I've modified my build to use browserify directly and pipe it to gulp using [vinyl-source-stream][].

Removed the rot:

```
npm uninstall gulp-browserify --save-dev
```

Installed [vinyl-source-stream][] and [browserify][]:

```
npm install browserify --save-dev
npm install vinyl-source-stream --save-dev
```

Updated the `package.json` file to tell browserify to use the [reactify][] transformer (note that this was previously done in the gulp file task generator):

```
  "browserify": { 
    "transform": [ "reactify" ] 
  }
```  

Added depenencies on [vinyl-source-stream][] and [browserify][] to the `gulpfile.js`:

```
var browserify = require('browserify');
var source = require('vinyl-source-stream');
```

The updated task generator function:

```
var createJsxTask = function(component) {
  return function () {
    return browserify('./components/' + component + '.jsx')
    .bundle().pipe(source(component + '.js'))
    .pipe(gulp.dest('dist'));
  };
};
```


[browserify]: http://browserify.org
[gulp-browserify]: https://github.com/deepak1556/gulp-browserify
[gulp]: http://gulpjs.com
[reactify]: https://github.com/andreypopp/reactify
[vinyl-source-stream]: https://github.com/hughsk/vinyl-source-stream