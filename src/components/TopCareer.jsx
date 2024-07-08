import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import c from '../images/Fresher.jpg'
import { BorderColor } from '@mui/icons-material';
import '../scss/Header.css'
const VacancyList = () => {
    const [vacan, setVacan] = useState([]);    // Dữ liệu hiện tại của trang
    const [total, setTotal] = useState(0);     // Tổng số mục
    const [page, setPage] = useState(1);       // Trang hiện tại
    const [pageSize, setPageSize] = useState(5); // Số mục trên mỗi trang

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get('https://localhost:7144/api/Vacancy/GetAllVacancy');
                const allData = res.data.data || [];
                setTotal(allData.length); // Đặt tổng số mục

                // Phân trang dữ liệu
                const paginatedData = paginateData(allData, page, pageSize);
                setVacan(paginatedData);

            } catch (error) {
                console.error('Fetch error:', error);
            }
        };

        fetchData();
    }, [page, pageSize]); // Tải lại dữ liệu khi trang hoặc pageSize thay đổi

    // Hàm hỗ trợ để phân trang dữ liệu
    const paginateData = (data, page, pageSize) => {
        const startIndex = (page - 1) * pageSize;
        return data.slice(startIndex, startIndex + pageSize);
    };

    const handlePageChange = (newPage) => {
        if (newPage > 0 && newPage <= Math.ceil(total / pageSize)) {
            setPage(newPage);
        }
    };

    const handlePageSizeChange = (event) => {
        setPageSize(Number(event.target.value));
        setPage(1); // Đặt lại về trang đầu tiên khi pageSize thay đổi
    };

    return (
        <div className='container'>
            <div className='title__career'>
                <h1 className='text-center text_header my-5'>Career</h1>

            </div>

            <div classname="">
                <label className='d-flex justify-content-end mx-5' >
                    <span>Size Page: </span>
                    <select value={pageSize} style={{ width: 70, border: "0.5px solid gray" }} onChange={handlePageSizeChange}>
                        <option value={5} >5</option>
                        <option value={10} >10</option>
                        <option value={20} >20</option>
                    </select>
                </label>
            </div>

            <div className="row row-cols-1 row-cols-md-3 g-4 my-5" >
                {vacan.map((item) => (
                    <div className="col content_item_career" key={item.vacancyID}>
                        <div className="card content_item_career_title style_card">
                            <div className="card-body">
                                <h5 className="card-title">{item.title}</h5>
                                {/* <p className="card-text">{item.description}</p> */}
                            </div>
                        </div>
                        <div className='text_overlay_career'>
                            <NavLink className="apply_overlay" style={{ textDecoration: "none", fontSize: 25 }} to={`/jobview/${item.vacancyID}`}>Apply Now</NavLink>

                        </div>
                    </div>
                ))}

            </div>





            <div className='d-flex justify-content-center'>
                <div className='my-5'>
                    <button onClick={() => handlePageChange(page - 1)} disabled={page === 1} className='btn btn-outline-danger'>
                        Previous
                    </button>
                    <span> Page {page} of {Math.ceil(total / pageSize)} </span>
                    <button onClick={() => handlePageChange(page + 1)} disabled={page >= Math.ceil(total / pageSize)} className='btn btn-outline-danger'>
                        Next
                    </button>
                </div>

            </div>

        </div>
    );
};

export default VacancyList;
