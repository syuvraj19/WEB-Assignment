 import { Container, Row, Col } from 'react-bootstrap';
 

const CompanyDetails = ({ company }) => {
  const companyOverview = company?.overview || 'N/A';
  const companyOverviewWithoutPTags = companyOverview.replace(/<[^>]*>/g, '').replace(/<\/p>/g, '');
    return (
      <Container>
        <Row>
          <Col md>
            
              {companyOverviewWithoutPTags}
            
            <br />
            <br />
            <strong>Category:</strong> {company?.category_code || 'N/A'}<br /><br />
            <strong>Founded:</strong> {company?.founded_year ? `${company.founded_month} ${company.founded_day} ${company.founded_year}` : 'N/A'}<br /><br />
            <strong>Tag List:</strong> 
            <ul>
              {company?.tag_list ? company.tag_list.split(',').map((tag, index) => (
                <li key={index}>{tag.trim()}</li>
              )) : 'N/A'}
            </ul>
            <br />
            <strong>Key People:</strong> {company?.relationships ? company.relationships.map((relationship, index) => (
              <span key={index}>
                {`${relationship.person.first_name} ${relationship.person.last_name} (${relationship.title})`}
                {index !== company.relationships.length - 1 ? ', ' : ''}
              </span>
            )) : 'N/A'}<br /><br />
            <strong>Products:</strong>
            <ul>
                {company?.products ? company.products.map((product, index) => (
                <li key={index}>
                {product.name} 
                </li>
                )) : 'N/A'}
            </ul>
            <br />
            <strong>Number of Employees:</strong> {company?.number_of_employees || 'N/A'}<br /><br />
            <strong>Website:</strong> {company?.homepage_url ? <a href={company.homepage_url} target="_blank">{company.homepage_url}</a> : 'N/A'}<br /><br />
          </Col>
        </Row>
      </Container>
    );
  };
  
  export default CompanyDetails;
  