const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body')

buttons.forEach(function(button){
    console.log(button);
    button.addEventListener('click', function(e){ // e is a event object uske jagah aap kuch bhi use kr sakte ho
console.log(e);
console.log(e.target);
// if(e.target.id === 'grey' ){
//     body.style.backgroundColor = e.target.id;
// }
// if(e.target.id === 'white' ){
//     body.style.backgroundColor = e.target.id;
// }
// if(e.target.id === 'blue' ){
//     body.style.backgroundColor = e.target.id;
// }
// if(e.target.id === 'yellow' ){
//     body.style.backgroundColor = e.target.id;
// }

switch (e.target.id) {
    case "grey":
        body.style.backgroundColor = e.target.id;
        break;
    case "white":
        body.style.backgroundColor = e.target.id;
        break;
    case "purple":
        body.style.backgroundColor = e.target.id;
        break;
    case "yellow":
        body.style.backgroundColor = e.target.id;
        break;
    case "pink":
        body.style.backgroundColor = e.target.id;
        break;
    case "green":
        body.style.backgroundColor = e.target.id;
        break;

    default : 
        break;
}
    })
})
