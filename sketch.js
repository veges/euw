var txt;
var p;
var b;
function preload() {
	txt = loadStrings("test0.txt")
}

function setup() {
	noCanvas();
	p = select("#p");
	b = select("#button");
	
	cI = createInput()
	b.mousePressed(writeinp)

}

function writeinp() {
	p.html(txt)
}
