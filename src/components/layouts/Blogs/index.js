import React from 'react';
import { blogs } from "../../Constants/Blogs";
import Blog from '../../Blog/Blog';
import { Typography, Row } from 'antd';

const { Title } = Typography

function Blogs() {
  return (
    <div style={{ width: '85%', margin: '3rem auto' }}>
      <Title level={2}> Blogs </Title>
      <Row gutter={[32, 16]}>
        {blogs && blogs.map(blog => (
          <Blog key={blog.id} blog={blog} col={3}/>
        ))}
      </Row>
    </div>
  )
}

export default Blogs
