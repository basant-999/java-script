function class4(){
    let res = window.confirm("do you wnat");
    console.log(res);
    if(res){
        window.location.href = "login.html";

    }
    else{
        window.alert("invalid click")
    }
}

class4();
