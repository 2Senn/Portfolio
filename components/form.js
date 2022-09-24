import {
  FormControl,
  Input,
  Heading,
  FormLabel,
  FormHelperText,
  FormErrorMessage,
  Textarea,
  Button,
  Container
} from "@chakra-ui/react";
import axios from "axios";
import { useCallback, useState } from 'react'
import Section from '../components/section'
import P from '../components/paragraph'

const Form = () => {

  // Input validation
  const [input, setInput] = useState('')
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const handleInputChange = (e) => setInput(e.target.value)
  const handleEmailChange = (e) => setEmail(e.target.value)
  const handleNameChange = (e) => setName(e.target.value)


  // Formspree API
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null }
  })
  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleOnChange = useCallback(e => {
    e.persist()
    setInputs(prev => ({
      ...prev,
      [e.target.id]: e.target.value
    }))
    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null }
    })
  }, [])

  const handleServerResponse = useCallback((ok, msg) => {
    if (ok) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg }
      })
      setInputs({
        name: '',
        email: '',
        message: '',
      })
    } else {
      setStatus({
        info: { error: true, msg: msg }
      })
    }
  }, [])

  const handleOnSubmit = useCallback(e => {
    e.preventDefault()
    setStatus((prevStatus) => ({ ...prevStatus, submitting: true }))
    axios({
      method: 'POST',
      url: process.env.NEXT_PUBLIC_CONTACT_FORM_ENDPOINT_URL,
      data: inputs,
    }).then(_respponse => {
      handleServerResponse(true, 'Thank you, your message has been sent.')
    })
  }, [inputs, handleServerResponse])

  const isErrorInput = inputs.message === ''
  const isErrorName = inputs.name === ''
  const isErrorEmail = inputs.email === ''

  return (
    <form onSubmit={handleOnSubmit}>
      {status.submitted ? (
        <Container>
          <Section delay={0.1}>
            <P>
              Your message has been successfully sent. We will contact you soon! 
            </P>
          </Section>
        </Container>
      ) : (
      <>
        <FormControl isInvalid={isErrorName} mb={4} pt={4}>
          <FormLabel>Name</FormLabel>
          <Input 
            id="name" 
            name="name" 
            value={inputs.name} 
            onChange={handleOnChange}
            required
            placeholder="Your name / Company name"
            maxLength={128}
          />
          {!isErrorName ? (
            <FormHelperText>
              Please input your name.
            </FormHelperText>
          ) : (
            <FormErrorMessage>Name is required.</FormErrorMessage>
          )}
        </FormControl>
        <FormControl isInvalid={isErrorEmail} mb={4} pt={4} >
          <FormLabel>Email</FormLabel>
          <Input 
            type="email" 
            id="email" 
            name="email" 
            value={inputs.email} 
            onChange={handleOnChange} 
            required
            placeholder="Your email"
            maxLength={128}
          />
          {!isErrorEmail ? (
            <FormHelperText >
              Please input your Email.
            </FormHelperText>
          ) : (
            <FormErrorMessage>Email is required.</FormErrorMessage>
          )}
        </FormControl>
        <FormControl isInvalid={isErrorInput} mb={4} pt={4} >
          <FormLabel>Your Message</FormLabel>
          <Textarea
            type="text"
            id="message"
            name="message"
            placeholder="Type your message here..."
            value={inputs.message}
            onChange={handleOnChange}
            maxLength={1048576}
          />
          {!isErrorInput ? (
            <FormHelperText >
              Your message.
            </FormHelperText>
          ) : (
            <FormErrorMessage>Message is required.</FormErrorMessage>
          )}
        </FormControl>
        <Button type="submit" colorScheme={'teal'} >
          {!status.submitting 
            ? !status.submitted 
              ? 'Submit'
              : 'Submitted'
              : 'Submitting...'}
        </Button>
      </>
      )}
    </form>
  )
}

export default Form
