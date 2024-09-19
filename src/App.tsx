import { Routes, Route } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

import Login from "@/components/auth/Login";
import LoginWithCustomBackend from "@/components/auth/LoginWithCustomBackend";
import Signup from "@/components/auth/Signup";
import Home from "@/components/Home";
import ProtectedRoute from "@/components/auth/ProtectedRoute";

import { UserAuthContextProvider } from "@/context/UserAuthContext";

import "./App.css";

function App() {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <UserAuthContextProvider>
              <Routes>
                <Route path="/" element={<Login />} />
                <Route
                  path="/custom-login"
                  element={<LoginWithCustomBackend />}
                />
                <Route
                  path="/home"
                  element={
                    <ProtectedRoute>
                      <Home />
                    </ProtectedRoute>
                  }
                />
                <Route path="/signup" element={<Signup />} />
              </Routes>
            </UserAuthContextProvider>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
