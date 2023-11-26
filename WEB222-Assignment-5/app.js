/**
 * WEB222 – Assignment 05
 *
 * I declare that this assignment is my own work in accordance with
 * Seneca Academic Policy. No part of this assignment has been
 * copied manually or electronically from any other source
 * (including web sites) or distributed to other students.
 *
 * Please update the following with your information:
 *
 *      Name:     : yuvraj singh
 *      Student ID: 155580210
 *      Date:     : 2/08/22
 */

// All of our data is available on the global `window` object.
// Create local variables to work with it in this file.

///////////////////////////////////////////////////////////////////////////////

products.forEach((item,i) => {

const main = document.querySelector(".main");
        console.log(main);
        //create card
        const card =document.createElement('div');
        card.classList = 'card';
        
        const sneakercard =
       `<div class="index-post">
        <div class="contener">
            <div class="image-contener">
                <img src="${products[i].img}" alt="">
            </div>
            <div class="meta-contener">
                <h2 class="title">${products[i].sneakername}</h2>
                <span class="desc">${products[i].sneakerdesc}</span>
                <div class="price">$${products[i].sneakerprice}</div>

            </div>
            <div class="button-contener">
                <a href="#" class="button">Buy Now →</a>
            </div>
        </div>`
        card.innerHTML+= sneakercard;
        main.appendChild(card);

      });
   