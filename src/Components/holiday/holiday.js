import React,{useState} from 'react'
import {Form, Input, DatePicker, Button} from 'antd'


import {CloseOutlined, CheckOutlined} from '@ant-design/icons'
const Holiday = () => {
    const [componentSize, setComponentSize] = useState('default') 
        
  let [form] = Form.useForm()
    const onFinish = (values) => {
    
      console.log("Success:", values);
    
      let date = values.holiday_date
      let correct_date = date.match(/^([0]?[1-9]|[1|2][0-9]|[3][0|1])[./-]([0]?[1-9]|[1][0-2])[./-]([0-9]{4}|[0-9]{2})$/)
      

      if(!correct_date){
        
        alert('date not valid')
      }
    
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
                  name="holiday_date"
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
            {/* <Button onClick={handleclear} icon={<CloseOutlined />} className="cancelbtn">
              Cancel
            
            </Button> */}

            <Button
              onClick={handleclear}
              style={{borderRadius:'5px'}}
              icon={<CloseOutlined />}
            >
              Cencel
            </Button>&nbsp;&nbsp;
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