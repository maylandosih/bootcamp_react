import React from 'react';
import { Link } from 'react-router-dom';
import { AiFillCaretDown } from "react-icons/ai";
import { connect } from 'react-redux';
import { Badge } from 'reactstrap';
import { logoutAction } from '../actions'

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    btnLogOut = () => {
        localStorage.removeItem("shopToken");
        this.props.logoutAction()
    }

    totalCart = () => {
        let total = 0
        this.props.produk_id.forEach((value) => {
            total += value.qty
        });

        return total
    }

    render() {
        return (
            <nav className={`navbar navbar-expand-lg navbar-dark`} style={{ fontFamily: "poppins", backgroundColor: "#B0E0E6" }}>
                <Link className="navbar-brand font-weight-bold" style={{ color: "#008080", fontSize: '30px' }} to="/">{this.props.brand}</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                    <li className="nav-item" style={{fontSize: '30px', fontWeight:"bolder" }}>
                            <Link className="nav-link" to="/products">
                                Product
                            </Link>
                        </li>
                    </ul>
                    {
                        this.props.user_id != null
                            ?
                            <div className="ml-auto">
                                <div class="btn-group">
                                    <button type="button" className="btn btn-outline-info dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Hello, {this.props.email}
                                    </button>
                                    <div className="dropdown-menu">
                                        {
                                            this.props.user_role == "user" ?
                                                <div>
                                                    <Link to="/profile" className="dropdown-item" style={{ cursor: "pointer" }}>Profile</Link>
                                                    <Link to="/cart" className="dropdown-item" style={{ cursor: "pointer" }}>Cart<Badge color="secondary">{this.totalCart()}</Badge></Link>
                                                    <Link to="/history" className="dropdown-item" style={{ cursor: "pointer" }}>Transactions</Link>
                                                </div>
                                                :
                                                <div>
                                                    <Link to="/products-admin" className="dropdown-item" style={{ cursor: "pointer" }}>Manage Products</Link>
                                                    <Link to="/transactions-admin" className="dropdown-item" style={{ cursor: "pointer" }}>Manage Transactions</Link>
                                                    <Link to="/datauser-admin" className="dropdown-item" style={{ cursor: "pointer" }}>Data User</Link>
                                                    <Link to="/report-admin" className="dropdown-item" style={{ cursor: "pointer" }}>Sales Report</Link>
                                                </div>
                                        }
                                        <div className="dropdown-divider"></div>
                                        <a className="dropdown-item" style={{ cursor: "pointer" }} onClick={this.btnLogOut}>Logout</a>
                                    </div>
                                </div>
                            </div>
                            :
                            <div className="nav-link text-white ml-auto">
                                <Link className="btn btn-outline-dark font-weight-bold" style={{ fontSize: '14px' }} to="/signup">Daftar</Link>
                                <Link className="btn btn-outline-light font-weight-bold" style={{ fontSize: '14px' }} to="/signin">Masuk</Link>

                            </div>
                    }
                </div>
            </nav>
        );
    }
}

const mapToProps = (globalState) => {
    // console.table(globalState.authReducer)
    return {
        user: globalState.authReducer,
        user_id: globalState.authReducer.user_id,
        email: globalState.authReducer.email,
        username: globalState.authReducer.username,
        user_role: globalState.authReducer.user_role,
        produk_id: globalState.authReducer.cart
    }
}

export default connect(mapToProps, { logoutAction })(Navbar);