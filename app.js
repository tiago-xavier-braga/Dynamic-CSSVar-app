function viewPassword(){
    if(document.getElementById('eye').className == 'fa-solid fa-eye-slash'){
        document.getElementById('eye').className = 'fa-solid fa-eye';
        document.getElementById('Password').type = 'text';
    } else{
        document.getElementById('eye').className = 'fa-solid fa-eye-slash';
        document.getElementById('Password').type = 'password';
    }
};

function verification(){
    let user = document.getElementById('User').value;
    let password = document.getElementById('Password').value;

    if(user == '' || password == ''){
        alert('Fields cannot be empty');
        if(user == ''){
            document.getElementById('inputLineUser').style = `
            border-bottom: 1px solid var(--bg-cancel);
            color: var(--bg-cancel);
            `
        }
        if(password == ''){
            document.getElementById('inputLinePassword').style = `
            border-bottom: 1px solid var(--bg-cancel);
            color: var(--bg-cancel);
            `
        }
    } else {
        if(user != 'testuser' || password != 'mypassword'){
            alert('Incorrect username or password');
            document.getElementById('inputLineUser').style = `
            border-bottom: 1px solid var(--bg-error);
            color: var(--bg-error);
            `;
            document.getElementById('inputLinePassword').style = `
            border-bottom: 1px solid var(--bg-error);
            color: var(--bg-error);
            `;
        }
    }
}
function cancel(){
    document.getElementById('User').value = '';
    document.getElementById('Password').value = '';

    document.getElementById('inputLineUser').style = `
    border-bottom: 1px solid var(--bd-shadow);
    color: #000;
    `;
    document.getElementById('inputLinePassword').style = `
    border-bottom: 1px solid var(--bd-shadow);
    color: #000;
    `;
}