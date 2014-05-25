---
layout: post
title:  "React & Promises"
date:   2014-05-25 01:36:48
categories:
---

This is a short post on using Facebook's [React](1) with [Promises](2). I'm in the process of creating a simple App using [React](1) which makes use of [Promises](2) for long running operations, what I've found is that if I get bored while they're running and navigate away to a different area of the App when the promise gets fulfilled I get errors in [React](1) as it's trying to update state on a now unmounted component.

```
Error: Invariant Violation: replaceState(...): Can only update a mounted or mounting component.
```

[Promises](2) don't have an unsubscribe method so you can't keep a reference to a promise and unsubscribe to it when the component's mounted. So the approach I've taken is to have a flag to indicate whether or not a component is mounted.

It could be argued that a better solution would be to move from using [Promises](2) to using [Reactive Extensions](3) (This is entirely unrelated to [React](1)) where one can unsubscribe. Also that would provide a mechanism for propogating progress information too - but it's not a change I'm wanting to make at this stage - so on to the band-aids.

Since I had a bunch of places I needed to do the same thing it seemed like making a mixin for it would be the way forward.

Here's the code:

```
var ComponentIsMountedMixin = {
	componentWillMount: function() {
		this.componentIsMounted = false;
  	},
	componentDidMount: function() {
		this.componentIsMounted = true;
  	},
	componentWillUnmount: function() {
		this.componentIsMounted = false;
	}, 
	safeSetState: function(newState) {
		if (this.componentIsMounted) {
			this.setState(newState);
		}
	}
};
```

The mixin's version of the lifecycle methods get called before the component's so the flag is ready for use in the component making use of them.

I've created a [gist](4) which shows how this works, I've used a timeout as a proxy for a call that returns a promise.

[1]: http://facebook.github.io/react
[2]: https://www.promisejs.org
[3]: http://reactive-extensions.github.io/RxJS/
[4]: https://gist.github.com/thaggie/aed336e9e67be4696002