import React from 'react';
import { FaUserAlt } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { RiLockPasswordFill } from 'react-icons/ri';
import { BsFillTelephoneFill } from 'react-icons/bs';
import axios from 'axios';
import { API_URL } from '../helper';
import { Redirect } from 'react-router-dom';

class SignUpPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: false
        }
    }

    btnSignUp = () => {
        let username = this.refs.username.value
        let email = this.refs.email.value
        let password = this.refs.password.value
        let confPassword = this.refs.confPassword.value
        let no_telepon = this.refs.hp.value

        if (email == "" || password == "" || confPassword == "") {
            alert(`Fill in form ❌`)
        } else {
            if (password == confPassword) {
                if (email.includes("@")) {

                    axios.post(`${API_URL}/users/register`, {
                        username,
                        email,
                        password,
                        no_telepon,
                        user_status: "unverified",
                        user_role: "user"

                    }).then((res) => {
                        console.log(res)
                        if (res.data.success) {
                            this.setState({ redirect: true })
                            alert(res.data.message)
                        }

                    }).catch((err) => {
                        console.log(err)
                    })

                } else {
                    alert(`Email Failed  ❌`)
                }
            } else {
                alert(`Password not match ❌`)
            }
        }
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to="/" />
        }
        return (
            <div className="m-auto" style={{ fontSize: "20px", fontFamily: "poppins", width: "30%" }}>
                <h1 className='text-center font-weight-lighter py-3' style={{ fontSize: '18px' }}>Pendaftaran Akun</h1>
                <h3 className='text-center font-weight-lighter' style={{ fontSize: '14px' }}>Silakan isi data di bawah ini dengan informasi yang akurat</h3>
                <div className="box py-3" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <i className='form-control' style={{ width: "10%" }}><FaUserAlt /></i>
                    <input type="text" className="form-control" placeholder="Username yang Diinginkan" ref="username"></input>
                </div>
                <div className="box py-3" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <i className='form-control' style={{ width: "10%" }}><MdEmail /></i>
                    <input type="text" className="form-control" placeholder="Alamat Email Anda" ref="email"></input>
                </div>
                <div className="box py-3" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <i className='form-control' style={{ width: "10%" }}><RiLockPasswordFill /></i>
                    <input type="text" className="form-control" placeholder="Password" ref="password"></input>
                </div>
                <div className="box py-3" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <i className='form-control' style={{ width: "10%" }}><RiLockPasswordFill /></i>
                    <input type="text" className="form-control" placeholder="Confirm Password" ref="confPassword"></input>
                </div>
                <div className="box py-3" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <i className='form-control' style={{ width: "10%" }}><BsFillTelephoneFill /></i>
                    <input type="text" className="form-control" placeholder="Nomor HP Utama" ref="hp"></input>
                </div>
                <button type="button" className='btn btn-outline-dark' style={{ float: "right" }} onClick={this.btnSignUp} >Lanjut Pendaftaran</button>
            </div>
        );
    }
}

export default SignUpPage;