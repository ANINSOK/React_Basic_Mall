import { Outlet } from "react-router-dom";

function AboutPages() {
  return (
  <div>
    <div>회사 정보</div>
    <Outlet></Outlet>
  </div>
  )
}

export default AboutPages;
