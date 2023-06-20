import React from 'react'

function Nav() {
    return (
        <>
            <div className='nav-bar-div mt-2 me-2'>
                <button className='rounded-top nav-bar d-flex align-items-center justify-content-between px-4 py-3 border-0'>
                    <div className='d-flex'>
                        <div className='me-2 arr-back rounded-circle text-white d-flex align-items-center justify-content-center'><i className="bi bi-chevron-left me-1 fs-5 mb-1"></i></div>
                        <div className='arr-forward rounded-circle text-white d-flex align-items-center justify-content-center'><i className="bi bi-chevron-right ms-1 fs-5 mb-1"></i></div>
                    </div>
                    <div className='d-flex align-items-center'>
                        <div className='me-2 d-flex align-items-center install-app text-white pb-1 rounded-pill'>
                            <div className='me-1'><i className="bi bi-arrow-down-circle install"></i></div>
                            <span className=''>Install App</span>
                        </div>
                        <div className='me-1 text-white rounded-circle profile d-flex align-items-center justify-content-center'><i className="bi bi-person fs-5"></i></div>
                    </div>
                </button>
            </div>
        </>
    )
}

export default Nav