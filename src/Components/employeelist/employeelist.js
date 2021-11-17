import React,{useState, useEffect} from 'react'
import 'antd/dist/antd.css'


import {Table, Avatar} from 'antd'
import axios from 'axios'
const Employeelist = () => { 
    const [dataSourse, setdataSourse] = useState([])
    const [loading, setloading] = useState(false)
    useEffect(() => {

        setloading(true)
    
    //    fetch('https://hutechpayrollapp.azurewebsites.net/application/onboardedEmployees').then(res=>res.json()).then(data=>{
    //        setdataSourse(data)
       
    //     }).catch((err)=>{
        
    //         console.log(err)
    //     }).finally(()=>{
    //         setloading(false)
    //     })
     
    axios.get('https://hutechpayrollapp.azurewebsites.net/application/onboardedEmployees').then((res)=>{
       console.log(res.data)
       setdataSourse(res.data)
    }).catch((err)=>{
        console.log(err) 
    
    
    
    }).finally(()=>{
         
        setloading(false)
    })
    }, [])
    const handleDes = (text, record) => {
        return (
          <span>
            {record?.department?.departmentName}    </span>
        );
      };
      const handleDes2 = (text, record) => {
        return (
          <span>
            {record?.designation?.designationName}    </span>
        );
      };

      const handleimage = (text, record) => {
        return (
          <span>
            {record?.image? <Avatar src={record.image}/>: null} 
            {record?.empFirstName}

               </span>
        );
      };
    // axios.all([])
    let data = [
        {
            empid:'1',
            name:'robert',
            
            email:'abc123@gmail.com',
            
            phone:'123456',
            designation:'hr',
            manageremail:'abc123@gmail.com',
            
            
            employee_type:'parttime',
            department:'civil',
            placeofworking:'banglore',             
            key:1
       
        },
        {
            empid:'2',
            name:'aron',
            
            email:'abc123@gmail.com',
            
            phone:'123456',
            designation:'hr',
            manageremail:'abc123@gmail.com',
            
            
            employee_type:'parttime',
            department:'civil',
            placeofworking:'banglore',             
           
            key:1
        },
    ]
    // striped
    let columns = [
        {
          title:'Employee ID',
          dataIndex:'empId',
          key:'key' 
        },
        {
            title:'name',
            dataIndex:'empFirstName',   
            key:'key', 
            render:(text, record) => handleimage(text, record)
            // render:(text, record)=>{
            //   return (

            //     <div>
            //         <img src={record.image} />
            //     </div>
            //   )
            // }
            // (theimage)=> <img src={theimage} />
            // sorter:(record1, record2)=>{
            //     return record1
            // }
        },
        
        
        {
            
            title:'Email',
            dataIndex:'empEmail',   
            key:'key' 
        },
        {
            title:'Phone',
            dataIndex:'phnoeNumber',   
            key:'key' 
        
        },
        {
          
            title:'designation',
            dataIndex:"designation",   
            key:'key', 
            render:(text, record) => handleDes2(text, record)

        },
        {
            title:'manageremail',
            dataIndex:'managerEmail',   
            key:'key' 
        },

        {
            title:'employee_type',
            dataIndex:'employeement',   
            key:'key' 
        },
        {
            title:'department',
            dataIndex:"department",   
            key:'key', 
            render:(text, record) => handleDes(text, record)
        },
        {
            title:'placeofworking',
            dataIndex:'address1',   
            key:'key' 
        },
    ]
    return (
        <div>


    <Table dataSource={dataSourse} loading={loading} columns={columns} pagination={{ pageSize:15}} scroll={{ x:400}} >
        
    
    </Table>              
        </div>
    )

}


export default Employeelist