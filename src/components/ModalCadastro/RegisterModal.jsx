import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function ResgiterModal() {
    const [show, setShow] = useState(false);
    const [nomeCompleto, setNomeCompleto] = useState('');
    const [cpf, setCpf] = useState('');
    const [endereco, setEndereco] = useState('');
    const [numendereco, setNumEndereco] = useState('');
    const [cep, setCep] = useState('');

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleAtualizar = () => {
        // Aqui você pode fazer o que quiser com os dados preenchidos
        console.log('Nome Completo:', nomeCompleto);
        console.log('CPF:', cpf);
        console.log('Endereço:', endereco);
        console.log('CEP:', cep);

        // Fechar o modal após atualizar
        handleClose();
    };

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                <div>Adicionar Usuario</div>
            </Button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Adicionar dados</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="formNomeCompleto">
                            <Form.Label>Nome Completo</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Digite o Nome Completo*"
                                autoFocus
                                value={nomeCompleto}
                                onChange={(e) => setNomeCompleto(e.target.value)}
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formCPF">
                            <Form.Label>CPF</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Digite o Novo CPF*"
                                value={cpf}
                                onChange={(e) => setCpf(e.target.value)}
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formEndereco">
                            <Form.Label>Endereço</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Digite o Endereço*"
                                value={endereco}
                                onChange={(e) => setEndereco(e.target.value)}
                                required
                            />
                            <Form.Label>Numero</Form.Label>
                            <Form.Control
                                type="number"
                                placeholder="Numero*"
                                value={numendereco}
                                onChange={(e) => setNumEndereco(e.target.value)}
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formCEP">
                            <Form.Label>CEP</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Digite o CEP*"
                                value={cep}
                                onChange={(e) => setCep(e.target.value)}
                                required
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Fechar
                    </Button>
                    <Button variant="primary" onClick={handleAtualizar}>
                        Adicionar
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ResgiterModal;