import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../App.css';
import GoogleButton from 'react-google-button';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  const handleGoogleSignIn = async (e)=>{

  }

  const handleLogin = ()=>{ 
   navigate('/home');
  }


  return (
    <>
      <div className="p-4 box">
        <h2 className="mb-3">Firebase Auth Login</h2>
        <Form>
          <Form.Group className="mb-3 text-dark" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="I accept the terms & conditions here." />
          </Form.Group>
          <div className="d-grid gap-2">
            <Button variant="primary" type="Submit" onClick={handleLogin}>
              Log In
            </Button>
          </div>
          <hr />
          <div>
            <GoogleButton className='g-btn' onClick={handleGoogleSignIn} />
          </div>
        </Form>
      </div>

      <div className='p-4 box mt-3 text-center'>
        Don't have an account? {' '}
        <Link to='/signup'>Signup</Link>
      </div>
    </>
  )
}

export default Login;