/**
 * WEB222 – Assignment 04
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
 *      Date:     : 18/07/22
 */

// All of our data is available on the global `window` object.
// Create local variables to work with it in this file.

const { products, categories } = window;

let CatOfDiv = {};

categories.forEach((category) => {
  const x = document.createElement("button");

  x.setAttribute("style", "margin: 0 .4rem;");

  x.innerText = category.type;

  x.addEventListener("click", () => {
    CatOfDiv = category;

    document.getElementById("selected-category").innerText = CatOfDiv.type;

    const NewTableBody = document.createElement("tbody");

    products
      .filter((item) => {
        return !item.discontinued && item.category.indexOf(CatOfDiv.id) >= 0;
      })
      .forEach((item) => {
        const x = document.createElement("tr");

        const sneakername = document.createElement("td");

        sneakername.innerText = item.sneakername;

        const sneakerdesc = document.createElement("td");

        sneakerdesc.innerText = item.sneakerdesc;

        const sneakerprice = document.createElement("td");

        sneakerprice.innerText = `$${item.sneakerprice}`;

        x.appendChild(sneakername);

        x.appendChild(sneakerdesc);

        x.appendChild(sneakerprice);

        NewTableBody.appendChild(x);
      });

    document.getElementById("category-products").replaceWith(NewTableBody);

    NewTableBody.setAttribute("id", "category-products");
  });

  document.getElementById("menu").appendChild(x);
});

products.forEach((item) => {
  const x = document.createElement("tr");

  const sneakername = document.createElement("td");

  sneakername.innerText = item.sneakername;

  const sneakerdesc = document.createElement("td");

  sneakerdesc.innerText = item.sneakerdesc;

  const sneakerprice = document.createElement("td");

  sneakerprice.innerText = `$${item.sneakerprice.toLocaleString("en-ca")}`;

  x.appendChild(sneakername);

  x.appendChild(sneakerdesc);

  x.appendChild(sneakerprice);

  document.getElementById("category-products").appendChild(x);
});
