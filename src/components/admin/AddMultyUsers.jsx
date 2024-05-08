import { useEffect, useState } from "react";
import * as XLSX from "xlsx";
import axios from '../../api/urls'


function AddMultyUsers() {

    const [data, setData] = useState([]);

    const handleFileUpload = (e) => {
        const reader = new FileReader();
        reader.readAsBinaryString(e.target.files[0]);
        reader.onload = (e) => {
            const data = e.target.result;
            const workbook = XLSX.read(data, { type: "binary" });
            const sheetName = workbook.SheetNames[0];
            const sheet = workbook.Sheets[sheetName];
            const parsedData = XLSX.utils.sheet_to_json(sheet);
            setData(parsedData);
           console.log(parsedData)
            sendUsers(parsedData);
        };

        const sendUsers =  (data) => {
            // try {
            //     const token = document.cookie.split('; ').find(row => row.startsWith('token=')).split('=')[1];
            //     const resp = await axios.post("/users/createUsers", { users: userData }, {
            //         headers: {
            //             'x-api-key': token,
            //             'Content-Type': 'application/json'
            //         }
            //     });
            //     console.log(resp.data);
            // } catch (err) {
            //     console.log(err);
            // }
            data.forEach(element => {
                element.password = String(element.password);
                element.ID = String(element.ID);
                element.role = [String(element.role)]; // Convert role value to an array
                newUsers(element);
                newUsers(element);
            });
        }
        const newUsers = async (data) => {
        try {
            const token = document.cookie.split('; ').find(row => row.startsWith('token=')).split('=')[1];
            const resp = await axios.post("/users", data, {
                headers: {
                    'x-api-key': token
                }
            });
            console.log(resp.data)

        }
        catch (err) {
            console.log(err);
        }
    }



    }


    return (
        <div className="App flex flex-col justify-center items-center">

            <input
                type="file"
                accept=".xlsx, .xls"
                onChange={handleFileUpload}
            />

            {data.length > 0 && (
                <table className="table">
                    <thead>
                        <tr>
                            {Object.keys(data[0]).map((key) => (
                                <th key={key}>{key}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((row, index) => (
                            <tr key={index}>
                                {Object.values(row).map((value, index) => (
                                    <td key={index}>{value}</td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}

           
        
        </div>
    );
}

export default AddMultyUsers;