import React from 'react';
import axios from 'axios';
import { MdEmail } from 'react-icons/md';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'
import { API_URL } from '../helper';

class ForgotPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    btnForgotPass = () => {
        let email = this.refs.email.value

        axios.post(`${API_URL}/users/forgot`, {
            email
        })
            .then((res) => {
                console.log(res.data)

            }).catch((err) => {
                console.log(err)
            })
    }

    render() {

        return (

            <div className="m-auto" style={{ fontSize: "20px", fontFamily: "poppins", width: "30%" }}>
                <h1 className='text-center font-weight-lighter py-3' style={{ fontSize: '18px' }}>Forgot Password</h1>
                <div className="box py-3" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <i className='form-control' style={{ width: "10%" }}><MdEmail /></i>
                    <input type="text" className="form-control" placeholder="Email" ref="email"></input>
                </div>

                <button type="button" className='btn btn-outline-secondary' style={{ float: "right", }} onClick={this.btnForgotPass} >Ubah Password</button>
            </div>

        );
    }
}

export default ForgotPage;