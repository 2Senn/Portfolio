import {
  Container,
  Badge,
  Link,
  List,
  ListItem
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
  return (
    <Layout title="Amanah">
      <Container>
        <Title>
          Amanah <Badge>2022</Badge>
        </Title>
        <P>
          A real-estate website allowing customers to make bookings,
          contact owners, and view different lettings.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <strong>HIDDEN - Website currently not being hosted</strong>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Windows/macOS/Linux</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>React - NodeJS - HTML/CSS</span>
          </ListItem>
          <ListItem>
            <Meta>Dev Github</Meta>
            <Link href="https://github.com/2Senn">
              https://github.com/2Senn
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </List>

        <WorkImage src="/images/works/amanah.jpg" alt="Amanah" />
        <WorkImage src="/images/works/amanah2.jpg" alt="Amanah" />
        <WorkImage src="/images/works/amanah3.jpg" alt="Amanah" />
      </Container>
    </Layout>
  )
}

export default Work
