/* eslint-disable no-unused-vars */
import React,{useState} from 'react'
import {Form, Input, Button} from 'antd'


import {CloseOutlined, CheckOutlined} from '@ant-design/icons'
const Holiday = () => {
    const [componentSize, setComponentSize] = useState('default') 
        
  let [form] = Form.useForm()
    const onFinish = (values) => {
    
      console.log("Success:", values);
      
    form.resetFields()
    };
    let handleclear = ()=>{
    form.resetFields()
    
    
    }  

    return (    

<div>          
    <Form 
     labelCol={{
        span: 4,
      }}
      wrapperCol={{
        span: 14,
      }}
      layout="horizontal"
      initialValues={{
        size: componentSize,
      }}
      // onValuesChange={onFormLayoutChange}
      
      size={componentSize}
      form={form} 
      onFinish={onFinish}
    
    >
     {/* <Form.Item label="Input">
          <Input />
        </Form.Item>   */}

     

      <Form.Item
                label="Holiday"
                name="Holiday"
                rules={[
                  {
                    required: true,
                    message: "Please input holiday name",
                  },
                ]}
              >
                <div className="wrapasterik">
                  {/* <span className="asterik">*</span> */}
                  <Input style={{width:'50%'}} placeholder="Holiday Name" />
                </div>
              </Form.Item> 
      <Form.Item
                  name="holiday date"
                  label="Date of holiday"

                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                <div className="wrapasterik">
                  {/* <span className="asterik">*</span> */}
                  <Input style={{width:'50%'}} placeholder="Holiday Date" />
                </div> 
                  {/* <DatePicker
                    placeholder="DD/MM/YYYY"
                  style={{ width: "50%" }}
                    
/> */}
                 
                </Form.Item>            
    
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button onClick={handleclear} icon={<CloseOutlined />} className="cancelbtn">
              Cancel
            </Button>
            <Button
              htmlType="submit"
              className="savebtn"
              icon={<CheckOutlined />}
            >
              Save
            </Button>
          </Form.Item>
    </Form> 
        </div>   
    )
  // holiday calender
  //  view employee
}
export default Holiday