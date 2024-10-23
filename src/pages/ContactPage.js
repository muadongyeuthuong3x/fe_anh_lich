
import React, { useEffect, useState } from "react"
import axios from 'axios';
import { toast } from "react-toastify";


const ContactPage = () => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        address: "",
        descripts: ""
    })

    const onChangeInput = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({
            ...prev, [name]: value
        }))
    }

    const sendContact = async () => {
        await axios.post(`${process.env.REACT_APP_API_URL}/api/contact`, formData);
        toast.success("Tạo liện hệ thành công")
    }
    return (
        <div className="h-full container mx-auto items-center px-4 justify-between">
            <table>
                <tr>
                    <th className="with-header-table">Name</th>
                    <th className="with-header-table">Email</th>
                    <th className="with-header-table" >Số điện thoại</th>
                    <th className="with-header-table">Địa chỉ</th>
                    <th className="with-header-table">Xóa</th>
                </tr>
                <tr>
                    <td>Alfreds ssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssFutterkiste</td>
                    <td>Maria Anders</td>
                    <td>Germany</td>
                </tr>
                <tr>
                    <td>Centro comercial Moctezuma</td>
                    <td>Francisco Chang</td>
                    <td>Mexico</td>
                </tr>
                <tr>
                    <td>Ernst Handel</td>
                    <td>Roland Mendel</td>
                    <td>Austria</td>
                </tr>
                <tr>
                    <td>Island Trading</td>
                    <td>Helen Bennett</td>
                    <td>UK</td>
                </tr>
                <tr>
                    <td>Laughing Bacchus Winecellars</td>
                    <td>Yoshi Tannamuri</td>
                    <td>Canada</td>
                </tr>
                <tr>
                    <td>Magazzini Alimentari Riuniti</td>
                    <td>Giovanni Rovelli</td>
                    <td>Italy</td>
                </tr>
            </table>

        </div>
    )
}

export default ContactPage