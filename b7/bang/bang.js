let html = "";
for (let i = 2; i<=10;i++) {
    html += "<tr>";
    for (let j=2;j<=9;j++) {
         html += "<td>";
         html += j + "x" + i + "=" + i*j
         html += "</td>";
    }
         html += "</tr>"
}
document.getElementById(elementld="main").innerHTML = html
