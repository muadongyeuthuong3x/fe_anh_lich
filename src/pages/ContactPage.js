
import React, { useEffect, useState } from "react"
import axios from 'axios';
import { toast } from "react-toastify";
import Box from '@mui/material/Box';
import Popper from '@mui/material/Popper';


const ContactPage = () => {


    const [dataContact, setDataContact] = useState([])
    const [call, setCall] = useState(false)
    const [openModal, setOpenModal] = useState(false)
    const [anchorEl, setAnchorEl] = useState(null);
    const [deleteId, setDeleteId] = useState("");

    const handleOpen = (event, id) => {
        setAnchorEl(event.currentTarget);
        setOpenModal(true);
        setDeleteId(id);
    };


    const handleClose = () => {
        setOpenModal(false);
        setAnchorEl(null);
    };

    const deleteContact = async () => {
        const token = JSON.parse(localStorage.getItem('role_web')).cookies;
        await axios.delete(`${process.env.REACT_APP_API_URL}/api/contact/${deleteId}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        setOpenModal(false);
        setAnchorEl(null);
        setCall(!call)
        toast.success("Xóa thành công")
    }

    useEffect(() => {
        const getCategories = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/contact`);
                setDataContact(response.data.data);

            } catch (error) {
                toast.error("Server error ")
            }
        };

        getCategories();
    }, [call]);


    return (
        <div className="h-full container mx-auto items-center px-4 justify-between">
            <table>
                <tr>
                    <th className="with-header-table">Name</th>
                    <th className="with-header-table">Email</th>
                    <th className="with-header-table" >Số điện thoại</th>
                    <th className="with-header-table">Địa chỉ</th>
                    <th className="with-header-table">Mô tả nội dung</th>
                    <th className="with-header-table">Xóa</th>
                </tr>

                {dataContact.length > 0 && dataContact.map((e) => {
                    const { name, email, phone, address, descripts, _id: id } = e; // Destructure the properties

                    return (
                        <tr key={e._id}> {/* Use a unique key for each row */}
                            <td className="max-w-xs break-words with-header-table">
                                {name}
                            </td>
                            <td className="max-w-xs break-words with-header-table">
                                {email}
                            </td>
                            <td className="max-w-xs break-words with-header-table">
                                {phone}
                            </td>
                            <td className="max-w-xs break-words with-header-table">
                                {address}
                            </td>
                            <td className="max-w-xs break-words with-header-table">
                                {descripts}
                            </td>

                            <td className="max-w-xs break-words with-header-table">
                                <button aria-describedby={e._id} className="bg-yellow-600 text-white font-bold py-2 px-4 rounded hover:bg-red-600 transition" onClick={(event) => handleOpen(event, id)}>
                                    Xóa
                                </button>
                                <Popper id={e._id} open={openModal} anchorEl={anchorEl} onClose={handleClose}>
                                    <Box sx={{ border: 1, p: 1, bgcolor: 'background.paper' }}>
                                        <div>
                                            Bạn có chắc chắn xóa liên hệ này không
                                        </div>
                                        <button onClick={() => deleteContact(id)} className="bg-yellow-600 text-white font-bold py-2 px-4 rounded hover:bg-red-600 transition mr-5">Đồng ý</button>
                                        <button onClick={handleClose} className="bg-red-600 text-white font-bold py-2 px-4 rounded hover:bg-red-600 transition">Hủy</button>
                                    </Box>
                                </Popper>
                            </td>

                        </tr>
                    );
                })}
            </table>

        </div>
    )
}

export default ContactPage