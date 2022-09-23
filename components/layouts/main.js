import { Box, Container } from "@chakra-ui/react";
import Navbar from '../navbar'
import NoSsr from '../ssr'
import Head from "next/head";
import ThreeModel from '../threeModel'

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Faisal Jweihan - Homepage</title>
      </Head>

      <Navbar path={router.asPath} />

      <Container maxW={"container.md"} pt={14}>
        <NoSsr>
          <ThreeModel />
        </NoSsr>
        {children}
      </Container>

    </Box>
  )
}


export default Main
