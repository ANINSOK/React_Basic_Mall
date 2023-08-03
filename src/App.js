import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Nav, Navbar, Row, Col} from "react-bootstrap";
import { Routes, Route, useNavigate } from 'react-router-dom'
import { useState } from "react";

// @@@ 서버에서 가져왔다고 치고 여긴 서버임
import productData from "./components/data";
import DetailPages from "./pages/DetailPages";
import AboutPages from "./pages/AboutPages";
import event from "./pages/eventpage";
// @@@ 서버에서 가져왔다고 치고 여긴 서버임

function App() {
  const navigate = useNavigate()
  const [Data] = useState(productData)

  const [eventpage] = useState(event)

  

  return (
    <div className="App">
      <>
        <Navbar bg="dark" data-bs-theme="dark">
          <Container>
            <Navbar.Brand onClick={()=>{ navigate('/') }}>NoMall</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link onClick={()=>{ navigate('/detail') }}>상세페이지</Nav.Link>
              <Nav.Link onClick={()=>{ navigate('/about') }}>About</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </>

      <Routes>
        <Route path = "/" element={
          <>
            <div className="main-bg"></div>
            <ProductList Data = {Data}/>
          </>
          }/>
        <Route path="/detail/:id" element={ <DetailPages Data = {Data}/> }/>
        <Route path = "*" element={ <div>없는페이지에요?</div> }/>
        <Route path="/about" element={ <AboutPages/> }>
          <Route path="member" element={ <div>멤버임</div> }/>
          <Route path="location" element={ <div>위치정보임</div> }/>
        </Route>
        <Route path="/event" element={ <>{eventpage}</> }>
          <Route path="one" element={ <div><h4>첫 주문시 양배추즙 서비스</h4></div> }/>
          <Route path="two" element={ <div><h4>생일기념 쿠폰받기</h4></div> }/>
        </Route>
        
        <Route path = "*" element={ <div>없는페이지에요?</div> }/>
      </Routes>

    </div>
  );
}

function ProductList(props) {
  return (
    <Container>
      <Row>
        {props.Data.map((item) => (
          <Col key={item.id} xs={6} md={4} path = "/detail">
            <img src={`https://codingapple1.github.io/shop/shoes${item.id + 1}.jpg`} width="80%" alt=""/>
            <h4>{props.Data[item.id].title}</h4>
            <p>{props.Data[item.id].price}원</p>
            <p>{props.Data[item.id].content}</p>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default App;
