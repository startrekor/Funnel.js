# Funnel.js

Write functions that accept flexible arguments using a powerful signature syntax. Clean up the arguments before they get to your function using filters.

Have a look:

```javascript
this.setSize = Funnel
	("width: number, height: number?, units: string?")
	.default(function height(width) {
		return width;
	})
	.in("units", ["px", "em"])
	.set(["width", "height"], function(units) {
		return this() + units;
	})
(function(width, height) {
	this.style.width = width;
	this.style.height = height;
});
```

`setSize` will accept one to three arguments, and map them automatically. If `height` isn't passed, it will default to the same value as `width`. If `units` is omitted, or isn't either “px” or “em”, it will be set to “px”. Finally, the unit is appended to the sizes before they are passed to the actual function.

You probably guessed most of this simply by reading the code; that's half of the point of Funnel.js. Not only can you easily write powerful argument triaging, but the end result will actually be a lot more readable that any code written just for a function. With a quick glance at the function signature string, you'll know exactly what the function expects. Neat!

## Getting started

The code snippet above should give you a pretty good idea of how Funnel.js works. You should then read the [Overview](documentation/Overview.js), which will give you a quick tour of Funnel's signature syntax and filter functions.

If you want detailed information, have a look at the comprehensive documentation: [Using Funnel](documentation/Using%20Funnel.md), [Signature syntax](documentation/Signature%20syntax.md), and [Using filter functions](documentation/Using%20filter%20functions.md).

## Download

You can download the [latest release version][release_download] of Funnel.js, or download the [uncompressed version][dev_download] for easier development.

[release_download]: http://cykeprojects.com/libraries/funnel/latest.min
[dev_download]: http://cykeprojects.com/libraries/funnel/latest

## Caveats

- **Doesn't this impact performance?**  
  Yes, it does. Funnel.js introduces some overhead, and you probably shouldn't funnel performance-critical functions. Funnel.js is best suited for exposing APIs when you write your own libraries.
- **Doesn't minification interfere with injection?**  
  Yup. To counter that, you can add hints to your injection-ready functions. Read [Using injection with minifiers](documentation/Using%20injection%20with%20minifiers.md) for more information.
