/*

let btn = document.querySelector('button');
btn.onclick = function () {
    alert('Click');
};

*/

// addEventListener() removeEventListener()

/*

let btn = document.querySelector('button');
btn.addEventListener('click', () => {
    alert('click');
}); 

btn.addEventListener('click', () => {
    alert('cliq');
}); 

*/

/*

let btn = document.querySelector('button');
btn.addEventListener('mouseenter', (event) => {
    console.log(event);
    console.log(event.target);
    alert('hover');
    //event.target.remove();
}); 

*/

/*

btn.addEventListener('click', (event) => {
    event.target.remove();
}); 

*/

/*

let btn = document.querySelector('button');
btn.addEventListener('click', (event) => {
    console.log(event);
    console.log(event.target);
    alert('hover');
    //event.target.remove();
}); 

*/
let btn = document.querySelector('button'),
 //    i = 0,
     overlay = document.querySelector('.overlay');

let deleteElement = (event) => {
   // console.log(event.currentTarget);
    console.log(event.target);
    console.log(event.type);
   // i++;
   // if ( i == 1) {
   //     btn.removeEventListener('click', deleteElement);
   //}
};

btn.addEventListener('click', deleteElement);
overlay.addEventListener('click', deleteElement);
