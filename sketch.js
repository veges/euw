var txt;
var p;
function preload() {
  //txt = loadStrings("test0.txt");
}

function setup() {
  noCanvas();
  //p = select("#p");
  //p.html(txt);
  p = createP("updated branch");
  p = createP("updated bsranch");
  p.html("updated branch u");
}
