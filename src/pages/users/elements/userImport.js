import { Tabs, Tab, Button, Modal} from "react-bootstrap";
import {useState} from "react";

export default function UserImport()
{
    const [showImportModal, setShowImportModal] = useState(false);

    const handleCloseImportModal = () => setShowImportModal(false);

    const handleShowImportModal = () => setShowImportModal(true);

    return (
        <>
            <Button variant="success" onClick={handleShowImportModal} className={"me-2"}>
                Import
            </Button>
            <Modal
                size={"lg"}
                show={showImportModal}
                onHide={handleCloseImportModal}
            >
                <Modal.Header
                    closeButton
                >
                    <Modal.Title>
                        Nhập liệu danh sách users
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body
                    className={"px-0"}
                >
                    <Tabs
                        defaultActiveKey="history"
                        className="mb-3"
                    >
                        <Tab eventKey="uploadFile" title="Upload file mới" className={"p-3"}>
                            test1
                        </Tab>
                        <Tab eventKey="history" title="Lịch sử upload" className={"p-3"}>
                            test2
                        </Tab>
                    </Tabs>
                </Modal.Body>
            </Modal>
        </>
    )
}