---
layout: doc
title:  "Gang of Four Patterns"
date:   2014-09-29 11:12:48
---

These pages are putting the [Design Patterns: Elements of Reusable Object-Oriented Software][gof] book into my own words as a form of revision. The book was written by Erich Gamma, Richard Helm, Ralph Johnson and John Vlissides as such it's often refered to as the Gang of Four Design Patterns book. The concept of patterns was originally developed by Christopher Alexander in his book [A Pattern Language: Towns, Buildings, Construction][APatternLanguage]. A pattern language provides a well known set of names for common practices that aid's communication as people have shared understanding of their meaning and implementation.

## Creational Patterns

### [Abstract Factory](creational/abstract-factory.html)

It's useful for being able to swap in other implementations of behaviour, such as mocking, different types of storage or different user interface implementations.

### [Builder](creational/builder.html)

This pattern is overloaded [GOF][gof] definition is different from how it tends to be used in the wild.

### [Factory Method](creational/factory-method.html)

This allows you to return different sub-classes if needed and to do more prepration work before creating the desired class - for instance if there's something that might fail and needs handling with alternatives which would mean switching between different constructors.

### [Prototype](creational/prototype.html)

### [Singleton](creational/singleton.html)


## Structural Patterns

### Bridge

### Composite

### Decorator

### Facade

### Flyweight

### Proxy


## Behavioural Patterns

### Chain of Responsibility

### Command 

### Interpretor

### Iterator

### Mediator

### Memento

### Observer

### State

### Strategy

### Visitor

[gof]: http://www.amazon.com/Design-Patterns-Elements-Reusable-Object-Oriented/dp/0201633612

[APatternLanguage]: http://www.amazon.com/Pattern-Language-Buildings-Construction-Environmental/dp/0195019199