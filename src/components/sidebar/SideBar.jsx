import React, { useState } from 'react';
import './Sidebar.css';
import { Button } from 'react-bootstrap';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="d-flex">
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <Button variant="dark" className="toggle-btn" onClick={toggleSidebar}>
          {isOpen ? 'Fechar' : 'Abrir'}
        </Button>
        <div className="sidebar-content">
          <ul className="list-group">
            <li className="list-group-item">Usuarios do Sistema</li>
            <li className="list-group-item">Pessoas</li>
          </ul>
          <div className="sidebar-footer">
            <p>Sidebar Footer</p>
          </div>
        </div>
      </div>
      <div className={`content ${isOpen ? 'shift-content' : ''}`}>
        {/* Conteúdo da sua página aqui */}
      </div>
    </div>
  );
};

export default Sidebar;