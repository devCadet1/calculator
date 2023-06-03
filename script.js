function add () {
    let n1 = document.getElementById('num1').value
    let n2 = document.getElementById('num2').value
    let N1 = Number(n1);
    let N2 =Number(n2);

    const result = N1 + N2;

    document.getElementById('res').innerHTML = "Result: " +result;

    console.log(typeof n1);
    
}

function sub () {
    let n1 = document.getElementById('num1').value
    let n2 = document.getElementById('num2').value
    let N1 = Number(n1);
    let N2 =Number(n2);

    const result = N1 - N2;

    document.getElementById('res').innerHTML = "Result: " +result;
}

function mul () {
    let n1 = document.getElementById('num1').value
    let n2 = document.getElementById('num2').value
    let N1 = Number(n1);
    let N2 =Number(n2);

    const result = N1 * N2;

    document.getElementById('res').innerHTML = "Result: " +result;
}

function div() {
    let n1 = document.getElementById('num1').value
    let n2 = document.getElementById('num2').value
    let N1 = Number(n1);
    let N2 =Number(n2);

    const result = N1 / N2;

    document.getElementById('res').innerHTML = "Result: " +result;
}