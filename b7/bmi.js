function ChisoIBM() {
let chieucao = document.getElementById("chieucao").value;
let cannang = document.getElementById("cannang").value;
let ibm = Number(cannang)/(Number(chieucao)^2);
if (ibm < 18)
document.write("Underweight");
else if (ibm < 25.0) {
document.write("Normal");
}
    else if (ibm < 30.0) {
document.write("Overweight");
    }
else {
    document.write("Obese");
}
}

