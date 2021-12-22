// import React, {useState, useEffect} from 'react';
// import {Table} from "react-bootstrap";

// function GetBoughtShare() {

//     const [data, setData] = useState([]);


//     useEffect(() => {
//         getList();
//       }, []);

//       function getList() {
//         fetch("http://localhost:3000/boughtShare").then((result) => {
//           result.json().then((resp) => {
//             setData(resp);
//           });
//         });
//       }

//     return (<>
//     <div>
//         <Table striped bordered hover>
//             <thead>
//               <tr>
//                 <th>amount</th>
//                 <th>quantity</th>
//                 <th>company</th>
//               </tr>
//             </thead>
//             <tbody>
//                 {
//                     data.map((item) =>
//                         <tr key={item.id}>
//                             <td>{item.company}</td>
//                             <td>{item.amount}</td>
//                             <td>{item.quantity}</td>
//                         </tr>
//                     )
//                 }
//             </tbody>
//           </Table>
//           {
//               data.map((items) =>{
//                   <h1>{items.company}</h1>
//               })
//           }
//           </div>
//     </>
//     )
// }

// export default GetBoughtShare;
