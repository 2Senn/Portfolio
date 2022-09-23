import { 
  Box, 
  Button, 
  Container, 
  Heading, 
  Image, 
  Link, 
  useColorModeValue, 
} from "@chakra-ui/react"
import NextLink from 'next/link'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { ChevronRightIcon } from "@chakra-ui/icons"
import { BioYear, BioSection } from '../components/bio'

const Page = () => {
  return (
    <Layout>
      <Container>
        <Box 
          borderRadius="lg" 
          bg={useColorModeValue('whiteAlpha.500', '#31433B')}
          p={3} 
          mb={6}
          align="center"
          mt={2}
          textColor={useColorModeValue('black', 'white')}
        >
          Hello, I&apos;m a full-stack developer based in Jordan!
        </Box>
        <Box display={{md: 'flex'}}>
          <Box flexGrow={1}>
            <Heading as={"h2"} variant="page-title">
              Faisal Jweihan
            </Heading>
            <p>Wanderer ( Developer / Writer / Designer )</p>
          </Box>
          <Box 
            flexShrink={0} 
            mt={{base: 4, md: 0}} 
            ml={{md: 6}} 
            align="center"
          >
            <Image 
              maxWidth="110px" 
              display="inline-block"
              borderRadius="full"
              src="/images/me-logo.svg"
              alt="Profile Picture"
            />
          </Box>
        </Box>
        <Section delay={0.1}>
          <Heading as='h3' variant="section-title">
            Work
          </Heading>
          <Paragraph>
            Faisal is a young full-stack developer based in Amman with a passion
            for creating beautiful applications and focusing on a minimalistic design approach.
            His skills extend from designing and development to solving real-world problems, as well as,
            optimizing applications. When away from his screen, he loves reading and travelling.
            Currently, He is looking for a new developer job with a focus on react/react-native.
            He is also developing an app called{' '}
            <NextLink href="/works/Noor">
              <Link>
                Noor{' '}
              </Link>
            </NextLink>
            that has been in development 
            for a while now.
          </Paragraph>
          <Box
            align="center" 
            my={4}
          >
            <NextLink href={"/works"}>
              <Button 
                rightIcon={<ChevronRightIcon />}
                bgColor={useColorModeValue('#442c2e', 'teal.200')}
                color={useColorModeValue('whiteAlpha.800', 'black')}
                colorScheme={"teal"}
              >

                My portfolio
              </Button>
            </NextLink>
          </Box>
        </Section>
        <Section delay={0.3}>
          <Heading as={"h3"} variant="section-title">
            Bio
          </Heading>
          <BioSection>
            <BioYear>1999</BioYear>
            Born in Amman (عمان), Jordan.
          </BioSection>
          <BioSection>
            <BioYear>2017</BioYear>
            Internship at Jordan Computer Trading (JOCOM)
          </BioSection>
          <BioSection>
            <BioYear>2022</BioYear>
            Completed a Bachelor&apos;s degree in computer science
            from the University of Plymouth.
          </BioSection>
          <BioSection>
            <BioYear>2022</BioYear>
            Freelance work for Amanah Group - A real-estate company based
            in London, UK.
          </BioSection>
          <BioSection>
            <BioYear>2022</BioYear>
            Made contract with Piety Plymouth to create an app for muslims
            to keep track of prayer times and authenticate narrations (Volunteer)
          </BioSection>
          <BioSection>
            <BioYear>present</BioYear>
            Working as a freelancer and looking for a full stack job to further hone skills
          </BioSection>
        </Section>
        <Section delay={0.4}>
          <Heading as='h3' variant={"section-title"}>
            I ❤
          </Heading>
          <Paragraph>
            Reading || Writing || Travelling || Puzzles || Space || Mochi 🍡 
          </Paragraph>
        </Section>
      </Container>
    </Layout>
  )
}

export default Page
