import React, { useState, useEffect } from "react";
import { Button } from "antd";
import "antd/dist/antd.css";
const Clock = () => {
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0)
  const [second, setSecond] = useState(0);
  const [milisecond, setMilisecond] = useState(0);
  const [stop, setStop] = useState(true);
  const handelClock = () => {
    console.log("webclock")
  }
  return (
    <div>
      <span>
        {hour}:{minute}:{second}:{milisecond}
      </span>
      <Button onClick={handelClock} className="savebtn"></Button>
    </div>
  );
};

export default Clock;

// import React, { useState, useEffect } from "react";
// import { Button } from "antd";
// import "antd/dist/antd.css";
// const Clock = () => {
//   const [clockstate, setClockState] = useState("Web Clock-Out");
//   const [timerState, setTimerState] = useState({
//       timerStated: false,
//       timerStopped: true,
//       hours: 0,
//       minutes: 0,
//       seconds: 0,
//       miliseconds:0,
//       captures:[]
//   })
//     const handelClock = (e) => {
//         e.preventDefault();
//         console.log(clockstate);
//         if (timerState.timerStopped) {
//             setTimerState({ timerStated: true, timerStopped: false });
//             setClockState(timerState.hours + ":" + timerState.minutes + ":" + timerState.seconds + ":" + timerState.miliseconds);
//              let interval = 0;
//             if (timerState.timerStopped) {
//                  console.log(timerState.timerStopped);
//                interval = setInterval(() => {
//                  if (timerState.minutes > 59) {
//                    timerState.hours = timerState.hours + 1;
//                    timerState.minutes = 0;
//                    clearInterval(interval);
//                  }
//                  if (timerState.seconds > 59) {
//                    timerState.minutes = timerState.minutes + 1;
//                    timerState.seconds = 0;
//                    clearInterval(interval);
//                  }
//                  if (timerState.miliseconds > 999) {
//                    timerState.seconds = timerState.seconds + 1;
//                    timerState.miliseconds = 0;
//                    clearInterval(interval);
//                  }
//                  if (timerState.miliseconds <= 999) {
//                    timerState.miliseconds = timerState.miliseconds + 1;
//                  }
//                }, 500);
//              } else {
//                clearInterval(interval);
//              }
//              return () => {
//                clearInterval(interval);
//              };
//         }
//         else {
//             setTimerState({ timerStated: false, timerStopped: true });
//         }

//   };

//   return (
//     <div>
//       <Button onClick={handelClock} className="savebtn">
//         <span>{clockstate}</span>
//       </Button>
//     </div>
//   );
// };

// export default Clock;

// import React,{ useState,useEffect} from 'react'
// import { Button } from "antd";
// import "antd/dist/antd.css";
// const Clock = () => {
//     const [clockstate, setClockState] = useState();
//     // const [timerState, setTimerState] = useState({
//     //     timerStated: false,
//     //     timerStopped: true,
//     //     hours: 0,
//     //     minutes: 0,
//     //     seconds: 0,
//     //     captures:[]
//     // })
//     const handelClock = () => {
//         console.log(clockstate);
//         // setClockState(timerState.hours + ":" + timerState.minutes + ":" + timerState.seconds);

//     }
//     useEffect(() => {
//       setInterval(() => {
//           const date = new Date();
//           setClockState(date.toLocaleTimeString())
//       }, 1000);
//     }, [])
//     return (
//       <div>
//         <Button  onClick={handelClock}className="savebtn">
//                 {/* {clockstate} */}
//                 Web Clock
//         </Button>
//       </div>
//     );
// }

// export default Clock
