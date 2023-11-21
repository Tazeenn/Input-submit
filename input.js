function input(){
    let x = document.getElementById('fnm').value;
    let y = document.getElementById('lnm').value;
    let z = document.getElementById('phno').value;
    console.log(x)
    console.log(y)
    console.log(z)
    let a = document.getElementsByTagName('td')
    a[0].innerText=x;
    a[1].innerText=y;
    a[2].innerText=z;
    event.preventDefault()
}