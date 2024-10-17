

function run(){
    let arr=[
        'https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D',

        'https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp',

        'https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630',

        'https://thumbs.dreamstime.com/b/falling-drop-rain-blue-earth-image-water-splash-crown-shape-water-splash-crown-shape-falling-drop-earth-140453719.jpg'

    ];
    let output = document.querySelector('#answer');
    output.innerHTML = arr.map((imgurl)=>`
    <img style="width:400px;height:400px" src="${imgurl}" alt="not found">`).join(" ")
}