
document.write("=== Triangles Through JavaScript ===" + "</br>");

var righttri = "";

for (var i = 1; i < 7; i++) {
    for (var j = i; j <= i; j++) {
        righttri += "*";
    }
    document.write(righttri + "</br>");

}


document.write("=== New Triangle ===" + "</br>");


for (i = 1; i < 7; i++) {
    righttri = "";
    for (j = 7; j > i; j--) {
        righttri += "*";
    }
    document.write(righttri + "</br>");
}

document.write("=== New Triangle ===" + "</br>");

var rows = 5;
var pattern = "";

for (var i = 1; i <= rows; i++) {
    for (var j = rows; j > i; j--) {
        pattern += "\u{2007}";
    }
    for (var k = 1; k <= 2 * i - 1; k++) {
        pattern += "*";
    }
    pattern += "</br>";
}

document.write(pattern);

document.write("=== New Triangle ===" + "</br>");


for (let i = 5; i >= 1; i--) {
    for (let j = 5; j > i; j--) {
        document.write(" &nbsp; ");
    }
    for (let k = 1; k <= 2 * i - 1; k++) {
        document.write("*")
    }
    document.write("</br>")
}