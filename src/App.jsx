import {Routes,Route} from 'react-router-dom';
import { Container,Row,Col } from 'react-bootstrap';

import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
import ProtectedRoute from './components/ProtectedRoute';

import {UserAuthContextProvider} from './context/UserAuthContext';

import './App.css'

function App() {

  return (
    <>
      <Container>
        <Row>
          <Col>
          <UserAuthContextProvider>
          <Routes>
            <Route path='/' element={<Login/>} />
            <Route path='/home' element={
            <ProtectedRoute><Home/></ProtectedRoute>
           }/>
            <Route path='/signup' element={<Signup/>} />            
          </Routes>
          </UserAuthContextProvider>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default App;
