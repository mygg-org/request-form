import React, { useState } from 'react'
import "../DataTable/DataTable.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import DataTable from 'react-data-table-component'
import SideBar from '../../components/sidebar/SideBar.jsx'

const DataTablePage = () => {

  const columns = [
    {
      name: 'Nome',
      selector: row => row.name,
      sortable: true
    },
    {
      status: "Status",
      selector: row => row.status,
      sortable: true
    }
  ]
  const data =
    [
      {
        id: 1,
        name: "Helysson Cavalcante",
      },
      {
        id: 2,
        name: "Mabyle Jeandressa",
      },
      {
        id: 3,
        name: "João Victor Almeida",
      },
      {
        id: 4,
        name: "Jose Silva Souza",
      }
    ]

  const [records, setRecords] = useState(data);
  function handleFilter(e) {
    const newData = data.filter(row => {
      return row.name.toLowerCase().includes(e.toLowerCase())
    })
    setRecords(newData)
    console.log(e.target.value)

  }

  return (
    <div className="d-flex">
      <div className="col-auto">
        <SideBar />
      </div>
      <div className='ContainerDataTable'>
        <div className="text-end mt-2"><input type="text" onChange={handleFilter}/></div>
        <DataTable
          columns={columns}
          data={data}
          selectableRows
          fixedHeader
          pagination
        ></DataTable>
      </div>
    </div>
  )
}

export default DataTablePage