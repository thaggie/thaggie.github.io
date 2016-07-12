---
layout: post
title:  "React Safe Actions"
date:   2016-07-08 1:10:48
---


There's a notion of the [Flux Standard Action][fsa] where an action has a type,
payload and optionally an error flag (where the payload is the error / exception).

For example:

```json
{
  "type": "ADD_TODO",
  "payload": {
    "text": "Do something."  
  }
}
```

One thing I've found with [flux] is that sometimes it's tricky to track down an
error due to the dispatcher separating the view from the stores, a problem with
the payload in the action causes an error to occur in the reducer but you have
to trace back through to see what caused the payload to be problematic.

[React] components allow you to specify a schema for their properties via the
propTypes attribute, which results in warnings being written to the console for
transgressions.

```js
var MyComponent = React.createClass({
  propTypes: {
    foo: React.PropTypes.string.isRequired
  },

  render: function() {
    return (
      <div>
        {this.props.foo} // This must be a string or it will warn.
      </div>
    );
  }
});
```

So my idea here is to re-use [react]'s [PropTypes] to use them to specify a
schema for action payloads, so you can express an action in the form:

```js
var rsa = require('react-safe-actions');

var myAction = rsa.create('MY_ACTION_TYPE', {
  foo: rsa.types.string.isRequired,
  bar: rsa.types.number
});
```

This is creating a function which will in turn create the actions. The function
will check the payload passed in to make sure it conforms to the schema passed
in (unless `NODE_ENV` is `production`), so catching the error **before**
generating the action. The function will return a [flux standard action][fsa].

```js
var action1 = myAction(); // BAD
var action2 = myAction({foo: 'ok'}); // OK
var action3 = myAction({foo: 'fail', bar: 'not a number'}); // BAD
var action4 = myAction({foo: 'ok', bar: 21}); // OK
var action5 = myAction(new Error('Yikes!')); // OK
````

There's a special case for actions that take only one argument, it's just passed
to the action function:

```js
var myAction = rsa.create('MY_ACTION_TYPE', {
  foo: rsa.types.string.isRequired
});

var action2 = myAction('ok');
// { type: 'MY_ACTION_TYPE', payload: {foo: 'ok'} }
```

It's only 40 or so lines of code but I've still put the [source] up on [github]
and published a module to [npm] as I think others may find it useful.

I've updated the [redux][redux] [ToDo MVC][todomvc] example app, to show how the
library works in practice, you can see the change list [here][todo-changes].

When I first made the changes I made a mistake, with source maps turned on this
how the error looks in the console:



![Error: Required prop `id` was not specified in `EDIT_TODO`.](/images/react-safe-actions-error-log.png)

You can see that it's reporting which property is missing from which action and
with source maps enabled we can see the exact line where the problem is (Line
21 of TodoItem.js).

So in the example I hadn't switched the `editTodo` call over to the options
style method invocation.

```
this.props.editTodo(id, text)
```

Needed to become:

```
this.props.editTodo({ id, text })
```

[fsa]: https://github.com/acdlite/flux-standard-action
[flux]: https://facebook.github.io/flux/docs/overview.html
[react]: https://facebook.github.io/react
[PropTypes]: https://facebook.github.io/react/docs/reusable-components.html#prop-validation
[cheats]: http://ricostacruz.com/cheatsheets/react.html#property-validation
[source]: https://github.com/thaggie/react-safe-actions/blob/master/src/index.js
[github]: https://github.com/thaggie/react-safe-actions
[npm]: https://www.npmjs.com/package/react-safe-actions
[redux]: http://redux.js.org/
[todomvc]: http://todomvc.com/
[todo-changes]: https://github.com/thaggie/redux/commit/67e3e87762d254acffdaf7ac949253286074efc8
