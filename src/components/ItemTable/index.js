import React, { useState, Fragment, useEffect } from 'react';
import { Button, Modal } from 'react-bootstrap';

const ItemTable = ({ data }) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [itemsList, setItemsList] = useState([0]);

    const dataModal = (data) => {
        let items = data.data.item;

        setItemsList([items]);



    }

    return (
        <>
            <table className="table ">
                <thead className="bg-primary text-white">
                    <tr>
                        <th scope="col">No</th>
                        <th scope="col" className='text-center'>Nama Siswa</th>
                        <th scope="col" className='text-center'>Ruangan</th>
                        <th scope="col" className='text-center'>Daftar Barang</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.length > 0 ? (
                            data.map((data, index) => {
                                return (
                                    <tr key={data.id}>
                                        <td>{index + 1}</td>
                                        <td className='text-center'>{data.data.name}</td>
                                        <td className='text-center'>1</td>
                                        <td className='text-center'>
                                            <Button variant="danger" onClick={() => {
                                                handleShow();
                                                dataModal(data);
                                            }}>
                                                Lihat Barang
                                            </Button>
                                        </td>
                                    </tr>
                                )
                            })
                        ) : null
                    }

                </tbody>
            </table>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header >
                    <Modal.Title>Daftar Barang</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <table className="table ">
                        <thead className="bg-primary text-white">
                            <tr>
                                <th scope="col">No</th>
                                <th scope="col" className='text-center'>Nama Barang</th>
                                <th scope="col" className='text-center'>ID Barang</th>
                                <th scope="col" className='text-center'>Status Barang</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                // console.log(itemsList[0].length > 0)
                                itemsList[0].length > 0 ? (
                                    itemsList[0].map((data, index) => {
                                        return (
                                            <tr key={index}>
                                                <td>{index + 1}</td>
                                                <td>{data.name}</td>
                                                <td>{data.card_tag}</td>
                                                <td>{data.item_status ? "Dipinjam" : "Dikembalikan"}</td>
                                            </tr>
                                        )
                                    })
                                ) : null
                            }

                        </tbody>
                    </table>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>

        </>
    );
}

export default ItemTable;