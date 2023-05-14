import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../App.css';
import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import { useUserAuth } from '../context/UserAuthContext';
import { Alert } from 'react-bootstrap';

function Signup() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error,setError] = useState('');
  const {signUp} = useUserAuth();

  const handleSignUp = async (e) => {
    e.preventDefault();
    setError('');
    try{
      await signUp(email,password);
    }
    catch(err){
      setError(err.message);
    }
  };

  return (
    <>
      <div className="p-4 box">
        <h2 className="mb-3">Firebase Auth Signup</h2>
        {error && <Alert variant='danger'>{error}</Alert>}
        <Form onSubmit={handleSignUp}>
          <Form.Group className="mb-3 text-dark" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" onChange={
              (e) => setEmail(e.target.value)} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="I accept the terms & conditions here." />
          </Form.Group>
          <div className="d-grid gap-2">
            <Button variant="primary" type="Submit">
              Sign Up
            </Button>
          </div>
          <hr />
        </Form>
      </div>

      <div className='p-4 box mt-3 text-center'>
        Already have an account? {' '}
        <Link to='/'>Login</Link>
      </div>
    </>
  )
}

export default Signup