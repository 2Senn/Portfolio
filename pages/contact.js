import {
  Container,
  Heading,
} from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import Form from '../components/form'

const Contact = () => {

  

  return (
    <Layout title="Contact">
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Contact me
        </Heading>
        <Section delay={0.2}>
          <Form />
        </Section>
      </Container>
    </Layout>
  )
}

export default Contact

