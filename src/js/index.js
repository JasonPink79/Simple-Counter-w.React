//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import { SimpleCounter } from "./component/counter.js";
let counter = 0;

setInterval(() => {
	// first: calculate all digits
	let one = Math.floor(counter / 1);
	let two = Math.floor(counter / 10);
	let three = Math.floor(counter / 100);
	let four = Math.floor(counter / 1000);
	// next thing:  render the counter component
	ReactDOM.render(
		<SimpleCounter one={one} two={two} three={three} four={four} />,
		document.querySelector("#app")
	);
	// last thing: increment the counter (the idea is that 17 pertains to the component and 18 is about the variable)
	counter++;
	console.log(counter);
}, 1000);

//render your react application
