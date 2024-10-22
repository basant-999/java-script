let arrofobj =[
    {
    "id":1,
    "imageurl":"https://t3.ftcdn.net/jpg/06/12/00/18/360_F_612001823_TkzT0xmIgagoDCyQ0yuJYEGu8j6VNVYT.jpg",
    "pname":"shoes",
    "bname":"nike",
    "pprice":564
},
{
    "id":1,
    "imageurl":"https://assets.ajio.com/medias/sys_master/root/20230804/163c/64cc0468a9b42d15c98a1af5/-473Wx593H-466417359-white-MODEL.jpg",
    "pname":"shoes",
    "bname":"nike",
    "pprice":564
},
{
    "id":1,
    "imageurl":"https://t3.ftcdn.net/jpg/06/12/00/18/360_F_612001823_TkzT0xmIgagoDCyQ0yuJYEGu8j6VNVYT.jpg",
    "pname":"shoes",
    "bname":"nike",
    "pprice":564
},
{
    "id":1,
    "imageurl":"https://media.gettyimages.com/id/171224469/photo/canvas-shoes.jpg?s=612x612&w=gi&k=20&c=m8fPMzFutcPz6R6cg5f7lC7T4m-v8RgCmi_FfPhFOzg=",
    "pname":"shoes",
    "bname":"nike",
    "pprice":564
},
{
    "id":1,
    "imageurl":"https://img.freepik.com/free-photo/pair-trainers_144627-3799.jpg",
    "pname":"shoes",
    "bname":"nike",
    "pprice":564
},
{
    "id":1,
    "imageurl":"https://images.meesho.com/images/products/371064225/7oosk_1200.jpg",
    "pname":"shoes",
    "bname":"nike",
    "pprice":564
},
];

let selectdiv = document.querySelector('#ans');

selectdiv.innerHTML= arrofobj.map((card) =>`
<div  style ="margin:20px; box-shadow:0px 0px 10px 2px black">

<img width="200px" height=200px" src="${card.imageurl}" alt ="">
<div>${card.bname}</div>
<div>${card.pname}</div>
<div>${card.pprice}</div>
<div>add to cart </div>
<div>by now </div>
</div>

`).join(" ")