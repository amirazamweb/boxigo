import React from 'react';
import logo from '../images/logo.png'
import { useMove } from '../context/moveDetails';
import MovesCard from '../components/MovesCard';

const MoveDetails = () => {
    const [moveDetails, setMoveDetails] = useMove();
    let count = 0;
    return (
        <div className='container text-secondary' style={{ padding: '20px 80px 10px 30px' }}>
            <div className='w-25 mb-4'>
                <img src={logo} alt='logo' className='w-50' />
            </div>
            <div>
                <MovesCard
                    from={moveDetails.moving_from}
                    to={moveDetails.moving_to}
                    request_id={moveDetails.estimate_id}
                    bhk={moveDetails.property_size}
                    floor={moveDetails.new_floor_no}
                    distance={moveDetails.distance}
                    moving_on={moveDetails.moving_on}
                />
                <div className='mt-3 d-flex justify-content-between align-items-center'>
                    <h6 className='font-weight-bold'>Additional Information</h6>
                    <button className='bg-secondary text-light btn-text border border-secondary'>Edit Additional Info</button>
                </div>

                <div>
                    <small>Test Data</small>
                </div>

                <div>
                    <div className='mt-3 d-flex justify-content-between align-items-center'>
                        <h6 className='font-weight-bold'>House Details</h6>
                        <button className='bg-secondary text-light btn-text border border-secondary'>Edit House Details</button>
                    </div>
                    <div>
                        <h6 className='small-font-weight-bold color-saffron mt-3'>Existing House Details</h6>
                        <div className='mt-3 w-85 d-flex justify-content-between align-items-center'>
                            <div>
                                <h6 className='small-font-weight-bold'>Floor No.</h6>
                                <small>{moveDetails.old_floor_no}</small>
                            </div>
                            <div>
                                <h6 className='small-font-weight-bold'>Elevator Available.</h6>
                                <small>{moveDetails.old_elevator_availability}</small>
                            </div>
                            <div>
                                <h6 className='small-font-weight-bold'>Distance from Elevator / Staicase to truck</h6>
                                <small>{moveDetails.old_parking_distance}</small>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h6 className='small-font-weight-bold color-saffron mt-3'>New House Details</h6>
                        <div className='mt-3 w-85 d-flex justify-content-between align-items-center'>
                            <div>
                                <h6 className='small-font-weight-bold'>Floor No.</h6>
                                <small>{moveDetails.new_floor_no}</small>
                            </div>
                            <div>
                                <h6 className='small-font-weight-bold'>Elevator Available.</h6>
                                <small>{moveDetails.new_elevator_availability}</small>
                            </div>
                            <div>
                                <h6 className='small-font-weight-bold'>Distance from Elevator / Staicase to truck</h6>
                                <small>{moveDetails.new_parking_distance}</small>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <div className='mt-3 d-flex justify-content-between align-items-center'>
                        <h6 className='font-weight-bold'>Inventory Details</h6>
                        <button className='bg-secondary text-light btn-text border border-secondary'>Edit Inventory</button>
                    </div>

                    {/* accordian */}
                    <div class="accordion accordion-flush mt-3" id="accordionFlushExample">

                        {moveDetails?.items?.inventory.map((item, i, j) => (
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#${item.name}`} aria-expanded="false" aria-controls={`${item.name}`}>
                                        {item.displayName} {
                                            item.category.forEach((c) => i += c.items.length)}
                                        <span className='item-count'>{i - count++}</span>
                                    </button>
                                </h2>
                                <div id={`${item.name}`} class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                    <div class="accordion-body">
                                        <div className='child-grid text-secondary'>
                                            {item.category.map((ch, i) => (
                                                <div className='margin-grid-items' key={i}>
                                                    <h6 className='font-weight-bold'>{ch.displayName}</h6>
                                                    <div>
                                                        {
                                                            ch.items.map((chhh) => (
                                                                <div className='mb-3'>
                                                                    <small>
                                                                        {chhh.displayName} <span className='custom-right-float font-weight-bold'>1</span>
                                                                    </small><br />
                                                                    <small className='font-weight-600'>{chhh.typeOptions}</small>
                                                                </div>
                                                            ))
                                                        }
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MoveDetails;