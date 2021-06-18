import React, {useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import { Layout, Menu } from 'antd';

const { Header } = Layout;


const NavBar = () => {

  const [current, setCurrent] = useState("1")
  useEffect(()=>{
    const path = window.location.pathname
    if(path === "/")
      setCurrent("1")
    else if(path === "/blogs")
      setCurrent("2")
    else if(path === "/blogs/new")
      setCurrent("3")
    else {
      alert("set path in Header file")
      setCurrent("1");
    }
  },[])

  return (
    <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        onClick={e=>setCurrent(e.key)}
        selectedKeys={[current]}
      >
        <Menu.Item key="1">
          <Link to={"/"}>
            Home
          </Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to={"/blogs"}>
            Blogs
          </Link>
        </Menu.Item>
        <Menu.Item key="3">
          <Link to="/blogs/new">
            Add Blog
          </Link>
        </Menu.Item>
      </Menu>
    </Header>
  )
}

export default NavBar
