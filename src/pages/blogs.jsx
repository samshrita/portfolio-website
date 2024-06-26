
import styled from 'styled-components';

// Styled components
const Section = styled.section`
  padding: 4rem 0;
  background-color: #f7f7f7;
`;

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const H1 = styled.h1`
  font-size: 2rem;
  font-weight: 600;
  color: var(--purple);
  font-family: "Space Grotesk", sans-serif;
  margin-bottom: 2rem;
  text-align: center;
  margin-left: 10px;

  @media (min-width: 1024px) {
    text-align: left;
  }
`;

const BlogCard = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
  padding: 1.5rem;
  transition: box-shadow 0.3s ease-in-out;

  &:hover {
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }
`;

const Title = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: var(--dark-gray);
`;

const Description = styled.p`
  font-size: 1rem;
  color: var(--gray);
  margin-bottom: 1rem;
`;
const ReadMoreLink = styled.a`
  display: inline-block;
  margin-top: auto; /* Push the link to the bottom */
  color: var(--purple);
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;

  &:hover {
    color: #8b5cf6; /* Example: Change color on hover */
    text-decoration: underline;
  }
`;

function Blogs() {
  return (
    <Section>
      <Container>
        <H1>Blogs</H1>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <BlogCard>
            <Title>Securing an AWS S3 Bucket Containing Sensitive Customer Data</Title>
            <Description>
              This article has 8 Ways to secure AWS S3 bucket containing sensitive customer data.
            </Description>
            <ReadMoreLink href="https://medium.com/@samshritaghimire/securing-an-aws-s3-bucket-containing-sensitive-customer-data-b746bfbfb9ed" target="_blank" rel="noopener noreferrer">
              Read more
            </ReadMoreLink>
          </BlogCard>

          <BlogCard>
            <Title>Implementing Zero Trust Security in AWS Environments</Title>
            <Description>
            This article explores the principles of Zero Trust Security, how to implement it using AWS services, and the advantages of adopting this model.
            </Description>
            <ReadMoreLink href="https://medium.com/your-medium-link" target="_blank" rel="noopener noreferrer">
              Read more
            </ReadMoreLink>
          </BlogCard>

          {/* Add more BlogCard components as needed */}
        </div>
      </Container>
    </Section>
  );
}

export default Blogs;
