---
layout: post
title:  "Page Shaver"
date:   2014-12-30 22:42:48
---

[Laura Kalbag](https://twitter.com/laurakalbag) usually writes about [accessibility](http://laurakalbag.com/tag/accessibility/) and [ind.ie](https://ind.ie/about/manifesto/), this-morning she wrote a [tweet](https://twitter.com/laurakalbag/status/549885194732589056) about a problem we all have from time to time, trying to read a page with a whole bunch of distracting things around the edges - even overlaying stuff over the top. A while ago I decided I'd had enough with pecking around in [Chrome Dev tools](https://developer.chrome.com/devtools) removing junk from blogs etc. and made a little bookmarklet that tries to do this for me - which has sat on my various browser's bookmark bars ever since.

So this-evening I moved it up to [github](https://github.com/thaggie/page-shaver) to make is sharable. I prefer it to ad-blockers as I know it's not doing anything nefarious and I get to tweek it when it fails me. Being on github means that where it fails you you can submit [pull requests](https://github.com/thaggie/page-shaver/pulls) or create [issues](https://github.com/thaggie/page-shaver/issues).

Just drag the link below to your bookmarks bar and then click on it improve the readability of the page:

<div style="text-align: center; ">
<a style="background-color: #EEE;border: 1px solid #999; border-radius: 4px; padding: 4px 8px; box-shadow: 5px 5px 5px #888;" href="javascript:(function(){var%20tag%20=%20document.createElement('script');tag.setAttribute('type','text/javascript');tag.setAttribute('src','//rawgithub.com/thaggie/page-shaver/master/ps.js');document.head.appendChild(tag);})();">Shaver</a>
</div>

You can just click on it to test it on this page (not very exciting as these pages are already fairly minimal). It worked without modification on the site that kicked this off: [The Definitive Guide to Web Character Encoding](http://www.sitepoint.com/guide-web-character-encoding)