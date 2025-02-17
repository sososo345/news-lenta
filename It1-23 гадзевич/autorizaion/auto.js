document.getElementById("enterbutton").addEventListener('click', function(){
    alert('')
    const login = document.getElementById("login");
    const password = document.getElementById("password");
    const messageP = document.getElementById("message");
    
    if (login.value == "taburetka"|| password.value=="goida"){
        messageP.textContent = "успешно"
        window.open('../line/index.html')
    }else{
        messageP.textContent = "неверный логин или пароль"
    }
});

