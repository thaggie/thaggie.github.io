!(function() {

	var parseQueryFromURL = function() {
		
		var searchQuery = window.location.search;
		if (!searchQuery) {
			return null;
		}

		var regex = /[?&]([^=#]+)=([^&#]*)/g,
			params = {},
			match;
		while (match = regex.exec(searchQuery)) {
			params[match[1]] = match[2];
		}

		if (!params.hasOwnProperty("query")) {
			return null;
		}

		params.query = params.query.replace(/\+/g, ' ');

		return decodeURIComponent(params.query);

	};
	

	var scanPosts = function(posts, properties, query) {

		var results = [],
		// used to store the count and ordinal of matching posts by their link
		matches = {},
		// used when we iterate over the matches
		match,
		// split the query up into multiple search terms
		terms = query.split(" ");
		// each search term needs its own regular expression
		regexes = terms.map(function(term) {
			return new RegExp(term, "ig");
		});

		// add the original query in so that exact matches get 
		// an extra count and so rise to the top
		regexes.push(new RegExp(query, "ig"));

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

		// sort all the matches by their count and ordinal
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
		results = results.map(function(match){
			return posts[match.ordinal];
		});

		return results;

	};

	var outputResults = function(query, results, el) {

		var frag = document.createDocumentFragment();
		var pageTitle = document.createElement("h1");
		pageTitle.appendChild(document.createTextNode("Search results for \"" + query + "\""));
		frag.appendChild(pageTitle);
		results.forEach(function(result) {

			var div = document.createElement("div");
			div.className = "search-result";

			var title = document.createElement("h2");
			var link = document.createElement("a");
			link.href = result.link;
			link.appendChild(document.createTextNode(result.title));
			title.appendChild(link);

			div.appendChild(title);

			frag.appendChild(div);

		});

		el.appendChild(frag);

	};

	var Search = function(options) {

		options = options || {};
		
		if (!options.selector) {
			throw new Error("We need a selector to find");
		}

		this.el = document.querySelector(options.selector);
		if (!this.el) {
			throw new Error("We need a HTML element to output to");
		}

		this.posts = JEKYLL_POSTS;
		if (!this.posts) {
			return this.el.appendChild(document.createTextNode(this.noResultsMessage));
		}


		var defaultProperties = ["title"];
		this.properties = options.properties || defaultProperties;

		this.query = parseQueryFromURL();
		
		if (!this.query) {
			return this.el.appendChild(document.createTextNode("No search terms specified."));
		}

		this.results = scanPosts(this.posts, this.properties, this.query);
		
		if (!this.results.length) {
			return this.el.appendChild(document.createTextNode("No results found for \"" + this.query + "\""));
		}

		outputResults(this.query, this.results, this.el);

	};

	window.jekyllSearch = Search;
})();