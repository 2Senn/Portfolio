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
import NextLink from 'next/link'

const Work = () => {
  return (
    <Layout title="Shiro">
      <Container>
        <Title>
          Shiro <Badge>2022</Badge>
        </Title>
        <P>
          A software agency website powered by <b>React.js</b> and{' '}
          <b>Next.js</b>.
          Making use of the latest techniques such as parallax and sticky parallax effects,
          carousel view, sliders, as well as a contact form using{' '}
          <NextLink href={"https://www.formspree.com"} >
            <Link>
              formspree.
            </Link>
          </NextLink>
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://github.com/2Senn/ShiroSoftwareAgency">
              https://github.com/2Senn/ShiroSoftwareAgency
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Windows/macOS/Linux/</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>React - Next.JS - NodeJS - HTML/CSS</span>
          </ListItem>
          <ListItem>
            <Meta>Dev Github</Meta>
            <Link href="https://github.com/2Senn">
              https://github.com/2Senn
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </List>

        <WorkImage src="/images/works/shiro.jpg" alt="Shiro" />
        <WorkImage src="/images/works/shiro2.jpg" alt="Shiro" />
        <WorkImage src="/images/works/shiro3.jpg" alt="Shiro" />
      </Container>
    </Layout>
  )
}

export default Work
