// import React, { useState } from "react";
// import Papa from "papaparse";
 
// // Allowed extensions for input file
// const allowedExtensions = ["csv"];
 
// const Papaparsing = () => {
     
//     // This state will store the parsed data
//     const [data, setData] = useState([]);
     
//     // It state will contain the error when
//     // correct file extension is not used
//     const [error, setError] = useState("");
     
//     // It will store the file uploaded by the user
//     const [file, setFile] = useState("");
 
//     // This function will be called when
//     // the file input changes
//     const handleFileChange = (e) => {
//         setError("");
         
//         // Check if user has entered the file
//         if (e.target.files.length) {
//             const inputFile = e.target.files[0];
             
//             // Check the file extensions, if it not
//             // included in the allowed extensions
//             // we show the error
//             const fileExtension = inputFile?.type.split("/")[1];
//             if (!allowedExtensions.includes(fileExtension)) {
//                 setError("Please input a csv file");
//                 return;
//             }
 
//             // If input type is correct set the state
//             setFile(inputFile);
//         }
//     };
//     const handleParse = () => {
         
//         // If user clicks the parse button without
//         // a file we show a error
//         if (!file) return setError("Enter a valid file");
 
//         // Initialize a reader which allows user
//         // to read any file or blob.
//         const reader = new FileReader();
         
//         // Event listener on reader when the file
//         // loads, we parse it and set the data.
//         reader.onload = async ({ target }) => {
//             const csv = Papa.parse(target.result, { header: true });
//             const parsedData = csv?.data;
//             const columns = Object.keys(parsedData[0]);
//             setData(columns);
//         };
//         reader.readAsText(file);
//     };
 
//     return (
//         <div>
//             <label htmlFor="csvInput" style={{ display: "block" }}>
//                 Enter CSV File
//             </label>
//             <input
//                 onChange={handleFileChange}
//                 id="csvInput"
//                 name="file"
//                 type="File"
//             />
//             <div>
//                 <button onClick={handleParse}>Parse</button>
//             </div>
//             <div style={{ marginTop: "3rem" }}>
//                 {error ? error : data.map((col,
//                   idx) => <div key={idx}>{col}</div>)}
//             </div>
//         </div>
//     );
// };
 
// export default Papaparsing;

import { useState } from "react";
import Papa from "papaparse";
import './Papaparsing.css'

function Papaparsing() {
  // State to store parsed data
  const [parsedData, setParsedData] = useState([]);

  //State to store table Column name
  const [tableRows, setTableRows] = useState([]);

  //State to store the values
  const [values, setValues] = useState([]);

  const changeHandler = (event) => {
    // Passing file data (event.target.files[0]) to parse using Papa.parse
    Papa.parse(event.target.files[0], {
      header: true,
      skipEmptyLines: true,
      complete: function (results) {
        const rowsArray = [];
        const valuesArray = [];

        // Iterating data to get column name and their values
        results.data.map((d) => {
          rowsArray.push(Object.keys(d));
          valuesArray.push(Object.values(d));
          
        });

        // Parsed Data Response in array format
        setParsedData(results.data);
        console.log(results.data);


        // Filtered Column Names
        setTableRows(rowsArray[0]);

        // Filtered Values
        setValues(valuesArray);
      },
    });
  };

  return (
    <div>
      {/* File Uploader */}
      <input
        type="file"
        name="file"
        onChange={changeHandler}
        accept=".csv"
        style={{ display: "block", margin: "10px auto" }}
      />
      <br />
      <br />
      {/* Table */}
      <table>
        <thead>
          <tr>
            {tableRows.map((rows, index) => {
              return <th key={index}>{rows}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {values.map((value, index) => {
            return (
              <tr key={index}>
                {value.map((val, i) => {
                  return <td key={i}>{val}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Papaparsing;
