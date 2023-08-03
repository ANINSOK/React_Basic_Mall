import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import styled from 'styled-components'

function DetailPages(props) {
    // 할인이벤트 문구
  const [showAlert, setShowAlert] = useState(true);
  useEffect(() => {
    // This will be executed after the component mounts
    let timer = setTimeout(() => {
      setShowAlert(false); // Hide the alert after 2 seconds
    }, 2000);
    return()=>{
      clearTimeout(timer)
    }
  }, [showAlert]); // Adding props.Data as a dependency

  let { id } = useParams();
  let pagenum = props.Data.find((x) => x.id === parseInt(id));
  
  // 주문수량 갯수 입력
  const [num, setNum] = useState('');

  useEffect(() => {
    if (isNaN(num) === true) {
      alert('숫자만 입력하세요');
    }
  }, [num]);

  // Function to handle input change and store numeric value only
  const handleInputChange = (e) => {
    const inputVal = e.target.value;
    const numericVal = inputVal.replace(/\D/g, ''); // Remove all non-numeric characters
    setNum(numericVal);
  };

  return(
    <div className="container">
      {showAlert && <div className="alert alert-warning">2초 안에 구매시 특가 할인!</div>}
      <div className="row">
        <div className="col-md-6">
          <img src={`https://codingapple1.github.io/shop/shoes${pagenum.id + 1}.jpg`} width="100%" alt=""/>
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{pagenum.title}</h4>
          <p>{pagenum.content}</p>
          <p>{pagenum.price}원</p>
          <input value={num} onChange={handleInputChange}></input>
          <button className="btn btn-danger">주문하기</button> 
        </div>
      </div>
    </div>
  )
}

export default DetailPages;