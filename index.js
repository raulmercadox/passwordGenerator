const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

function generatePassword() {
    let passwordLength = document.getElementById("password-length");
    document.getElementById('password1').textContent = getPassword(Number(passwordLength.value));
    document.getElementById('password2').textContent = getPassword(Number(passwordLength.value));
}

function getPassword(numberCharacters) {
    let password = ''
    rules = ['l'] // 's', 'n'
    let chkSymbol = document.getElementById('chk-symbol')
    let chkNumber = document.getElementById('chk-number')
    if (chkSymbol.checked) {
        rules.push('s')
    }
    if (chkNumber.checked) {
        rules.push('n')
    }
    
    for (let i = 0; i < numberCharacters; i++) {
        let rule = rules[Math.floor(Math.random() * rules.length)];
        if (rule === 'l') {
            password += characters[Math.floor(Math.random() * 52)]
        }
        if (rule === 'n') {
            password += characters[52 + Math.floor(Math.random() * 10)]
        }
        if (rule === 's') {
            password += characters[62 + Math.floor(Math.random() * 29)]
        }
    }
    return password;
}

function changePasswordLength(size) {
    let passwordLength = document.getElementById("password-length");
    let result = Number(passwordLength.value) + Number(size);
    if (result > 0) {
        passwordLength.value = result;    
    }
}

function copyPassword1() {
    let password1 = document.getElementById('password1')
    navigator.clipboard.writeText(password1.textContent).then(function(){
        alert('Password copied to clipboard!')    
    }, function() {
        alert('There was an error')
    })
    
}

function copyPassword2() {
    let password2 = document.getElementById('password2')
    navigator.clipboard.writeText(password2.textContent).then(function(){
        alert('Password copied to clipboard!')    
    }, function(e) {
        alert(e)
    })
}


