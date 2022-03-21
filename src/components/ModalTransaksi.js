import React from 'react';
import { Button, Card, Modal, ModalBody, ModalHeader } from 'reactstrap'

const ModalTransaksi = (props) => {
    const { dataTransaksi } = props;
    const printDetail = () => {
        return dataTransaksi.detail.map((value, index) => {
            return <Card>
                <div className="row p-2">
                    <div className="col-md-2">
                        <img src={value.image} width="100%" />
                    </div>
                    <div className="col-md-6">
                        <h6 style={{ fontWeight: "bolder", margin: 0 }}>{value.nama}</h6>
                        <p className="text-muted">{value.qty} x Rp. {value.harga.toLocaleString()}</p>
                    </div>
                    <div className="col-md-4">
                        <p className="m-0">Total Harga</p>
                        <h6 style={{ fontWeight: "bolder", margin: 0 }}>Rp. {(value.qty * value.harga).toLocaleString()}</h6>
                        {/* Total harga */}
                    </div>
                </div>
            </Card>
        })
    }

    const totalBarang = () => {
        let total = 0
        dataTransaksi.detail.forEach((item) => {
            total += item.qty
        })
        return total
    }
    return (
        <Modal isOpen={props.openModal}
            toggle={props.toggleModal} size="lg">
            <ModalHeader className="d-block shadow-sm">
                <span className="material-icons" style={{ float: "right", cursor: "pointer" }} onClick={props.toggleModal}>
                    close
                </span>
                <div style={{ textAlign: "center" }}>
                    <h4 style={{ fontWeight: "700" }}>Detail Transaksi</h4>
                </div>
            </ModalHeader>
            <ModalBody>
                {
                    dataTransaksi ?
                        <div className="row">
                            <div className="col-md-8 px-0" style={{ backgroundColor: "#F3F4F5" }}>
                                <Card className="px-4 rounded" style={{ border: "none" }}>
                                    <p style={{ fontWeight: "bold" }}>{props.dataTransaksi.status}</p>
                                    <span className="d-flex justify-content-between">
                                        <p>No. Invoice</p>
                                        <p style={{ fontWeight: "bold", color: "#3498db" }}>{props.dataTransaksi.invoice}</p>
                                    </span>
                                    <span className="d-flex justify-content-between">
                                        <p>Tanggal Pembelian</p>
                                        <p>{props.dataTransaksi.date}</p>
                                    </span>
                                </Card>
                                <Card className="px-4 py-3 mt-2 rounded" style={{ border: "none" }}>
                                    <p style={{ fontWeight: "bold" }}>Detail Produk</p>
                                    <div style={{ height: "30vh", overflow: "auto", overflowX: "hidden" }}>
                                        {printDetail()}
                                    </div>
                                </Card>
                                <Card className="px-4 py-3 mt-2 rounded" style={{ border: "none" }}>
                                    <p style={{ fontWeight: "bold" }}>Rincian Pembayaran</p>
                                    <span className="d-flex justify-content-between">
                                        <p>Total Harga ({totalBarang()} barang)</p>
                                        <p style={{ fontWeight: "bold", color: "#3498db" }}>Rp. {(dataTransaksi.totalPayment - dataTransaksi.ongkir).toLocaleString()}</p>
                                    </span>
                                    <span className="d-flex justify-content-between">
                                        <p>Total Ongkos Kirim</p>
                                        <p style={{ fontWeight: "bold", color: "#3498db" }}>Rp. {dataTransaksi.ongkir.toLocaleString()}</p>
                                    </span>
                                    <span className="d-flex justify-content-between">
                                        <p>Total Bayar</p>
                                        <p style={{ fontWeight: "bold", color: "#3498db" }}>Rp. {dataTransaksi.totalPayment.toLocaleString()}</p>
                                    </span>
                                </Card>
                            </div>
                            <div className="col-md-4 p-3">
                                <Button
                                    outline
                                    size="lg"
                                    className="my-2"
                                    style={{ width: "100%" }}>
                                    Chat Penjual
                                </Button>
                                <Button outline className="my-2" size="lg" style={{ width: "100%" }}>Bantuan</Button>
                                <Button outline color="danger" size="lg" style={{ width: "100%" }} type="button" onClick={() => props.onBtCancel(dataTransaksi.id)}>Batal</Button>
                            </div>
                        </div>
                        : <p style={{ textAlign: "center" }}> No Data ⚠️</p>
                }
            </ModalBody>
        </Modal>
    )
};

export default ModalTransaksi;
