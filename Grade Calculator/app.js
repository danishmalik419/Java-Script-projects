function calculate() {
    let OS = parseFloat(document.getElementById("OS").value);
    let DS = parseFloat(document.getElementById("DS").value);
    let M = parseFloat(document.getElementById("M").value);
    let J = parseFloat(document.getElementById("J").value);

    let sum = OS + DS + M + J;
    document.getElementById("demo1").innerHTML = `Total marks is = ${sum}`;

    let percentage = (sum / 400) * 100;
    document.getElementById("demo2").innerHTML = `Your percentage is ${percentage.toFixed(2)}%`;

    if (percentage >= 80) {
        document.getElementById("demo3").innerHTML = `Excellent`;
    } else if (percentage >= 60) {
        document.getElementById("demo3").innerHTML = `Very Good`;
    } else if (percentage >= 35) {
        document.getElementById("demo3").innerHTML = `Please Do Hard Work`;
    } else {
        document.getElementById("demo3").innerHTML = `You Are Fail`;
    }
}