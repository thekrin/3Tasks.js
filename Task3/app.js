var result = document.getElementById('result')
function check() {
    var digit =(document.getElementById('groupname').value.slice(-3))
    var lastdigit =(document.getElementById('groupname').value)
    if (digit[0] == 1) {
        result.style.color = 'yellow'
        result.innerHTML = lastdigit;
    }
    else if (digit[0] == 2) {
        result.style.color = 'blue'
        result.innerHTML = lastdigit;
    }
    else {
        result.style.color = 'black'
        result.innerHTML = lastdigit;
    }
}