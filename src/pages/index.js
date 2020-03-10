import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import Layout from '../components/layout';
import { Container, Grid } from '../components/layoutComponents';
import SEO from '../components/seo';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Container>
      <p>
        Presentations. We’ve crafted a unique opportunity that fits for the
        needs of your business and your company structure.
      </p>
    </Container>
  </Layout>
);

export default IndexPage;
