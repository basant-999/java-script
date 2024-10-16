let items = [400,600,750,240,150];

// for(let i=0; i<items.length;i++){
//     let per = items[i]/10;
//     items[i]-= per; 
// }
// console.log(items);


// for of =========================================
 let i=0;
for(let val of items){
    let offer = val/10;

    items[i] = items[i]-offer;
    console.log(`after offer= ${items[i]}`);
    i++
}