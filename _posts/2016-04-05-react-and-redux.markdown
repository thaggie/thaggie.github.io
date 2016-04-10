---
layout: post
title:  "React and Redux"
date:   2016-04-05 10:01:48
---

I've been using [react] and [redux] for a few months now and a few things that initially bothered me about the [examples](http://redux.js.org/docs/advanced/ExampleRedditAPI.html) and how they use [react-redux] have made me decide to switch away from using [react-redux].

The key issue I encountered is that the state passed by [connect](https://github.com/reactjs/react-redux/blob/master/docs/api.md#connectmapstatetoprops-mapdispatchtoprops-mergeprops-options) is the global state, this makes [Smart Components][smart-components] (those that access the application state and can dispatch actions) brittle when it comes to changes (at authoring time) to the application state.

``` js
function mapStateToProps(state) {
  const { selectedSubreddit, postsBySubreddit } = state
  const {
    isFetching,
    lastUpdated,
    items: posts
  } = postsBySubreddit[selectedSubreddit] || {
    isFetching: true,
    items: []
  }

  return {
    selectedSubreddit,
    posts,
    isFetching,
    lastUpdated
  }
}
```
[source](http://redux.js.org/docs/advanced/ExampleRedditAPI.html#-containers-asyncapp-js)

So for instance if you were to try to introduce [undo / redo](https://github.com/omnidan/redux-undo) as a wrapping reducer all your [smart components][smart-components] will need to be modified to cope with the changes to where in the state their business properties are.

So the line would need changing to something like this:

```
const { selectedSubreddit, postsBySubreddit } = state.present
```

Similarly by embedding asynchronous calls in the actions where again the `getState` function of [redux-thunk] returns the global application state makes the code brittle to changes and awkward for unit testing when you're wanting to test the reducer / actions in isolation from the usage environment (the state paths will be wrong).

Also if you want to re-use any of these [Smart Components][smart-components] or asynchronous action factories in other projects you're out of luck it the state paths aren't identical.

## redux-loop fixes everything

[redux-loop] is a library inspired by [elm-effects] of the [The Elm Architecture](https://github.com/evancz/elm-architecture-tutorial) (which was part of the inspiration for [redux] in the first place).

Here's the code ripped out of the [redux-loop README.md][redux-loop]

``` js
export default function reducer(state, action) {
  switch (action.type) {
    case 'LOADING_START':
      return loop(
        { ...state, loading: true },
        Effects.promise(fetchDetails, action.payload.id)
      );

    case 'LOADING_SUCCESS':
      return {
        ...state,
        loading: false,
        details: action.payload
      };

    case 'LOADING_FAILURE':
      return {
        ...state,
        loading: false,
        error: action.payload.message
      };

    default:
      return state;
  }
}
```

[source](https://github.com/raisemarketplace/redux-loop#write-a-reducer-with-some-effects)

In responding to the `LOADING_START` [action][actions] rather than just returning the state it is now returning state wrapped up in a "loop" with an effect (they can be batched for multiple effects) which is created from a pure function that returns a promise which will in turn return the action to perform the state change (so either `LOADING_SUCCESS` or `LOADING_FAILURE`). These effects are applied only after all the reducers in the state tree have done their work - keeping everything immutable.

This has the added advantage that all the actions now become just plain declarative objects, no functions which means they can now be recorded and played back (think modern [clippy](http://introjs.com)) - back to one of the things first appealed to me about [redux].

## redux-loop breaks everything

Interestingly (I haven't worked out why yet) when using [redux-loop], [react-redux] stopped pushing changes to connected ([smart][smart-components]) components.

Since [subscribing][subscribe] to the store still worked perfectly I was able to use [subscribe]  / [getState][get-state] to literally set the state of my application and then pass everything down following the more natural and less brittle technique of passing the state and actions through to child-components in their properties - again back to one of the things first appealed to me about [react].

And so everything works again, everything feels less hacky and the codebase is now a little smaller having taken out the boiler plate associated with [react-redux] and asynchronous [actions].

`\o/`

[react]: https://facebook.github.io/react
[redux]: https://github.com/reactjs/redux
[react-redux]: https://github.com/reactjs/react-redux
[redux-thunk]: https://github.com/gaearon/redux-thunk
[smart-components]: https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0#.fco4soy3q
[redux-loop]: https://github.com/raisemarketplace/redux-loop
[elm-effects]: https://github.com/evancz/elm-effects
[actions]: http://redux.js.org/docs/basics/Actions.html
[subscribe]: http://redux.js.org/docs/api/Store.html#subscribe
[get-state]: http://redux.js.org/docs/api/Store.html#getState
