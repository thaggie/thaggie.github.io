---
layout: post
title:  "Search for a Jekyll website"
date:   2014-11-12 05:42:48
---

These pages are built with [Jekyll](http://jekyllrb.com) as that's how github's gh pages roll. This means that they're statically created by ruby, normally no dynamics means no search however [Ben Howdle](http://benhowdle.im) has just posted an excellent [blog](http://benhowdle.im/creating-a-dynamic-search-page-for-your-jekyll-blog.html) describing how to add search using [Jekyll](http://jekyllrb.com)'s templating and a js [script](https://github.com/benhowdle89/jekyll-search-demo/blob/gh-pages/js/search.js) he's created - which I've just used to add search here.

I updated the `parseQueryFromURL` function to swap `+` for space as `decodeURIComponent` doesn't handle those:

```javascript
params.query = params.query.replace(/\+/g, ' ');
```

This then showed the next problem - it's looking for the exact term so if I search for `react promise` nothing is returned even though I have a post on those two subjects.

This lead me to revise the `scanPosts` function to split up the query, match multiple terms and then stitch the results back together ordered by first the number of matches and then its ordinal as the posts are in date order and I'd expect newer posts to be more relevant - the comments are above the lines of code I've changed ([full source of my search.js](https://github.com/thaggie/thaggie.github.io/blob/master/js/search.js)).

```javascript
var scanPosts = function(posts, properties, query) {

	var results = [],
	// used to store the count and ordinal of 
	// matching posts by their link
	matches = {},
	// used when we iterate over the matches
	match,
	// split the query up into multiple search terms
	terms = query.split(" ");
	// each search term needs its own regular expression
	regexes = terms.map(function(term) {
		return new RegExp(term, "ig");
	});

	posts.forEach(function(post, ordinal) {
		var textToScan = "",
			regex = new RegExp(query, "ig");
			
		properties.forEach(function(property) {
			if (post.hasOwnProperty(property)) {
				textToScan += post[property];
			}
		});

		// for the post check it against all the regexes
		regexes.forEach(function(regex) {
			if (regex.test(textToScan)) {
				if (matches[post.link]) {
					// already matched increment the count
					matches[post.link].count++;
				} else {
					// new match, add a match
					matches[post.link] = {
						count: 1,
						ordinal: ordinal,
					};
				}
			}
		});
	});

	// add all the matches into the results array
	for (match in matches) {
		if (matches.hasOwnProperty(match)) {
			results.push(matches[match]);
		}
	}

	// sort all the matches by their count then ordinal
	results.sort(function (l, r) {
		if (l.count > r.count) {
			return -1;
		}
		if (l.count < r.count) {
			return 1;
		}
		if (l.ordinal > r.ordinal) {
			return 1;
		}
		if (l.ordinal < r.ordinal) {
			return -1;
		}
		return 0;
	});

	// convert the results from matches to posts
	results = results.map(function(match) {
		return posts[match.ordinal];
	});

	return results;
};
```