/*********************************************************************************
*  WEB422 – Assignment 2
*  I declare that this assignment is my own work in accordance with Seneca Academic Policy.  
*  No part of this assignment has been copied manually or electronically from any other source
*  (including web sites) or distributed to other students.
* 
*  Name: Yuvraj Singh Student ID: 155580210 Date: 29/09/2023
*
********************************************************************************/ 

let page = 1;
const perPage = 10;

const companyObjectToTableRowTemplate = (companyObj) => {
  return `
    <tr data-id ="${companyObj.name}">
      <td>${companyObj.name || '--'}</td>
      <td>${companyObj.category_code || '--'}</td>
      <td>${companyObj.description || '--'}</td>
      <td>${formatDate(companyObj.founded_year, companyObj.founded_month, companyObj.founded_day) || '--'}</td>
      <td>${getFirstFounderName(companyObj.relationships) || '--'}</td>
      <td>${getFirstOfficeLocation(companyObj.offices) || '--'}</td>
      <td>${companyObj.number_of_employees || '--'}</td>
      <td>${getFirstTwoTags(companyObj.tag_list) || '--'}</td>
      <td>${companyObj.homepage_url ? `<a href="${companyObj.homepage_url}" target="_blank">${companyObj.homepage_url}</a>` : '--'}</td>
    </tr>
  `;
};

const formatDate = (year, month, day) => {
  if (!year || !month || !day) return null;
  return `${month}/${day}/${year}`;
};

const getFirstFounderName = (relationships) => {
  const founder = relationships.find((relationship) => relationship.title.includes('Founder'));
  return founder ? `${founder.person.first_name} ${founder.person.last_name}` : null;
};

const getFirstOfficeLocation = (offices) => {
  return offices.length > 0 ? offices[0].location : null;
};

const getFirstTwoTags = (tagList) => {
  if (!tagList) return null;
  const tags = tagList.split(',').map((tag) => tag.trim()).filter(Boolean);
  return tags.slice(0, 2).join('<br />');
};

const loadCompanyData = (tag = null) => {
  let url = `http://localhost:8080/api/companies?page=${page}&perPage=${perPage}`;

  const paginationElement = document.querySelector('.pagination');
  if (tag != null) {
    url += `&tag=${tag}`;
    page = 1;
    paginationElement.classList.add('d-none');
  } else {
    paginationElement.classList.remove('d-none');
  }

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const tableBody = document.querySelector('#companiesTable tbody');
      tableBody.innerHTML = data.map((companyObj) => companyObjectToTableRowTemplate(companyObj)).join('');

      const currentPageElement = document.querySelector('#current-page');
      currentPageElement.textContent = page;

      const tableRows = document.querySelectorAll('#companiesTable tbody tr');
      tableRows.forEach((row) => {
        row.addEventListener('click', () => {
          console.log("clicked");
          const companyId = row.getAttribute('data-id');
           
          fetch(`http://localhost:8080/api/company/${companyId}`)
            .then((response) => response.json())
            .then((data) => {
              const modalTitle = document.querySelector('.modal-title');
              modalTitle.textContent = data.name;

              const modalBody = document.querySelector('.modal-body');
              modalBody.innerHTML = `
                <strong>Category:</strong>${data.category_code || '--'}<br /><br />
                <strong>Description:</strong>${data.description || '--'}<br /><br />
                <strong>Overview:</strong>${data.overview || '--'}<br /><br />
                <strong>Tag List:</strong>${getFirstTwoTags(data.tag_list) || '--'}<br /><br />
                <strong>Founded:</strong>${formatDate(data.founded_year, data.founded_month, data.founded_day) || '--'}<br /><br />
                <strong>Key People:</strong>${getFirstFounderName(data.relationships) || '--'}<br /><br />
                <strong>Products:</strong>${data.products.join('<br />') || '--'}<br /><br />
                <strong>Number of Employees:</strong>${data.number_of_employees || '--'}<br /><br />
                <strong>Website:</strong><a href="${data.homepage_url}" target="_blank">${data.homepage_url || '--'}</a><br /><br />
              `;
              const detailsModal = new bootstrap.Modal(document.querySelector('#detailsModal'));
              detailsModal.show();
            })
            .catch((error) => {
              console.error(error);
            });
        });
      });
    })
    .catch((error) => {
      console.error(error);
    });
};

const previousPageButton = document.querySelector('#previous-page');
const nextPageButton = document.querySelector('#next-page');



nextPageButton.addEventListener('click', () => {
  page++;
  loadCompanyData();
});

const searchForm = document.querySelector('#searchForm');
  searchForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const tag = document.querySelector('#tag').value;
    loadCompanyData(tag);
  });

 
const clearFormButton = document.querySelector('#clearForm');
  clearFormButton.addEventListener('click', () => {
    document.querySelector('#tag').value = '';
    loadCompanyData();
  });

loadCompanyData();
