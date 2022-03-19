import React from "react";

class Footer extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {}

    render() {
        return (
            <footer style={{ paddingTop: "1px", width: "100%", clear: "both", position:"relative", bottom: "1px", backgroundColor: "#B0E0E6",fontFamily: "poppins" }}>
                <div className="footer-top " style={{ position: 'relative', color: 'white' }}>
                    <div className="container" style={{ marginLeft: 'auto', marginRight: 'auto', paddingLeft: "15px", paddingRight: "15px", maxWidth: "720px" }}>
                        <div className="row" style={{ display: "flex", flexWrap: "wrap" }}>
                            <div className="col-12" style={{ flex: "0 0 100%", maxWidth: "100%" }}>
                                <div className="row" style={{ display: "flex", flexWrap: "wrap", marginLeft: "-15px", marginRight: "-15px", textAlign: "center" }}>
                                    <div className="col-md-4" style={{ marginBottom: "5px" }}>
                                        <div className="footer-menu" style={{ marginTop: "10px", marginBottom: "30px", fontSize: "25px", fontWeight: "bolder" }}>
                                            INFORMASI
                                        </div>
                                        <ul className="menu-list" style={{ fontSize: "18px", listStyleType: "none", marginLeft: "-30px", fontWeight: "inherit" }}>
                                            <li>FAQ</li>
                                            <li>Terms & Condition</li>
                                            <li>Privacy Policy</li>
                                        </ul>
                                    </div>
                                    <div className="col-md-4" style={{ marginBottom: "5px" }}>
                                        <div className="footer-menu" style={{ marginTop: "10px", marginBottom: "30px", fontSize: "25px", fontWeight: "bolder" }}>
                                            LAYANAN
                                        </div>
                                        <ul className="menu-list" style={{ fontSize: "18px", listStyleType: "none", marginLeft: "-30px", fontWeight: "inherit" }}>
                                            <li>Lorem Ipsum</li>
                                            <li>Lorem Ipsum</li>
                                            <li>Lorem Ipsum</li>
                                        </ul>
                                    </div>
                                    <div className="col-md-4" style={{ marginBottom: "5px" }}>
                                        <div className="footer-menu" style={{ marginTop: "10px", marginBottom: "30px", fontSize: "25px", fontWeight: "bolder" }}>
                                            INFO KONTAK
                                        </div>
                                        <ul className="menu-list" style={{ fontSize: "18px", listStyleType: "none", marginLeft: "-30px", fontWeight: "inherit" }}>
                                            <li>EMAIL</li>
                                            <li>WHATSAPP</li>
                                            <li>LINE</li>
                                        </ul>
                                    </div>
                                    <hr className="my-4" />
                                    <div className="pb-4" style={{ fontSize: "18px", fontWeight:"unset"}}>© 2022 W-Commerce. All rights reserved.</div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;
