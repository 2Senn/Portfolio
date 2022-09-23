import {
  Container,
  Box,
  Link,
  Heading,
  SimpleGrid,
  Divider,
  useColorModeValue
} from "@chakra-ui/react";
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item' 
import thumbShiro from '../public/images/works/shiro.jpg'
import thumbAmanah from '../public/images/works/amanah.jpg'
import thumbNoor from '../public/images/works/noor.jpeg'
import thumbMochi from '../public/images/works/mochi-dash.jpg'
import NextLink from 'next/link'


const Works = () => {
  return (
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1,1,2]} gap={6}>
        <Section>
          <WorkGridItem 
            id="shiro" 
            title={"Shiro Software Agency"}
            thumbnail={thumbShiro}
          >
            A software agency website powered by <b>React.js</b> and{' '} 
            <b>Next.js</b>.
            Making use of the latest techniques such as parallax and sticky parallax effects,
            carousel view, sliders, as well as a contact form using{' '}
            <NextLink href={"https://www.formspree.com"} >
              <Link>
                formspree.
              </Link>
            </NextLink> 
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="amanah"
            title="Amanah Real Estate"
            thumbnail={thumbAmanah}
          >
            Real Estate website used for bookings and viewing lettings. 
            Powered by React.
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="noor"
            title="Noor"
            thumbnail={thumbNoor}
          >
            An application for muslims to track prayer times, read Quran, and check authenticity of narrations.
            Powered by <b>react-native</b>.
          </WorkGridItem>
        </Section>
      </SimpleGrid>
      
      <Section delay={0.2}>
        <Divider my={6}  />
        <Heading as='h3' fontSize={20} mb={4}>
          Side-Projects
        </Heading>
      </Section>

      <SimpleGrid columns={[1,1,2]} gap={6}>
        <Section delay={0.4}>
          <WorkGridItem
            id="mochi"
            thumbnail={thumbMochi}
            title="Mochi Dashboard"
          >
            Dashboard for viewing financial information and trends throughout the month.
            With an integrated calender, editor, and kanban boards. Moreover, past orders and customers can 
            be viewed with sorting functionailities.
          </WorkGridItem> 
        </Section>
      </SimpleGrid>
    </Container>
  )
}

export default Works

