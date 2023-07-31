import { Outlet } from "react-router-dom";
import styled from 'styled-components'

let Ybtn = styled.button`
  background ; yellow;
  color = white;
  padding : 10px;
  pont-size : 20px;
`

function AboutPages() {
  return (
  <div>
    <div>회사 정보</div>
    <Outlet></Outlet>
    <Ybtn>Button</Ybtn>
  </div>
  )
}

export default AboutPages;
