import React from 'react';
import styled from 'styled-components';

import Layout from '../components/layout';
import { Container } from '../components/layoutComponents';
import SEO from '../components/seo';
import Presentation from '../components/presentation';
import SalesManager from '../components/salesManager';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

    <Presentation />

    <div style={{ backgroundColor: 'var(--white)' }}>
      <Container>
        <SalesManager />
      </Container>
    </div>
  </Layout>
);

export default IndexPage;
