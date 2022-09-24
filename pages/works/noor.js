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
    <Layout title="Noor">
      <Container>
        <Title>
          Noor <Badge>2022</Badge>
        </Title>
        <P>
          Noor is a Muslim&apos;s daily companion for tracking prayer times,
          reading Quran, and checking authenticity of narrations. The app is cross-platform,
          encrypted data sync support, and has support for multiple languages.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://github.com/2Senn/Noor">
              https://github.com/2Senn/Noor
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>IOS/Android</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>React Native - NodeJS - Firebase - Expo</span>
          </ListItem>
          <ListItem>
            <Meta>Dev Github</Meta>
            <Link href="https://github.com/2Senn">
              https://github.com/2Senn
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </List>

        <WorkImage src="/images/works/noor.jpeg" alt="Noor" />
        <WorkImage src="/images/works/noor2.jpg" alt="Noor" />
      </Container>
    </Layout>
  )
}

export default Work
