

function changeColor(){
    let red = document.getElementById('rangeRed').value;
    let green = document.getElementById('rangeGreen').value;
    let blue = document.getElementById('rangeBlue').value;
    let color = 'rgb(' + red + ',' + green + ',' + blue + ')';
    let colorTexto = 'rgb(' + blue + ',' + green +',' + "155" + ')';
    console.log(color)
    console.log("cor texto "+colorTexto)
    document.body.style.backgroundColor = color;
    document.getElementById('colorOutput').innerHTML = ': ' + color;
    document.getElementById('label').style.color = colorTexto;
    document.getElementById('label1').style.color = colorTexto;
    document.getElementById('label2').style.color = colorTexto;
}

document.getElementById('rangeRed').addEventListener('input', changeColor);
document.getElementById('rangeGreen').addEventListener('input', changeColor);
document.getElementById('rangeBlue').addEventListener('input', changeColor);


document.getElementsByTagName