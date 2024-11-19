
// let obj = {
//     name : "basant",
//     age : 52,
//     mob : 124558
// }
// console.log(obj);
// for (v in obj){
//     console.log(v)
//     console.log(obj[v])
// }

function save()
{
let ob = {
    name : document.querySelector("#name").value,
    age : document.querySelector("#age").value,
    mob : document.querySelector("#contact").value
}
localStorage.setItem("data",JSON.stringify(ob));
}

 let m = JSON.parse(localStorage.getItem("data"))
 console.log(m.name);

 let myname = document.querySelector('#myname')
 let myage = document.querySelector('#myage')
 let mycontact = document.querySelector('#mycontact')

 myname.innerHTML = m.name;
 myage.innerHTML = myage;
 mycontact.innerHTML = m.mycontact