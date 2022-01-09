let nameLogin = /^[a-zA-Z]{2,20}$/;
let email = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
let pass = /^[a-zA-z0-9]{8,15}$/;

let getId = id => document.getElementById(id);

getId('nameId').addEventListener('keyup', function () {
    let firstLogin = nameLogin.test(getId('nameId').value);
    if (firstLogin) {
        getId('text-circle1').style.display = 'none';
        getId('exc-circle1').style.display = 'none';
        getId('nameId').style.border = '1px solid green';
        getId('check-circle1').style.display = 'block';
    }
    else {
        getId('nameId').style.border = '1px solid hotpink';
        getId('check-circle1').style.display = 'none';
        getId('text-circle1').style.display = 'block';
        getId('exc-circle1').style.display = 'block';
        return false;
    }
});
getId('lastId').addEventListener('keyup', function () {
    let lastLogin = nameLogin.test(getId('lastId').value);
    if (lastLogin) {
        getId('text-circle2').style.display = 'none';;
        getId('exc-circle2').style.display = 'none';
        getId('lastId').style.border = '1px solid green';
        getId('check-circle2').style.display = 'block';
    }
    else {
        getId('lastId').style.border = '1px solid hotpink';
        getId('check-circle2').style.display = 'none';
        getId('text-circle2').style.display = 'block';;
        getId('exc-circle2').style.display = 'block';
        return false;
    }
});
getId('emailId').addEventListener('keyup', function () {
    let emailLogin = email.test(getId('emailId').value);
    if (emailLogin) {
        getId('text-circle3').style.display = 'none';
        getId('exc-circle3').style.display = 'none';
        getId('emailId').style.border = '1px solid green';
        getId('check-circle3').style.display = 'block';
    }
    else {
        getId('emailId').style.border = '1px solid hotpink';
        getId('check-circle3').style.display = 'none';
        getId('text-circle3').style.display = 'block';
        getId('exc-circle3').style.display = 'block';
        return false;
    }
});
getId('passId').addEventListener('keyup', function () {
    let passLogin = pass.test(getId('passId').value);
    if (passLogin) {
        getId('text-circle4').style.display = 'none';
        getId('exc-circle4').style.display = 'none';
        getId('passId').style.border = '1px solid green';
        getId('check-circle4').style.display = 'block';
    }
    else {
        getId('passId').style.border = '1px solid hotpink';
        getId('check-circle4').style.display = 'none';
        getId('text-circle4').style.display = 'block';
        getId('exc-circle4').style.display = 'block';
        return false;
    }
});

let userArray = [];

let nameFirst = getId('nameId');
let nameLast = getId('lastId');
let nameEmail = getId('emailId');
let namePass = getId('passId');

getId('buttonId').addEventListener('click', function () {
    if (nameLogin.test(nameFirst.value) && nameLogin.test(nameLast.value) && email.test(nameEmail.value) && pass.test(namePass.value)) {
        let obj = {
            firstName: getId('nameId').value,
            lastName: getId('lastId').value,
            email: getId('emailId').value,
            password: getId('passId').value
        }

        if (localStorage.length > 0 && localStorage.getItem('userArray')) {
            userArray = JSON.parse(localStorage.getItem('userArray'));
        }
        if (!userArray.some(elem => elem.email === nameEmail.value)) {
            userArray.push(obj);
            getId('nameId').style.border = 0;
            getId('lastId').style.border = 0;
            getId('emailId').style.border = 0;
            getId('passId').style.border = 0;
            getId('check-circle1').style.display = 'none';
            getId('check-circle2').style.display = 'none';
            getId('check-circle3').style.display = 'none';
            getId('check-circle4').style.display = 'none';
            getId('form1').reset();
        }
        else {
            getId('emailId').style.border = '1px solid hotpink';
            getId('check-circle3').style.display = 'none';
            getId('text-circle3').style.display = 'block';
            getId('text').textContent = 'This email already exist';
            getId('exc-circle3').style.display = 'block';
        }

        localStorage.setItem('userArray', JSON.stringify(userArray));
    }
});