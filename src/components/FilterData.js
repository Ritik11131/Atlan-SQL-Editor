import React from "react";
import { customers } from "../data/customers";
import { CSVLink } from "react-csv";
import * as XLSX from "xlsx";


function FilterData(props) { 

var data = customers
var rows = []

if(props.query === 1){
  rows = customers
}
else if(props.query === 2){
  for(let i =0; i<data.length; i++){
    if(data[i].contactTitle === 'Owner'){
      rows.push(data[i])
      //console.log(rows)
    }
  }
}
else if(props.query === 3){
  for(let i =0; i<data.length; i++){
    if(data[i].country === 'Argentina'){
      rows.push(data[i])
      //console.log(rows)
    }
  }
}

else if(props.query === 4){
  for(let i =0; i<data.length; i++){
    if(data[i].city === 'México D.F.' && data[i].contactTitle === 'Owner'){
      rows.push(data[i])
      //console.log(rows)
    }
  }
}
else if(props.query === 5){
  for(let i =0; i<data.length; i++){
    if(data[i].city === 'London'){
      rows.push(data[i])
      //console.log(rows)
    }
  }
}
else if(props.query === 6){
  for(let i =0; i<data.length; i++){
    if(data[i].address === 'Cerrito 333'){
      rows.push(data[i])
      //console.log(rows)
    }
  }
}

const downloadExcel = (data) => {
  const worksheet = XLSX.utils.json_to_sheet(data);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
  //let buffer = XLSX.write(workbook, { bookType: "xlsx", type: "buffer" });
  //XLSX.write(workbook, { bookType: "xlsx", type: "binary" });
  XLSX.writeFile(workbook, "DataSheet.xlsx");
};

const headers = [
  { label: "CompanyID", key: "customerID" },
  { label: "CompanyName", key: "companyName" },
  { label: "ContactName", key: "contactName" },
  { label: "ContactTitle", key: "contactTitle" },
  { label: "address", key: "address" },
  { label: "city", key: "city" },
  { label: "region", key: "region" },
  { label: "PostalCode", key: "postalCode" },
  { label: "phone", key: "phone" },
  { label: "fax", key: "fax" },
];

const data1 = [
  {
    "customerID" : "AROUT",
    "companyName" : "Around the Horn",
    "contactName" : "Thomas Hardy",
    "contactTitle" : "Sales Representative",
    "address" :  "120 Hanover Sq.",
    "city" : "London",
    "region" : "NULL",
    "postalCode" : "WA1 1DP",
    "country" : "UK",
    "phone" : "(171) 555-7788",
    "fax" : "(171) 555-6750"
},
{
  "customerID" : "BERGS",
  "companyName" : "Berglunds snabbköp",
  "contactName" : "Christina Berglund",
  "contactTitle" : "Order Administrator",
  "address" : "Berguvsvägen  8",
  "city" : "Luleå",
  "region" : "NULL",
  "postalCode" : "S-958 22",
  "country" : "Sweden",
  "phone" : "0921-12 34 65",
  "fax" : "(171) 555-6750"
  
},
{
  "customerID" : "BLAUS",
  "companyName" : "Blauer See Delikatessen",
  "contactName" : "Hanna Moos",
  "contactTitle" : "Sales Representative",
  "address" :  "Forsterstr. 57",
    "city" : "Mannheim",
    "region" : "NULL",
    "postalCode" : 68306,
    "country" : "Germany",
    "phone" : "0621-08460",
    "fax" : "(171) 555-6750"
  
},
{
  "customerID" : "BLONP",
  "companyName" : "Blondesddsl père et fils",
  "contactName" : "Frédérique Citeaux",
  "contactTitle" : "Marketing Manager",
  "address" :  "24 place Kléber",
    "city" : "Strasbourg",
    "region" : "NULL",
    "postalCode" : 67000,
    "country" : "France",
    "phone" : "88.60.15.31",
    "fax" : "(171) 555-6750"
},
{
  "customerID" : "BOLID",
  "companyName" : "Bólido Comidas preparadas",
  "contactName" : "Martín Sommer",
  "contactTitle" : "Owner",
  "address" :  "67C Araquil",
    "city" : "Madrid",
    "region" : "NULL",
    "postalCode" : 28023,
    "country" : "Spain",
    "phone" : "(91) 555 22 82",
    "fax" : "(171) 555-6750"
},
{
  "customerID" : "BONAP",
  "companyName" : "Bon app'",
  "contactName" : "Laurence Lebihan",
  "contactTitle" : "Owner",
  "address" :  "12 rue des Bouchers",
    "city" : "Marseille",
    "region" : "NULL",
    "postalCode" : 13008,
    "country" : "France",
    "phone" : "91.24.45.40",
    "fax" : "(171) 555-6750"
},
{
  "customerID" : "ANTON",
  "companyName" : "Antonio Moreno Taquería",
  "contactName" : "Antonio Moreno",
  "contactTitle" : "Owner",
  "address" :  "Mataderos  2312",
    "city" : "México D.F.",
    "region" : "NULL",
    "postalCode" : 5023,
    "country" : "Mexico",
    "phone" : "(5) 555-3932",
    "fax" : "(171) 555-6750"


},
{
  "customerID" : "ANATR",
  "companyName" : "Ana Trujillo Emparedados y helados",
  "contactName" : "Ana Trujillo",
  "contactTitle" : "Owner",
  "address" :  "Avda. de la Constitución 2222",
    "city" : "México D.F.",
    "region" : "NULL",
    "postalCode" : 5021,
    "country" : "Mexico",
    "phone" : "(5) 555-4729",
    "fax" : "(171) 555-6750"


},
{
  "customerID" : "CACTU",
  "companyName" : "Cactus Comidas para llevar",
  "contactName" : "Patricio Simpson",
  "contactTitle" : "Sales Agent",
  "address" :  "Cerrito 333",
    "city" : "Buenos Aires",
    "region" : "NULL",
    "postalCode" : 1010,
    "country" : "Argentina",
    "phone" : "(1) 135-5555",
    "fax" : "(171) 555-6750"
},
];
 
const csvReport = {
  data: data1,
  headers: headers,
  filename: 'Clue_Mediator_Report.csv'
};

  return (
      <>
    <h1 className="mt-4 text-center">OUTPUT</h1>
    <div className="mt-4">
    <button  className="btn btn-outline-primary" type="submit"><CSVLink style={{textDecoration:'none'}} {...csvReport}>Download</CSVLink></button>
    <button style={{marginLeft:'32px'}} className='btn btn-success' onClick={downloadExcel.bind(this,rows)}><i className="bi bi-chevron-bar-down p-1"></i>Export CSV </button>
    </div>
    <div className="overflow-scroll">
    {rows.length > 0  &&
      <table className="table table-success table-striped mt-4">
        <thead>
          <tr>
            <th scope="col">Customer ID</th>
            <th scope="col">Company Name</th>
            <th scope="col">Contact Name</th>
            <th scope="col">Contact Title</th>
            <th scope="col">Address</th>
            <th scope="col">City</th>
            <th scope="col">Region</th>
            <th scope="col">Postal Code</th>
            <th scope="col">Country</th>
            <th scope="col">Phone</th>
            <th scope="col">Fax</th>
          </tr>
        </thead>
        <tbody>
        {rows.map(row => (
            <tr key={row.customerID}>
                <td>{row.customerID}</td>
                <td>{row.companyName}</td>
                <td>{row.contactName}</td>
                <td>{row.contactTitle}</td>
                <td>{row.address}</td>
                <td>{row.city}</td>
                <td>{row.region}</td>
                <td>{row.postalCode}</td>
                <td>{row.country}</td>
                <td>{row.phone}</td>
                <td>{row.fax}</td>
            </tr>
        ))}
        </tbody>
      </table>
        }
    </div>
    </>
  );
}

export default FilterData;
