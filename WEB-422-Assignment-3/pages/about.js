import React from 'react';
import Link from 'next/link';
import { Card } from 'react-bootstrap';
import CompanyDetails from '../components/CompanyDetails';
import PageHeader from '../components/PageHeader';
import CompaniesByTag from './companies/[tag]';



export async function getStaticProps() {
    try{
    const res = await fetch(`https://agile-yak-waistcoat.cyclic.app/api/company/MyEdu`);
    const company = await res.json();
  
    return {
      props: { company },
    };
  }catch (error) {
    console.error("Error in getStaticProps:", error);
    return {
      props: { company: null }, 
    };
  }
}
const About = ({ company }) => {
    return (
      <>
        <PageHeader text="About the Developer: Yuvraj Singh" />
        <Card>
          <Card.Body>
            <p>
              Hello! I&apos;m Yuvraj, a passionate developer with a keen interest in web technologies.
            </p>
            <p>
              I love creating web applications and exploring new frameworks and libraries. In my free time, I enjoy
              contributing to open-source projects and learning new programming languages.
              Feel free to explore the world of technology with me!
            </p>
            <p>
              Here are some companies that I find fascinating:
            </p>
            <ul>
              <li>
                <Link href="/companies/[tag]" as="/companies/web">Web</Link>
              </li>
              <li>
                <Link href="/companies/software">Software</Link>
              </li>
              <li>
                <Link href="/companies/education">Education</Link>
              </li>
            </ul>
          
        <CompanyDetails company={company} />
        </Card.Body>
        </Card>

      </>
    );
}


export default About;
