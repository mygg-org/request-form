import React, { useState } from 'react'
import "../DataTable/DataTable.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import DataTable from 'react-data-table-component'
import SideBar from '../../components/sidebar/SideBar.jsx'
import Modal from '../../components/Modal/Modal.jsx'

const DataTablePage = () => {

  const columns = [
    {
      name: 'Id',
      selector: row => row.id,
      sortable: true
    },
    {
      name: 'Nome',
      selector: row => row.name,
      sortable: true
    },
    {
      name: 'CPF',
      selector: row => row.cpf,
    },
    {
      name: "Status",
      cell: row => <select name="status" id="" class="form-select w-50">
        <option value="select">Todas</option>
        <option value="aprovado" >Aprovado</option>
        <option value="negado">Negado</option>
      </select>
    },
    {
      name: "Editar",
      cell: row => <Modal />
    }

  ]
  const data = [
    {
      id: 1,
      name: "Helysson Cavalcante",
      cpf: "05265540296"
    },
    {
      id: 2,
      name: "Mabyle Jeandressa",
      cpf: "00000000002"
    },
    {
      id: 3,
      name: "João Victor Almeida",
      cpf: "00000000003"
    },
    {
      id: 4,
      name: "Jose Silva Souza",
      cpf: "00000000004"
    }
  ]
  const [records, setRecords] = useState(data);

  function handleFilterName(e) {
    const newData = data.filter(row => {
      return row.name.toLowerCase().includes(e.target.value.toLowerCase());
    })

    setRecords(newData)
  }

  return (
    <div className="d-flex">
      <div className="col-auto">
        <SideBar />
      </div>
      <div className='ContainerDataTable'>
        <h1 className='text-center'>Lista de Pessoas</h1>
        <DataTable
          columns={columns}
          data={records}
          selectableRowsHighlight
          highlightOnHover
          fixedHeader
          pagination
          subHeader
          actions={<button className='btn btn-success'>Add+</button>}
          subHeaderComponent={<input type='text' placeholder='Pesquise' className='w-25 form-control' />}
        />
      </div>
    </div>
  )
}

export default DataTablePage