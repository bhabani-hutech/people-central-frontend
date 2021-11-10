import React,{useState, useEffect} from 'react'
import 'antd/dist/antd.css'
import {Table} from 'antd'

const Employeelist = () => { 
    const [dataSourse, setdataSourse] = useState([])
    const [loading, setloading] = useState(false)
    useEffect(() => {
        setloading(true)
       fetch('/api/user/employee').then(res=>res.json()).then(data=>{
           setdataSourse(data)
       
        }).catch((err)=>{
        
            console.log(err)
        }).finally(()=>{
            setloading(false)
        })
         
    }, [])

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
          dataIndex:'empid',
          key:'key' 
        },
        {
            title:'name',
            dataIndex:'firstname',   
            key:'key', 

            // render:(completed)=>{
            //  return <p>{completed ? 'completed':'not completed'}</p>   
            // }
            sorter:(record1, record2)=>{
                return record1
            }
        },
        
        
        {
            
            title:'Email',
            dataIndex:'empemailid',   
            key:'key' 
        },
        {
            title:'Phone',
            dataIndex:'phone',   
            key:'key' 
        
        },
        {
          
            title:'designation',
            dataIndex:'designation',   
            key:'key' 
        },
        {
            title:'manageremail',
            dataIndex:'manageremailid',   
            key:'key' 
        },

        {
            title:'employee_type',
            dataIndex:'Employment',   
            key:'key' 
        },
        {
            title:'department',
            dataIndex:'department',   
            key:'key' 
    
        },
        {
            title:'placeofworking',
            dataIndex:'placeofworking',   
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