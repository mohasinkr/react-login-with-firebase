import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useUserAuth } from "../../context/UserAuthContext";
import { Alert } from "react-bootstrap";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const { signUp } = useUserAuth();
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    setMsg("");
    try {
      await signUp(email, password);
      setMsg("success");
      setTimeout(() => {
        navigate("/");
      }, 1000);
    } catch (err) {
      setMsg(err.message);
    }
  };

  return (
    <>
      <div className="p-4 box">
        <h2 className="mb-3">Firebase Auth Signup</h2>
        {msg === "" ? null : msg === "success" ? (
          <Alert variant="success">Success ✅</Alert>
        ) : (
          <Alert variant="danger">{msg}</Alert>
        )}
        <Form onSubmit={handleSignUp}>
          <Form.Group className="mb-3 text-dark" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check
              type="checkbox"
              label="I accept the terms & conditions here."
            />
          </Form.Group>
          <div className="d-grid gap-2">
            <Button variant="primary" type="Submit">
              Sign Up
            </Button>
          </div>
          <hr />
        </Form>
      </div>

      <div className="p-4 box mt-3 text-center">
        Already have an account? <Link to="/">Login</Link>
      </div>
    </>
  );
}

export default Signup;
