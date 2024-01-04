import { Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap-icons/font/bootstrap-icons.css';

import { GrClose } from 'react-icons/gr';

function MyVerticallyCenteredModal(props) {
    const { title, bodyComponent, modalFooterComponent, show, onHide, closeButton } = props;

    return (
        <Modal
            {...props}
            show={show}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            style={{
                opacity: 1,
                top: '45%'
            }}
        >
            <Modal.Header>
                <Modal.Title id="contained-modal-title-vcenter">
                    {title}
                </Modal.Title>
                <Button onClick={onHide} variant="light">
                    <GrClose />
                </Button>
            </Modal.Header>
            <Modal.Body>
                {bodyComponent}
            </Modal.Body>
            <Modal.Footer>
                {modalFooterComponent}
            </Modal.Footer>
        </Modal>
    );
}

export default MyVerticallyCenteredModal