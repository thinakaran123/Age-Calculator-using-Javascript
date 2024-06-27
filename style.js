// color declare
// ### Primary

const purple = "hsl(259, 100%, 65%)";
const lightred = "hsl(0, 100%, 67%)";

// ### Neutral

const White = "hsl(0, 0%, 100%)";
const Offwhite = "hsl(0, 0%, 94%)";
const Lightgrey = "hsl(0, 0%, 86%)";
const Smokeygrey = "hsl(0, 1%, 44%)";
const Offblack = "hsl(0, 0%, 8%)";

//font weights
const smallfontweight = "400i";
const mediumfontweight = "700";
const largefontweight = "800";

//font
const font = "Poppins, sans-serif";

// Ensure the DOM is fully loaded before applying styles
document.addEventListener("DOMContentLoaded", function () {
  // Access the root element (documentElement)
  var root = document.documentElement;

  // Apply styles

  root.style.padding = "0";
  root.style.margin = "0";
  root.style.boxSizing = "border-box";
});

sec = document.getElementsByTagName("section")[0];
sec.style.height = "100vh";
sec.style.display = "flex";
sec.style.justifyContent = "center";
sec.style.alignItems = "center";
//innerborder
innerborder = document.getElementById("innerborder");
innerborder.style.paddingTop = "30px";
innerborder.style.paddingBottom = "30px";
innerborder.style.paddingLeft = "10px";
innerborder.style.paddingRight = "10px";
innerborder.style.display = "flex";
innerborder.style.gap = "20px";

innerborder.style.alignItems = "space-around";
innerborder.style.flexDirection = "column";
//apply color to body and outercontainer
var body = document.getElementsByTagName("body")[0];
var outercontainer = document.getElementById("outercontainer");
outercontainer.style.width = "min(500px,80%)";

body.style.backgroundColor = Offwhite;
body.style.fontFamily = font;
body.style.fontWeight = smallfontweight;
outercontainer.style.backgroundColor = White;

outercontainer.style.borderRadius = "20px";
outercontainer.style.borderBottomRightRadius = "25%";
//app color to day mon year at the top

// Select the parent element with ID "input_for_date"
var parentElement = document.getElementById("input_for_date");

// Select all <p> elements within the parent element
var pElements = parentElement.querySelectorAll("p");

// Iterate over each <p> element and set the background color to red
pElements.forEach(function (p) {
  p.style.color = Smokeygrey;
  p.style.fontSize = "12px";
  p.style.textTransform = "uppercase";
});

//input boxes
document.getElementById("input_for_date").style.display = "flex";
document.getElementById("input_for_date").style.justifyContent = "space-around";
document.getElementById("input_for_date").style.width = "100%";

//p element inside the input tab
pelementsofinputtab = document
  .getElementById("input_for_date")
  .querySelectorAll("p");
pelementsofinputtab.forEach((a) => (a.style.fontWeight = "600"));

boxesofinputtab = document
  .getElementById("input_for_date")
  .querySelectorAll("div");
boxesofinputtab.forEach(
  (a) => ((a.style.width = "26%"), (a.style.height = "10%"))
);

inputbox = document.querySelectorAll("input");
inputbox.forEach(
  (a) => (
    (a.style.width = "100%"),
    (a.style.height = "40px"),
    (a.style.marginTop = "-8px"),
    (a.style.border = "solid"),
    (a.style.borderWidth = "2px"),
    (a.style.borderRadius = "10px"),
    (a.style.borderColor = Lightgrey),
    (a.style.placeholderColor = "red"),
    (a.style.fontSize = "1.5rem"),
    (a.style.fontWeight = "700"),
    (a.style.textAlign = "center")
  )
);
//error msgs for inputbox
//error for daybox
errormsg1 = document.getElementById("daybox").nextElementSibling;
errormsg2 =
  document.getElementById("daybox").nextElementSibling.nextElementSibling;
errormsg1.style.display = "none";
errormsg1.style.color = lightred;
errormsg1.style.fontStyle = "italic";
errormsg1.style.width = "100%";
errormsg1.style.fontSize = "14px";
errormsg2.style.display = "none";
errormsg2.style.color = lightred;
errormsg2.style.fontStyle = "italic";
errormsg2.style.width = "100%";
errormsg2.style.fontSize = "14px";

