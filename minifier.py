import re, sys

filename = sys.argv[1]

with open("%s.min.js" % filename[:-len(".js")], "w") as f:
    code = open(filename, "rU").read()
    line = re.sub("\s\s+|\n", " ", code)
    f.write(line)

with open("bookmarklet.html", "w") as f:
    html = ("<h3>Drag this bookmarklet</h3>"
            "<a href='javascript:%s'>Make-Sortable</a>" % line
           )
    f.write(html)
