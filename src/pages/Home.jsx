import React, { useState } from 'react';
import logo from '../images/logo.png'
import axios from 'axios';
import Sidebar from '../components/Sidebar'
import { useEffect } from 'react';
import MovesCard from '../components/MovesCard';


const Home = () => {
    const [data, setData] = useState([]);

    const callAPI = async () => {
        try {
            const { data } = await axios.get('http://test.api.boxigo.in/sample-data/');
            setData(data?.Customer_Estimate_Flow);
            window.scrollTo(0, 0);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        callAPI();
    }, [])

    return (
        <div className='container' style={{ padding: '20px 30px' }}>
            <div className='w-25 mb-4'>
                <img src={logo} alt='logo' className='w-50' />
            </div>
            <div className='row'>
                <div className='col-md-2'><Sidebar /></div>
                <div className='col-md-10'>
                    <h5 className='text-secondary'>My Moves</h5>
                    {data?.map((d, i) => (
                        <>
                            <MovesCard
                                key={i}
                                from={d.moving_from}
                                to={d.moving_to}
                                request_id={d.estimate_id}
                                bhk={d.property_size}
                                floor={d.new_floor_no}
                                distance={d.distance}
                                moving_on={d.moving_on}
                                allData={d}
                            />
                            <hr />
                        </>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Home