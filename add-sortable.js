var makeSortable = function(tables) {
    for (var i=0, length=tables.length; i<length; i++) {
        tables[i].className = tables[i].className + " sortable";
    }
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "http://www.kryogenix.org/code/browser/sorttable/sorttable.js";
    document.getElementsByTagName("head")[0].appendChild(script);
};

var tables = document.getElementsByTagName("table");
if (!tables.length) {
    alert("No table to sort");
} else {
    makeSortable(tables);
}
