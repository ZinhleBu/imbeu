import Link from 'next/link';
import { Helmet } from 'react-helmet';

import Layout from 'components/Layout';
import Section from 'components/Section';
import Container from 'components/Container';

import styles from 'styles/pages/404.module.scss';

export default function Services() {
  return (
    <Layout>
      <Helmet>
        <title>404 | Page not found</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <Section>
        <Container className={styles.center}>
          <h1>Services</h1>
          <span>Our services</span>
          <p>
            <Link href="/">
              <a>Go back home</a>
            </Link>
          </p>
        </Container>
      </Section>
    </Layout>
  );
}
