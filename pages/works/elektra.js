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
    <Layout title="Elektra">
      <Container>
        <Title>
          Elektra <Badge>2022</Badge>
        </Title>
        <P>
          A Markdown note-taking app for developers!
          built using <b>Electron</b> - A framework for building cross-platform
          desktop apps using HTML, JS, and CSS, <b>Vite</b> - A fast build tool
          {' '}<b>CodeMirror 6</b> - An extensible code editor for the web
          {' '}<b>Remark</b> - An extensible Markdown processor.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://github.com/2Senn/Elektra">
              https://github.com/2Senn/Elektra
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Windows/macOS/Linux</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>React - Electron - CodeMirror - Remark - Typescript - Vite</span>
          </ListItem>
          <ListItem>
            <Meta>Dev Github</Meta>
            <Link href="https://github.com/2Senn">
              https://github.com/2Senn
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </List>

        <WorkImage src="/images/works/Elektra.jpg" alt="Elektra" />
      </Container>
    </Layout>
  )
}

export default Work
