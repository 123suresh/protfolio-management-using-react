import React from 'react';

function GetBoughtShare() {

//     const [boughtShareData, setBoughtShareData] = useState([]);


//     useEffect(() => {
//         getListBoughtShare();
//       }, []);
    
//   function getListBoughtShare() {
//     fetch().then((results) => {
//       results.json().then((resp) => {
//         setBoughtShareData(resp);
//       });
//     });
//   }

//   console.log(boughtShareData)


    return (
        <div>
            {/* <table>
                <thead>
                <tr>
                    <td>company</td>
                    <td>quantity</td>
                    <td>amount</td>
                </tr>
                </thead>
                <tbody>
                    {
                        boughtShareData.map((item) => 
                        <tr key={item.id}>
                            <td>{item.company}</td>
                            <td>{item.quantity}</td>
                            <td>{item.amount}</td>
                        </tr>
                        )
                    }
                </tbody>
            </table> */}
            <h1>get share table</h1>
        </div>
    )
}

export default GetBoughtShare