//error for monthbox
errormsg3 = document.getElementById("monthbox").nextElementSibling;
errormsg4 =
  document.getElementById("monthbox").nextElementSibling.nextElementSibling;
errormsg3.style.display = "none";
errormsg3.style.color = lightred;
errormsg3.style.fontStyle = "italic";
errormsg3.style.width = "100%";
errormsg3.style.fontSize = "14px";
errormsg4.style.display = "none";
errormsg4.style.color = lightred;
errormsg4.style.fontStyle = "italic";
errormsg4.style.width = "100%";
errormsg4.style.fontSize = "14px";

//error for yearbox
errormsg5 = document.getElementById("yearbox").nextElementSibling;
errormsg6 =
  document.getElementById("yearbox").nextElementSibling.nextElementSibling;
errormsg5.style.display = "none";
errormsg5.style.color = lightred;
errormsg5.style.fontStyle = "italic";
errormsg5.style.width = "100%";
errormsg5.style.fontSize = "14px";
errormsg6.style.display = "none";
errormsg6.style.color = lightred;
errormsg6.style.fontStyle = "italic";
errormsg6.style.width = "100%";
errormsg6.style.fontSize = "14px";

//arrow img section
document.getElementById("arrowimgsection").style.display = "flex";

const firstImg = document
  .getElementById("arrowimgsection")
  .querySelector("img");

if (firstImg) {
  firstImg.style.backgroundColor = purple;
  firstImg.style.width = "30px";
  firstImg.style.borderRadius = "50%";
  firstImg.style.padding = "10px";
}

//hr line
const hrelement = document
  .getElementById("arrowimgsection")
  .querySelectorAll("span");

hrelement.forEach((a) => {
  a.style.width = "40%";
  a.style.alignSelf = "center";
  a.style.borderTopWidth = "1px";
  a.style.borderTopColor = Lightgrey;
  a.style.borderStyle = "solid";
  a.style.borderBottom = "none";
  a.style.borderLeft = "none";
  a.style.borderRight = "none";
});

//last display section
lastsection = document.getElementById("lastdisplaysection");

lastsection.querySelectorAll("p").forEach((a) => {
  a.style.fontSize = "3rem";
  a.style.fontStyle = "italic";
  a.style.fontWeight = largefontweight;
  a.style.marginTop = "0";
  a.style.marginBottom = "0";
});

lastsection.querySelectorAll("span").forEach((a) => {
  a.style.color = purple;
});

//active states
inputelements = document.querySelectorAll("input");

inputelements.forEach((inputelements) => {
  inputelements.addEventListener("input", function () {
    inputelements.style.outline = "none";
    inputelements.style.borderColor = purple;
  });
});

inputelements.forEach((inputelements) => {
  inputelements.addEventListener("blur", function () {
    inputelements.style.borderColor = Lightgrey;
  });
});

firstImg.addEventListener(
  "mouseover",
  () => (firstImg.style.backgroundColor = Offblack)
);
firstImg.addEventListener(
  "mouseout",
  () => (firstImg.style.backgroundColor = purple)
);

//media queries
// Define a media query
const mediaQuery500 = window.matchMedia("(min-width: 500px)");

// Function to handle media query changes
function handleMediaQueryChange(event) {
  if (event.matches) {
    document.getElementById("arrowimgsection").firstElementChild.style.width =
      "100%";
    document.getElementById("arrowimgsection").lastElementChild.style.width =
      "0";
    innerborder.style.paddingRight = "30px";
    innerborder.style.paddingLeft = "30px";
  } else {
    document.getElementById("arrowimgsection").firstElementChild.style.width =
      "40%";
    document.getElementById("arrowimgsection").lastElementChild.style.width =
      "40%";

    innerborder.style.paddingLeft = "20px";
  }
}

// Add the listener to the media query
mediaQuery500.addEventListener("change", handleMediaQueryChange);

// Initial check
handleMediaQueryChange(mediaQuery500);

//author
author = document.getElementsByClassName("attribution")[0];
author.style.fontSize = "13px";
author.style.textAlign = "center";
