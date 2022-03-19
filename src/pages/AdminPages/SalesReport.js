import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Axios from 'axios';
import { API_URL } from '../../helper';


const SalesReport = () => {

    const userGlobal = useSelector((state) => state.userGlobal);

    const [salesFetch, setSalesFetch] = useState({
        salesDataList: []
    });

    const [revenueFetch, setRevenueFetch] = useState({
        revenueData: {}
    });

    const fetchSales = () => {
        Axios.get(`${API_URL}/admin`)
            .then((res) => {
                if (res.data.length) {
                    setSalesFetch({ ...salesFetch, salesDataList: res.data });
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const fetchRevenue = () => {
        Axios.get(`${API_URL}/admin/revenue`)
            .then((res) => {
                if (res.data.length) {
                    setRevenueFetch({ ...revenueFetch, revenueData: res.data[0] });
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const renderReports = () => {
        let salesDataList = [...salesFetch.salesDataList];

        return salesDataList.map((val) => {
            return (
                <tr>
                    <td>{val.Date}</td>
                    <td>{val.nama_produk}</td>
                    <td>{val.qty}</td>
                    <td>Rp. {val.harga_jual}</td>
                </tr>
            )
        })
    }

    const renderRevenue = () => {
        let revenueData = revenueFetch.revenueData;
        return (
            <tr>
                <td><strong>Revenue</strong></td>
                <td></td>
                <td></td>
                <td>Rp. {revenueData.Revenue}</td>
            </tr>
        )
    }

    useEffect(() => {
        fetchSales();
        fetchRevenue();
    }, []);


    return (
        <div className="container p-5r">
            <div className="col-12 text-center">
                <h1>Sales Report</h1>
                <div className="row">
                    <table className="table mt-6">
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>nama_produk</th>
                                <th>Qty</th>
                                <th>harga_jual</th>
                            </tr>
                        </thead>
                        <tbody>
                            {renderReports()}
                        </tbody>
                        <tfoot>
                            {renderRevenue()}
                        </tfoot>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default SalesReport;