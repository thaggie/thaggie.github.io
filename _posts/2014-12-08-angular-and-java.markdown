---
layout: post
title:  "Angular & Java"
date:   2014-12-08 12:42:48
---

This post is on using [angularjs][1] with a Java stack, a way to get them hooked together but having a nice clean separation between the client and server code. The example here is how to get this working with [dropwizard][2] but the same pattern can work with other [servlet][4] containers.

The goal here is to have the Java server (on the left) supplying dynamic content / services and a base HTML that loads the client and the js, css, images etc. hosted on a static content server (on the right).

![Dynamic vs Static](/images/dynamic-vs-static.svg)

We want the java to return the base HTML for a number of reasons, first so that we can use proper paths in our client urls rather than #! style `mysite.com/blah/blah` vs `mysite.com#!/blah/blah`. Also it provides us with the ability to choose what client we return - so we can sniff the headers and return a lighter weight client for mobile devices for instance.

So for (pretty much) all url paths we want to return exactly the same HTML, that just loads an angular client that understands what to render based on the path via routing - so something like:

```html
<!DOCTYPE html>
<html>
	<head>
		<link rel='shortcut icon' href='{static-url}/favicon.ico' />
		<meta http-equiv='Content-type' 
			content='text/html; charset=utf-8'/>		
		<link rel='stylesheet' href='{static-url}/css/vendor.css' />
		<link rel='stylesheet' href='{static-url}/css/app.css' />
		<base href="/">
	</head>
	<body>
		<div ui-view></div>
	</body>
	<script type='text/javascript' src='{static-url}/vendor.js'>
	</script>
	<script type='text/javascript' src='{static-url}/bundle.js'>
	</script>
</html>
```

The example HTML is based on a [browserify][10] client build environment - this would vary with other build tools. The [servlet][4] for this HTML is trivial, it can be pretty much be just loaded from a resource have the `{static-url}` bit replaced before sending to the client. 

When working with [dropwizard][2] you're using [JAX-RS][3] to annotate your resource classes to create a REST API 

```java
@Path("/example")
@Produces(MediaType.APPLICATION_JSON)
public class ExampleResource {
    @GET
    @Timed
    public SomeJsonSerializableObject example(
    	@QueryParam("aparam") Optional<String> aparam) {
    	...
        return new SomeJsonSerializableObject(...);
    }
}
```

Now, by default the way [dropwizard][2] is setup the [application][8] [servlet][4] (that serves all the resources) has the path `/*` but what we want is to introduce our own [servlet][4] that's serving the HTML mentioned earlier.

The path for the [application][8] [servlet][4] can be controlled by the [configuration][5] yml file (the name for which depends on varies by [application][8]), the other thing we'll want / need to configure is the url to the static content, in development pointing to a locally running [express][6] server running with a watch on the client files and in production pointing at some sort of cdn or static content server.

```
staticUrl: http://localhost:9000
server:
  rootPath: /api/*
```

So now all the resources of our [Application][8] will be under the `/api/*` path, every other path will return the HTML. 

The final piece is that we need to tell [jersey][7] about our [servlet][4] in our [Application][8] class:

```java
@Override
public void run(ExampleConfig configuration, Environment env) {

	MutableServletContextHandler ac = env.getApplicationContext();
	ServletHolder sh = ac.addServlet(AngularServlet.class, "/*");
    sh.setInitParameter(AngularServlet.URL, configuration.getUrl());
	
	...    	
}
```

Note that we're taking the url from our config and passing it to the [servlet][4] via the [servlet][4]'s initialization parameters.

And there we have it, I've added a demo project to github called [drop-angular][9] that a simple demo of what I've talked about here. I've framed this in terms of [angular][1] as this is the UI framework we're using for my current project but really this should work for any UI toolchain choice and as described would work just fine with anything built with [browserify][10].

[1]:https://angularjs.org
[2]:http://dropwizard.io
[3]:https://jax-rs-spec.java.net
[4]:https://docs.oracle.com/javaee/6/api/javax/servlet/package-summary.html 
[5]:https://dropwizard.github.io/dropwizard/manual/configuration.html
[6]:http://expressjs.com
[7]:https://jersey.java.net
[8]:http://dropwizard.io/manual/core.html#application
[9]:https://github.com/thaggie/drop-angular
[10]:http://browserify.org