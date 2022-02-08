const leftbtn = document.querySelector('#left');
const rightbtn = document.querySelector('#right');
const items = document.querySelector('#items');
const itemArray = document.querySelectorAll(".item");


// rightbtn.addEventListener('click', e => {
//     e.preventDefault();
//     let currentRight = parseInt(computedStyle.right);
//     if (currentRight <= 400){
//     items.style.right = `${currentRight + 100}px`;}

    
// })

// leftbtn.addEventListener('click', e => {
//     e.preventDefault();
//     let currentLeft = parseInt(computedStyle.right);
//     if (currentLeft >= 0) {
//         items.style.right = `${currentLeft - 100}px`;
//     }
// })

/*
const minRight = 0;
const maxRight = 500;
const step = 100;
let currentRight = 0;

items.style.right = currentRight;

rightbtn.addEventListener('click', e => {
    e.preventDefault();

    if(currentRight < maxRight) {
        currentRight += step;
        items.style.right = `${currentRight}px`;
    }
})

leftbtn.addEventListener('click', e => {
    e.preventDefault();

    if(currentRight > minRight) {
        currentRight -= step;
        items.style.right = `${currentRight}px`;
    }
})

*/

const loop = (direction, e) => {
    e.preventDefault();

    if (direction === "right") {
        items.appendChild(items.firstElementChild)
    }
    else {
        items.insertBefore(items.lastElementChild, items.firstElementChild)
    }
}

rightbtn.addEventListener('click', e => {
    loop("right", e);
})

leftbtn.addEventListener('click', e => {
    loop("left", e);
})