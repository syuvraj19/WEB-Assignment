/*********************************************************************************
*  WEB422 – Assignment 3
*  I declare that this assignment is my own work in accordance with Seneca Academic Policy.  
*  No part of this assignment has been copied manually or electronically from any other source
*  (including web sites) or distributed to other students.
* 
*  Name: Yuvraj Singh Student ID: 155580210 Date: 12/10/2023
*
*
********************************************************************************/ 

import useSWR from "swr";
import { useState, useEffect } from "react";
import { Pagination, Accordion } from "react-bootstrap";
import CompanyDetails from "@/components/CompanyDetails";
import PageHeader from "@/components/PageHeader";

function Home() {
  const [page, setPage] = useState(1);
  const [pageData, setPageData] = useState([]);
  const [totalPages, setTotalPages] = useState(0);

  const { data, error } = useSWR(`(https://agile-yak-waistcoat.cyclic.app)/api/companies?page=page&perPage=10`);

  useEffect(() => {
    if (data) {
      setPageData(data);
      setTotalPages(data.totalPages);
    }
  }, [data]);

  const previous = () => {
    if (page > 1) {
      console.log('Previous clicked. Current page:', page);
      setPage(page - 1);
    }
  };

  const next = () => {
    //if (page < totalPages) {
      console.log("Next clicked");
      setPage(page + 1);
    //}
  };

  return (
    <>
      <PageHeader text="Company List: Sorted by Founded Year" />
      <Accordion>
        {pageData.map((company) => (
          <Accordion.Item key={company._id} eventKey={company._id}>
            <Accordion.Header>
              
              <strong>{company.name}</strong> 
              {" "}
              {company.description ? `(Founded in ${company.founded_year} , ${company.description})` : `(Founded in ${company.founded_year})`}
                
            </Accordion.Header>
            <Accordion.Body>
              <CompanyDetails company={company} />
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
      <Pagination>
        <Pagination.Prev onClick={previous} />
        <Pagination.Item>{page}</Pagination.Item>
        <Pagination.Next onClick={next} />
      </Pagination>
    </>
  );
  
}

export default Home;