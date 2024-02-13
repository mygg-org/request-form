import React, { useState } from 'react'
import "../DataTable/DataTable.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import DataTable from 'react-data-table-component'
import SideBar from '../../components/sidebar/SideBar.jsx'
import Modal from '../../components/Modal/Modal.jsx'

const DataTablePage = () => {
  const [selectedOptions, setSelectedOptions] = useState({});

  const handleSelectChange = (id, value) => {
    setSelectedOptions({
      ...selectedOptions,
      [id]: value
    });
  };

  const getSelectClass = (id) => {
    const selectedOption = selectedOptions[id];
    if (selectedOption === 'aprovado') {
      return 'bg-success text-white';
    } else if (selectedOption === 'negado') {
      return 'bg-danger text-white'; 
    } else if (selectedOption === 'select') {
      return 'bg-white';
    } 
    else {
      return '';
    }
  };

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
      cell: row => <select name="status" id="" class="form-select"
        className={`form-select ${getSelectClass(row.id)}`}
        value={selectedOptions[row.id] || ''}
        onChange={(e) => handleSelectChange(row.id, e.target.value)}>
        <option value="select">Selecione...</option>
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
          subHeaderComponent={<input type='text' placeholder='Pesquise' className='w-25 form-control' onChange={handleFilterName}/>}
        />
      </div>
    </div>
  )
}

export default DataTablePage