function ranimg(){
    let imgurls = [
    "https://i0.wp.com/picjumbo.com/wp-content/uploads/beautiful-autumn-nature-with-a-river-in-the-middle-of-the-forest-free-image.jpeg?w=600&quality=80",

    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtnvAOajH9gS4C30cRF7rD_voaTAKly2Ntaw&s",

    "https://gratisography.com/wp-content/uploads/2024/01/gratisography-cyber-kitty-800x525.jpg",

    "https://static.vecteezy.com/system/resources/thumbnails/049/375/029/small/stylish-dog-wearing-sunglasses-with-neon-blue-and-pink-lights-photo.jpg"
    ];
let ran = Math.random();
let muitiply = ran * imgurls.length;
let flooredval = Math.floor(muitiply);
let selectimg = document.querySelector('#im');
selectimg.src = imgurls[flooredval];

}
