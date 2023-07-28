import { useParams } from "react-router-dom";

function DetailPages(props) {

  let {id}= useParams()
  
  return(
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img src={`https://codingapple1.github.io/shop/shoes${props.Data[id].id + 1}.jpg`} width="100%" alt=""/>
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{props.Data[id].title}</h4>
          <p>{props.Data[id].content}</p>
          <p>{props.Data[id].price}원</p>
          <button className="btn btn-danger">주문하기</button> 
        </div>
      </div>
    </div>
  )
}

export default DetailPages;