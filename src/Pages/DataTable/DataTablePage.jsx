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
      name: "Status",
      cell: row => <select name="status" id="" class="form-select">
        <option value="select">Todas</option>
        <option value="aprovado">Aprovado</option>
        <option value="negado">Negado</option>
      </select>
    },
    {
      name: "Editar",
      cell: row => <button className='btn btn-primary' onClick={() => alert(row.id)}>Editar</button>
    }
  ]
  const data = [
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
      return row.name.toLowerCase().includes(e.target.value.toLowerCase())
    })
    setRecords(newData)
  }

  return (
    <div className="d-flex">
      <div className="col-auto">
        <SideBar />
      </div>
      <div className='ContainerDataTable'>
        <DataTable
          title="Lista de Pessoas"
          columns={columns}
          data={data}
          selectableRows
          selectableRowsHighlight
          highlightOnHover
          fixedHeader
          pagination
          /* actions={<button className='btn btn-info'>Export</button>} */
          subHeader
          subHeaderComponent={<input type='text' placeholder='Pesquise' className='w-25 form-control' />}
        />
      </div>
    </div>
  )
}

export default DataTablePage