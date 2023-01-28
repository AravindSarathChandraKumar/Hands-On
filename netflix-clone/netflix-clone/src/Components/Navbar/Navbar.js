import React,{useState,useEffect} from 'react'
import './Navbar.css';
function Navbar() {

  const[show,setShow] = useState(false);
  const hideNavbar = ()=>{
    if(window.scrollY>100){
      setShow(true)
    }else{
      setShow(false)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll",hideNavbar);
    return ()=> window.removeEventListener("scroll",hideNavbar);
  },[])
  
  return (
    <div className="nav container-fluid">
      <div className={`nav_contents ${show && 'nav_black'}`}>
      <img className="logo col-sm-6"src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="" />
         <img className="avatar" src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" alt="" />
      </div>
    </div>
  )
}

export default Navbar