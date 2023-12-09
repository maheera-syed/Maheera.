import React from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

const Contact = () => {
  return (
    <div className='mt-4 container col-sm-6'>
      <Form>
        <Form.Group className='mb-3' controlId='formBasicEmail'>
          <Form.Label>Email</Form.Label>
          <Form.Control type='email' placeholder='example@example.com' />
          <Form.Text className='text-muted'></Form.Text>
        </Form.Group>
        <Button variant='dark' type='submit'>
          Submit
        </Button>
      </Form>
    </div>
  )
}

export default Contact
