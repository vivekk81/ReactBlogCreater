import React, {useState} from 'react'
import QuillEditor from '../Editor/QuillEditor';
import BlogPrivew from './BlogPrivew';
import { Typography, Button, Input, Row, Col  } from 'antd';
// import axios from 'axios';

const { Title } = Typography;

function Create({history}) {
  const [content, setContent] = useState("")
  const [files, setFiles] = useState([])
  const [author, setAuthor] = useState("")
  const [title, setTitle] = useState("")
  const [privew, setPreview] = useState(false);
  const [data, setData] = useState(null);

  const onEditorChange = (value) => {
    setContent(value)
  }

  const onFilesChange = (files) => {
    setFiles(files)
  }

  const onSubmit = (event) => {
    event.preventDefault();
    let date = new Date();
    const today = date.getDate() + "/" +
      (date.getMonth() + 1) + "/" +
      date.getFullYear();

    const variables = {
      content,
      author,
      title,
      id: Date.now(),
      createdAt: today
    }

    setData(variables);
    setPreview(true);
  }
  
  const handlePreviewOK = () => {
    setPreview(false);
    history.push("/blogs")
  }

  return (
    <div style={{ maxWidth: '700px', margin: '2rem auto' }}>
      <Row gutter={[32, 16]} style={{marginBottom: "2%"}}>
        <Col lg={12} md={12} xs={24}>
          <Input placeholder="Author" value={author} onChange={(e)=>setAuthor(e.target.value)}/>
        </Col>
        <Col lg={12} md={12} xs={24}>
          <Input placeholder="Title" value={title} onChange={(e)=>setTitle(e.target.value)}/>
        </Col>
      </Row>
      <div style={{ textAlign: 'center' }}>
        <Title level={2} > Editor</Title>
      </div>
      <QuillEditor
        placeholder={"Start Posting Something"}
        onEditorChange={onEditorChange}
        onFilesChange={onFilesChange}
      />

      <div style={{ textAlign: 'center', margin: '2rem', }}>
        <Button type="primary" shape="round" onClick={onSubmit} disabled={!(title.length && author.length)}>
          Submit
        </Button>
      </div>
      {privew &&
        <BlogPrivew
          title={title}
          data={data}
          onCancel={()=>setPreview(false)}
          onOk={handlePreviewOK}
        />
      }
    </div>
  )
}

export default Create
