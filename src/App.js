import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Nav, Navbar, Row, Col} from "react-bootstrap";
import { Routes, Route } from 'react-router-dom'
import { useState } from "react";

// @@@ 서버에서 가져왔다고 치고 여긴 서버임
import productData from "./data";
import detail from "./components/detail";
// @@@ 서버에서 가져왔다고 치고 여긴 서버임

function App() {

  const [Data] = useState(productData)

  return (
    <div className="App">
      <>
        <Navbar bg="dark" data-bs-theme="dark">
          <Container>
            <Navbar.Brand href="/">NoMall</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/detail">상세페이지</Nav.Link>
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
        <Route path = "/detail" element={ <div>상세페이지임</div> }/>
        <Route path = "/about" element={ <div>어바웃페이지임</div> }/>
      </Routes>

    </div>
  );
}

function ProductList(props) {
  return (
    <Container>
      <Row>
        {props.Data.map((item) => (
          <Col key={item.id} xs={6} md={4}>
            <img src={`https://codingapple1.github.io/shop/shoes${item.id + 1}.jpg`} width="80%" alt=""/>
            <h4>{props.Data[item.id].title}</h4>
            <p>{props.Data[item.id].content}</p>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default App;
