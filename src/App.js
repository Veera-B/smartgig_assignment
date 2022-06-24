import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { getUsers } from './containers/userSlicer';
import { Container,Row,Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css'; 

function App() {
  const users = useSelector(state=>state.users.users);
  const dispatch = useDispatch();
  const [initUser,setInitUsers] = useState([]);
  if(initUser?.length === 0 && users.length>1){
    setInitUsers([...initUser,...users.slice(0,10)]);
  }
  const onClickMore = () => {
    //console.log("spliced initUser",initUser.length);
    setInitUsers([...initUser,...users.slice(initUser.length,10+initUser.length)]);

  }
 // console.log("spliced initUser",initUser);
  useEffect(()=>{
   dispatch(getUsers());
  },[dispatch]);
  return (
    <Container>
      <Row  className="mx-0">
        
        {initUser.map(user=>(
         <Col md="4" key={user.id}> <Card style={{ width: '100%' }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>{user.name}</Card.Title>
            <Card.Text>
              {user.description}
            </Card.Text>
          </Card.Body>
          </Card></Col>
        ))}
        
      </Row>
      <Row>
        <Col style={{textAlign : 'center',marginBottom:'25px'}}>
        <br/>
        <Button onClick={onClickMore}>More</Button>
        </Col>
      </Row>
  </Container>
  );
}

export default App;
