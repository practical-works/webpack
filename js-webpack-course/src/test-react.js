import React from "react";
import { render } from "react-dom";
import createDiv from "./test-utils.js";

createDiv("reactjs");
document.querySelector("#reactjs").style.backgroundColor = "#AAA";
document.querySelector("#reactjs").style.border = "1px solid gray";
document.querySelector("#reactjs").style.padding = "100px";
document.querySelector("#reactjs").style.fontFamily = "Free Pixel";
const Welcome = () => {
	return (
		<div>
			<div id="image">
				<div style={{fontSize: "150%", backgroundColor: "yellow"}}>
					ReactJS
				</div>
			</div>
			<h1>Output from ReactJS</h1>
		</div>
	);
};
render(<Welcome />, document.querySelector("#reactjs"));