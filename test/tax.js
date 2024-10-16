function tax(){
    let salary = parseInt(window.prompt("enter your salary"));

    if(salary<300000){
        window.alert("no tax");
    }
    else if(salary>=300000 && package<1000000){
        let payabaletax = (salary/100)*10;
        window.alert("you have to pay"+payabaletax+"on you salary");


    }
    else if(salary>=800000){
        let payabaletax = (salary/100)*20;
        window.alert("you have to pay"+payabaletax+"on your salary");
    }
    else {
        window.alert("invalid input");
    }
}
tax();