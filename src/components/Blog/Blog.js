import React from 'react'
import { Link } from "react-router-dom";
import { Card, Avatar, Col } from 'antd';
import { EllipsisOutlined, SettingOutlined, EditOutlined } from '@ant-design/icons';

const { Meta } = Card;

function Blog({blog}) {
  return (
    <Col lg={8} md={12} xs={24}>
      <Link to={`/blogs/${blog.title}`}>
        <Card
          hoverable
          style={{ width: 370, marginTop: 16 }}
          actions={[
            <SettingOutlined />,
            <EditOutlined />,
            <Link to={`/blogs/${blog.title}`}> <EllipsisOutlined/></Link>,
          ]}
        >
          <Meta
            avatar={
              <Avatar />
            }
            title={blog.author}
            description={blog.title}
          />
          <div style={{ height: 150, overflowY: 'scroll', marginTop: 10 }}>
            <div dangerouslySetInnerHTML={{ __html: blog.content }} />
          </div>
        </Card>
      </Link>
    </Col>
  )
}

export default Blog
