---
layout: gof
title:  "Abstract Factory"
date:   2014-09-29 11:12:48
---

This is a class / interface that is used for creating objects of another particular class / interface. It gives us the ability to inject different implementations at construction time.

``` Java
public interface Foo {
    public void bar();
}

public interface FooFactory {
    public Foo createFoo();
}
```

It's useful for being able to swap in other implementations of behaviour, such as mocking, different types of storage or different user interface implementations.

Below is an example of how this can work in Java, the factory is passed at construction time to the class that needs it:

``` Java
public class AClassThatNeedsToCreateAFoo {
    private final FooFactory fooFactory;

    public AClassThatNeedsToCreateAFoo(FooFactory fooFactory) {
        this.fooFactory = fooFactory;
    }

    public void aMethodThatUsesAFoo() {
        Foo foo = fooFactory.createFoo();
        foo.bar();
    }
}
```

Alternatively it may be that the class just contructs it's own `Foo` at construction time:

``` Java
public class AClassThatNeedsToCreateAFoo {
    private final Foo foo;

    public AClassThatNeedsToCreateAFoo(FooFactory fooFactory) {
        this.foo = fooFactory.createFoo();
    }
}
```
