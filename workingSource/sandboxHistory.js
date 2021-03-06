var generated = FunnelInstanceSignaturePattern("firstname: string, surname: string, age: number");

console.log(generated(["Nathan", "Manceaux-Panot", 20]));



echoName = Funnel
	("firstname: string, surname: string")
(function(firstname, surname) {
	console.log(firstname + ", " + surname);
});

echoName("John", "Doe");



testFunc = Funnel
	("success: boolean, test: flat!")
	("failure: any, test: any")
(function(test, success) {
	if (success) {
		console.log("#" + test);
	} else {
		console.log("%" + test);
	}
});

testFunc(true, {});
testFunc(true, []);
testFunc(true, new Date());
testFunc(true, "yay");
testFunc(true, 32);
testFunc(true, -32);
testFunc(true, -3.32);
testFunc(true, Number.POSITIVE_INFINITY);
testFunc(true, NaN);
testFunc(true, undefined);
testFunc(true, null);
testFunc(true, "hello");
testFunc(true, true);
testFunc(true, false);
testFunc(true, function() {});
testFunc(true, window);



setSize = Funnel
	("width: number, height: number?, units: string?")
	.default("height", function(width) {
		return width;
	})
	.in("units", ["px", "em"])
	.set(["width", "height"], function(units) {
		return this() + units;
	})
(function(width, height) {
	console.log(width);
	console.log(height);
})

setSize(48, "em");

