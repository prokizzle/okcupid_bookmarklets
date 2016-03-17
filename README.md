# Bookmarklets

## Next

### When on Messages page

+ looks for `It's a Match` messages. Clicks the first one if found.
+ looks for messages you haven't yet replied to. Clicks the first one if found and above rule is not matched.
+ scrolls to the bottom of the page to load more messages via AJAX and tries both rules again. Repeats.

### When on `It's a Match` message

+ Visits the person's profile

### When on the person's profile page

+ Should open their photos, but it doesn't. Still need to fix that.
+ If the photos are already open, advances through the photos.

```javascript
javascript:var Bookmarklet={injectExternalJS:function(e,t){var a="undefined"!=typeof t?t:"javascript",n=document.createElement("SCRIPT");n.type="text/"+a,n.src=e,document.getElementsByTagName("head")[0].appendChild(n)},loadJS:function(e){for(var t=this,a=0;a<e.length;a++)t.injectExternalJS(e[a])}};Bookmarklet.loadJS(["https://rawgit.com/prokizzle/okcupid_bookmarklets/master/lib/next.js"]);
```
