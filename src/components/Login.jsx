import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../App.css';
import GoogleButton from 'react-google-button';

function Login() {

  const handleGoogleSignIn = async (e)=>{
    
  }


  return (
    <>
      <div className="p-4 box">
        <h2 className="mb-3">Firebase Auth Login</h2>
        <Form>
          <Form.Group className="mb-3 text-dark" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="I accept the terms & conditions here." />
          </Form.Group>
          <div className="d-grid gap-2">
            <Button variant="primary" type="Submit">
              Log In
            </Button>
          </div>
          <hr />
          <div>
            <GoogleButton className='g-btn' onClick={handleGoogleSignIn} />
          </div>
        </Form>
      </div>
    </>
  )
}

export default Login;