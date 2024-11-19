// setItem()
// getItem()
// removeItem()
// clear()

// localStorage.setItem("name","basant");

// // this is not work fo change (port protocol domain)
// localStorage.setItem("vast","addi")
// localStorage.setItem("course", "python")

//  let name = localStorage.getItem("name")
//  console.log(name);

//  localStorage.removeItem("age")

function save(){
    let name = document.querySelector("#name").value;
    let age = document.querySelector("#age").value;
    let contact = document.querySelector("#contact").value;

    localStorage.setItem("name",name)
    localStorage.getItem("age",age)
    localStorage.setItem("contact",contact)

}