let getId = id => document.getElementById(id);

getId('buttonIn').addEventListener('click', function () {
    let toJson = JSON.parse(localStorage.getItem('userArray'));
    let email = getId('emailIn').value;
    let pass = getId('passIn').value;
    if (toJson === null) {
        getId('check-circle4').style.display = 'none';
        getId('text-circle4').style.display = 'block';
        getId('text').textContent = 'localStorage is empty';
    }

    toJson.forEach(element => {
        if (element.email === email && element.password === pass){
            let firstName = element.firstName.charAt(0).toUpperCase() + element.firstName.slice(1);
            let lastName = element.lastName.charAt(0).toUpperCase() + element.lastName.slice(1);
            let emailUser = element.email;
            getId('textName').textContent = firstName + ' ' + lastName;
            getId('emailName').textContent = emailUser;
            getId('box-two').style.display = 'none';
            getId('box-three').style.display = 'block';
            getId('form2').reset();
        }
        else {
            getId('check-circle4').style.display = 'none';
            getId('text-circle4').style.display = 'block';
            getId('text').textContent = 'Incorrect email or password';
        }
    });
});
getId('buttonSing').addEventListener('click', function () {
    getId('box-three').style.display = 'none';
    getId('text-circle4').style.display = 'none';
    getId('box-two').style.display = 'block';
});