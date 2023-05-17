import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "../App.css";
import GoogleButton from "react-google-button";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";
import { useState } from "react";
import { Alert } from "react-bootstrap";

function Login() {
  const navigate = useNavigate();
  const { login,GoogleSignIn} = useUserAuth();

  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [msg, setMsg] = useState("");


  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try{
      await GoogleSignIn();
    }
    catch(err){
      console.log(err.message);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try{
      const loginData = await login(email,password);
      setMsg('success');
      setTimeout(()=>{
        navigate("/home");
      },1500)
      
    }
    catch(err){
      setMsg(err.message);
    }    
    
  };

  return (
    <>
      <div className="p-4 box">
        <h2 className="mb-3">Firebase Auth Login</h2>
        {msg === "" ? null : msg === "success" ? (
          <Alert variant="success">Success ✅</Alert>
        ) : (
          <Alert variant="danger">❌ {msg}</Alert>
        )}
        <Form onSubmit={handleLogin}>
          <Form.Group className="mb-3 text-dark" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" onChange={(e)=>{
              setEmail(e.target.value);
            }}/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" onChange={
              (e)=>{
                setPassword(e.target.value);
              }
            }/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check
              type="checkbox"
              label="I accept the terms & conditions here."
            />
          </Form.Group>
          <div className="d-grid gap-2">
            <Button variant="primary" type="Submit">
              Log In
            </Button>
          </div>
          <hr />
          <div>
            <GoogleButton className="g-btn" onClick={handleGoogleSignIn} />
          </div>
        </Form>
      </div>

      <div className="p-4 box mt-3 text-center">
        Don't have an account? <Link to="/signup">Signup</Link>
      </div>
    </>
  );
}

export default Login;
