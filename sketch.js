var txt;
var p;
var b;
function preload() {
	txt = loadStrings("test0.txt")
}

function setup() {
<<<<<<< HEAD
	noCanvas();
	p = select("#p");
	b = select("#button");
	
	cI = createInput()
	b.mousePressed(writeinp)

=======
  noCanvas();
  //p = select("#p");
  //p.html(txt);
  p = createP("updated branch");
  p = createP("updated bsranch");
  p.html("updated branch u");
>>>>>>> origin/master
}

function writeinp() {
	p.html(txt)
}