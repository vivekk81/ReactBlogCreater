import React from 'react'
import { Modal } from 'antd';
import BlogDetails from './BlogDetails';
import { triggerFocus } from 'antd/lib/input/Input';

function BlogPrivew({data, onOk, onCancel, title}) {
  return (
    <Modal
      title="Preview"
      centered
      visible={triggerFocus}
      onOk={onOk}
      onCancel={onCancel}
      width={700}
    >
      <BlogDetails title={title} data={data} />
    </Modal>
  )
}

export default BlogPrivew
