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
    <Layout title="Mochi">
      <Container>
        <Title>
          Mochi <Badge>2022</Badge>
        </Title>
        <P>
          An excellent dashboard to keep track of finances as well as track trends.
          Includes a Calender that supports saving appointments and important dates, a powerful editor,
          a kanban board, and a color picker. Powered by <b>React.js</b>
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://github.com/2Senn/MochiDashboard">
              https://github.com/2Senn/MochiDashboard
              <ExternalLinkIcon mx="2px" />
            </Link>
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

        <WorkImage src="/images/works/mochi-dash.jpg" alt="Mochi" />
        <WorkImage src="/images/works/mochi2.jpg" alt="Mochi" />
        <WorkImage src="/images/works/mochi3.jpg" alt="Mochi" />
      </Container>
    </Layout>
  )
}

export default Work
