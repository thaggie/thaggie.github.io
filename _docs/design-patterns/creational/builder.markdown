---
layout: gof
title:  "Builder"
date:   2014-09-29 11:12:48
---

The builder pattern has 2 variants, the one defined in [GOF][gof] is about being able to swap in building different sorts of things from one set of code. The second type of builder pattern is used to build complex but immutable objects. Immutablility is desirable in software as it means that the object can be shared between threads knowing that it won't cause any interaction between the two threads, working with immutable data-structures also means that things tend to work in terms of "pure-functions" that is the output is wholely determined by the input values and that those input values are not modified, this makes code easier to reason about.

## The [GOF][gof] Builder



## The other one
This is where you employ a mutable class to build up the state for creating an immutable one. Sometimes a class needs a lot of data passing to it. Often times said builders are created as a *fluent* interface, that is   

``` Java
// Java's StringBuilder is about as trivial as they come
StringBuilder sb = new StringBuilder();
sb.append("Here ");
sb.append("we're ");
sb.append("mutating ");
sb.append("an ");
sb.append("object.");
String thisObjectCantBeChanged = sb.toString();
```


[gof]: http://www.amazon.com/Design-Patterns-Elements-Reusable-Object-Oriented/dp/0201633612
