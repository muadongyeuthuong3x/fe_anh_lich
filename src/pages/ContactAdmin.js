
import React , { useEffect , useState} from "react"
import axios from 'axios';
import { toast } from "react-toastify";


const ContactAdmin = () => {

    const [formData , setFormData] = useState({
        name : "",
        email: "",
        phone: "",
        address : "",
        descripts : ""
    })
      
    const onChangeInput = (e) => {
        const { name , value } = e.target
        setFormData((prev)=>({
            ...prev, [name] : value
        }))
    }
    
    const sendContact = async() => {
        await axios.post(`${process.env.REACT_APP_API_URL}/api/contact`, formData);
        toast.success("Tạo liện hệ thành công")
    }
    return (
        <div className="h-full container mx-auto items-center px-4 justify-between">
            <h1 className="text-3xl font-bold text-center">Liện hệ chủ doanh nghiệp</h1>
            <div className="form-contact-admin">
            <input
                    className="contact-admin-input"
                    placeholder="Họ tên"
                    name="name"
                    value={formData.name}
                    onChange={onChangeInput}
                />
                <input
                    className="contact-admin-input"
                    placeholder="Email"
                    name="email"
                    value={formData.email}
                    onChange={onChangeInput}
                />
                <input
                    className="contact-admin-input"
                    placeholder="Điện thoại"
                    name="phone"
                    value={formData.phone}
                    onChange={onChangeInput}
                />
                <input
                    className="contact-admin-input"
                    placeholder="Địa chỉ"
                    name="address"
                    value={formData.address}
                    onChange={onChangeInput}
                />
            </div>

            <div className="content-contact">
                <input className="description-admin-input" placeholder="Ghi chú"  
                    name="descripts"
                    value={formData.descripts}
                    onChange={onChangeInput}/>
            </div>
            <div className="flex w-full justify-center">
                <button className="send_data_contact" onClick={sendContact}> Gửi </button>
            </div>


            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14958.165682118051!2d106.37136266419182!3d20.401789259282072!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135fb62ad4f3f29%3A0x3b0dc368d3789d97!2zVsWpIFF1w60sIEtp4bq_biBYxrDGoW5nLCBUaMOhaSBCw6xuaCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1729686292755!5m2!1svi!2s"
                className="google-map"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>
    )
}

export default ContactAdmin