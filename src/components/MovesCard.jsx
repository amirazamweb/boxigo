import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useMove } from '../context/moveDetails';

const MovesCard = ({ from, to, request_id, bhk, floor, distance, moving_on, allData }) => {
    const navigate = useNavigate();
    const [moveDetails, setMoveDetails] = useMove();

    // more details handler
    const moreDetailsHandler = () => {
        navigate('/move-details');
        setMoveDetails(allData);
    }

    return (
        <div className='text-secondary'>
            <div className='d-flex justify-content-between align-items-center'>
                <div style={{ width: '40%' }}>
                    <h6 className='font-weight-bold'>From</h6>
                    <small>{from}</small>
                </div>

                <div className='color-saffron'>
                    <i className="fa-solid fa-arrow-right-long"></i>
                </div>

                <div style={{ width: '40%' }}>
                    <h6 className='font-weight-bold'>To</h6>
                    <small>{to}</small>
                </div>

                <div>
                    <h6 className='font-weight-bold'>Request#</h6>
                    <p className='color-saffron font-weight-bold'>{request_id}</p>
                </div>
            </div>

            <div className='d-flex justify-content-between mt-2'>
                <div>
                    <p><span className='color-saffron'><i className="fa-solid fa-house"></i></span> <span>{bhk}</span></p>
                </div>

                <div>
                    <p><span className='color-saffron'><i className="fa-solid fa-arrow-right-to-city"></i></span> <span>{floor}</span></p>
                </div>

                <div>
                    <p><span className='color-saffron'><i className="fa-solid fa-route"></i></span> <span>{distance}</span></p>
                </div>

                <div>
                    <p><span className='color-saffron'><i className="fa-solid fa-calendar-days"></i></span> <span>{moving_on}</span></p>
                </div>

                <div>
                    <button className='border-saffron btn-text color-saffron me-2' onClick={moreDetailsHandler}>View more details</button>
                    <button className='bg-saffron border-saffron btn-text text-light'>Quotes Awaiting</button>
                </div>
            </div>

            <div>
                <small><span className='color-saffron'><i className="fa-solid fa-triangle-exclamation"></i></span> <span><b>Disclaimer:&nbsp;</b>Please update your move date before two days of shifting</span></small>
            </div>
        </div>
    )
}

export default MovesCard