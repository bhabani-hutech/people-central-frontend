/* eslint-disable no-unused-vars */
import { Avatar, Input, Table } from "antd";
import "antd/dist/antd.css";
// import { SearchOutlined } from "@ant-design/icons";
import axios from "axios";
import React, { useEffect, useState } from "react";
const { Search } = Input;
const Employeelist = () => {
  const [dataSourse, setdataSourse] = useState([]);
  const [loading, setloading] = useState(false);
  // const [searchState, setSearchState] = useState({
  //   searchText: "",
  //   searchedColumn: "",
  // });



  





  useEffect(() => {
    setloading(true);
    axios
      .get("https://peoplecentral.herokuapp.com/application/onboardedEmployees")
      .then((res) => {
        console.log(res.data);
        setdataSourse(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setloading(false);
      });
  }, []);
  const handleDes = (text, record) => {
  
    return <span>{record?.department?.departmentName} </span>;
  };
  const handleDes2 = (text, record) => {
    return <span>{record?.designation?.designationName} </span>;
  };
const onSearch = (value) => console.log(value);

  const handleimage = (text, record) => {
      console.log(record.empFirstName);
   var  fc=record.empFirstName
    var firstchar = fc.charAt(0)
     var lc = record.empLastName;
     var lastchar = lc.charAt(0);
    return (
      <span>
        {record?.image ? (
          <Avatar src={record.image} />
        ) : (
          <Avatar
            style={{
              background:
                "linear-gradient(147.6deg, #032848 -9.8%, #043968 117.16%)",
            }}
          >
            {firstchar}
            {lastchar}
          </Avatar>
        )}
        <span>
          {" "}
          {record?.empFirstName} {record?.empLastName}
        </span>
      </span>
    );
  };
 
  let columns = [
    {
      title: "ID",
      dataIndex: "empId",
      key: "key",
      fixed: "left",
    },
    {
      title: "Employee Name",
      dataIndex: "empFirstName",
      key: "key",
      fixed: "left",
      render: (text, record) => handleimage(text, record),
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

    // {
    //   title: "Email",
    //   dataIndex: "empEmail",
    //   key: "key",
    // },
    // {
    //   title: "Phone",
    //   dataIndex: "phnoeNumber",
    //   key: "key",
    // },
    {
      title: "Department",
      dataIndex: "department",
      key: "key",
      render: (text, record) => handleDes(text, record),
    },
    {
      title: "Designation",
      dataIndex: "designation",
      key: "key",
      render: (text, record) => handleDes2(text, record),
    },
    {
      title: "Manageremail",
      dataIndex: "managerEmail",
      key: "key",
    },

    // {
    //   title: "employee_type",
    //   dataIndex: "employeement",
    //   key: "key",
    // },

    {
      title: "Location",
      dataIndex: "address1",
      key: "key",
    },
  ];
  return (
    <>
      <div style={{ textAlign: "left",marginBottom:"2rem" }}>
        {" "}
        <Search
          placeholder="Search"
          allowClear
          onSearch={onSearch}
          style={{ width: 340 }}
        />
      </div>
      <div>
        <Table
          dataSource={dataSourse}
          loading={loading}
          columns={columns}
          pagination={{ pageSize: 15 }}
          scroll={{ x: 400 }}
        ></Table>
      </div>
    </>
  );
};

export default Employeelist;