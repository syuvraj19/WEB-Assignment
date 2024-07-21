import useSWR from 'swr';
import { useRouter } from 'next/router';
import { Container, Row, Col } from 'react-bootstrap';
import CompanyDetails from '@/components/CompanyDetails';
import PageHeader from '@/components/PageHeader';
import Error from 'next/error';

function CompaniesByTag() {
  const router = useRouter();
  const { tag } = router.query;
  const { data, error } = useSWR(`https://agile-yak-waistcoat.cyclic.app/api/companies?page=1&perPage=8&tag=${tag}`);


  if (!tag) {
    // Handle the case when no tag is specified in the URL
    return null;
  }

  
  // Handle loading state
  if (!data && !error) {
    // You can replace this with a loading spinner or message
    return <p>Loading...</p>;
  }

  // Handle error
  if (error) {
    // Return a 404 error when no companies are found for the specified tag
    return <Error statusCode={404} />;
  }

  // Check if data is an empty array
  if (Array.isArray(data) && data.length === 0) {
    // Return a 404 error when no companies are found for the specified tag
    return <Error statusCode={404} />;
  }

  return (
    <Container>
      {data.map((company) => (
        <div key={company._id}>
          <PageHeader text={`${company.name} ("${tag}" is among the tag list)`} />
          <CompanyDetails company={company} />
        </div>
      ))}
    </Container>
  );
}

export default CompaniesByTag;
