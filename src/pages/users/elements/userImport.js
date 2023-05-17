import { Tabs, Tab, Button, Modal, Form, Table, Alert} from "react-bootstrap";
import { useState, memo} from "react";

function UserImport()
{
    const [showImportModal, setShowImportModal] = useState(false);

    const handleCloseImportModal = () => setShowImportModal(false);

    const handleShowImportModal = () => setShowImportModal(true);
    console.log(111);
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
                        fill
                    >
                        <Tab eventKey="uploadFile" title="Upload file" className={"p-3"}>
                            <Alert variant={'warning'}>
                                <b>Có 1 tiến trình đang diễn ra</b>. Không thể upload file mới!
                            </Alert>
                            <Form className={"mb-3"}>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>File import</Form.Label>
                                    <Form.Control type="file" disabled={true}/>
                                    <Form.Text className="text-muted">
                                        *Chỉ có thể import file excel file excel
                                    </Form.Text>
                                </Form.Group>
                                <Button variant="primary" type="submit" disabled={true}>
                                    Upload
                                </Button>
                            </Form>
                            <div>
                                <h5>
                                    Danh sách user lỗi
                                </h5>
                                <Table striped bordered hover>
                                    <thead>
                                        <tr>
                                            <th>Họ tên</th>
                                            <th>Số điện thoại</th>
                                            <th>Email</th>
                                            <th>Lỗi</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Mark</td>
                                            <td>Otto</td>
                                            <td>@mdo</td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>Jacob</td>
                                            <td>Thornton</td>
                                            <td>@fat</td>
                                            <td>

                                            </td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </div>
                        </Tab>
                        <Tab eventKey="history" title="Lịch sử upload" className={"p-3"}>
                            <Table striped bordered hover>
                                <thead>
                                <tr>
                                    <th>#</th>
                                    <th>File</th>
                                    <th>Thời gian</th>
                                    <th>Trạng thái</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>@fat</td>
                                </tr>
                                </tbody>
                            </Table>
                        </Tab>
                    </Tabs>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default memo(UserImport);