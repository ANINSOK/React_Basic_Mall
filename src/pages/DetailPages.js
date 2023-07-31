import { useParams } from "react-router-dom";
import styled from 'styled-components'

let Btn = styled.button`
  background: ${ props => props.bg};
  color: ${ props => props.bg === 'blue' ? 'white' : ''};
  padding: 10px;
  font-size: 20px;
`
function DetailPages(props) {

  let { id } = useParams();
  let pagenum = props.Data.find((x) => x.id === parseInt(id));
  
  return(
    <div className="container">
      <Btn bg='blue'>Btn</Btn>
      <Btn bg='orange'>Btn</Btn>
      <div className="row">
        <div className="col-md-6">
          <img src={`https://codingapple1.github.io/shop/shoes${pagenum.id + 1}.jpg`} width="100%" alt=""/>
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{pagenum.title}</h4>
          <p>{pagenum.content}</p>
          <p>{pagenum.price}원</p>
          <button className="btn btn-danger">주문하기</button> 
        </div>
      </div>
    </div>
  )
}

export default DetailPages;