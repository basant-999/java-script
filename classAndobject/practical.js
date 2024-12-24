let data = "haked method";
class user {
    constructor (name,email){
        this.name = name;
        this.email = email;
    }

    viewdata(){
        console.log("data=",data);
    }

}
class admin extends user{
    constructor(name,email){
        super(name,email);
    }
    editData(){
        data = "some new value";
    }
}

let student1 = new user("basant","abc@gmail.com")
let student2 = new user("sant","ahtghc@gmail.com")

let treacher = new user("raahma","ahtghc1254@gmail.com")

let admin1 = new admin("kisan","ksan4552");

