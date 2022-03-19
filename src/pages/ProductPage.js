import React, { Component } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import axios from 'axios';
import { Card, CardImg, CardBody, CardTitle, CardText, Badge, Input } from 'reactstrap'
import { Link } from 'react-router-dom';
import { API_URL } from '../helper';
class ProductPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
            search: ""
        }
    }

    componentDidMount() {
        this.getProducts()
    }

    getProducts = () => {
        axios.get(`${API_URL}/products/get`)
            .then((res) => {
                // console.table(res.data)
                this.setState({ products: res.data })
            }).catch((err) => {
                console.log(err)
            })
    }

    printProducts = () => {
        const { search } = this.state
        return this.state.products.map((value, index) => {
            return <div key={index} className="col-md-3 my-2">
                <Card>
                    <Link to={`/product-detail?produk_id=${value.produk_id}`} style={{ textDecoration: "none", color: "black" }}>
                        <CardImg width="100%" src={value.images[0].url} alt={`image ${value.nama_produk}`} />
                        <CardBody>
                            <Badge color="info">{value.kategori_id}</Badge>
                            <CardTitle tag="h5" style={{ fontWeight: "bolder" }}>{value.nama_produk}</CardTitle>
                            <CardText tag="h5" className="text-right">IDR. {value.harga_jual.toLocaleString()}</CardText>
                        </CardBody>
                    </Link>
                </Card>
            </div>
        })
    }

    onchange = e => {
        this.setState({ search: e.target.value });
    }

    render() {
        const { search } = this.state;
        
        return (
            <div>
                {/* <div className="m-auto mt-3" style={{ fontSize: "20px", fontFamily: "poppins", width: "30%" }}>
                    <div className="box m-auto" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <i className='form-control' style={{ width: "10%" }}><SearchIcon /></i>
                        <input type="text" className="form-control" placeholder="cari produk" ref="search" onChange={this.onchange} ></input>
                    </div>
                </div> */}
                <div className="container row m-auto mt-5">
                    {
                       

                            this.printProducts()
                    

                    }
                </div>
            </div>
        );
    }
}

export default ProductPage;