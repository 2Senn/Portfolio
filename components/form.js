import {
  FormControl,
  Input,
  FormLabel,
  FormHelperText,
  FormErrorMessage,
  Textarea,
  Button
} from "@chakra-ui/react";
import { useState } from 'react'

const Form = () => {

  const [input, setInput] = useState('')
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const handleInputChange = (e) => setInput(e.target.value)
  const handleEmailChange = (e) => setEmail(e.target.value)
  const handleNameChange = (e) => setName(e.target.value)

  const isErrorInput = input === ''
  const isErrorName = name === ''
  const isErrorEmail = email === ''

  return (
    <>
      <FormControl isInvalid={isErrorName}>
        <FormLabel>Name</FormLabel>
        <Input type="text" value={name} onChange={handleNameChange} />
        {!isErrorName ? (
          <FormHelperText>
            Please input your name.
          </FormHelperText>
        ) : (
          <FormErrorMessage>Name is required.</FormErrorMessage>
        )}
      </FormControl>
      <FormControl isInvalid={isErrorEmail} mb={4} pt={4}>
        <FormLabel>Email</FormLabel>
        <Input type="email" value={email} onChange={handleEmailChange} />
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
          placeholder="Type here..."
          value={input}
          onChange={handleInputChange}

        />
        {!isErrorInput ? (
          <FormHelperText >
            Your message.
          </FormHelperText>
        ) : (
          <FormErrorMessage>Message is required.</FormErrorMessage>
        )}
      </FormControl>
      <Button colorScheme={'teal'}>Submit</Button>
    </>
  )
}

export default Form
