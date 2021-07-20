import createDiv from "./test-utils.js";

import $ from "jquery";
// or
// const $ = require("jquery");

createDiv("jquery");
$("#jquery").text("Output from jQuery")
	.css("font-family", "Century Gothic").css("font-size", "200%");