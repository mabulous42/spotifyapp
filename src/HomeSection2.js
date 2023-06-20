import React from 'react'

function HomeSection2() {
    return (
        <>
            <div className=''>
                <div className='d-flex align-items-center justify-content-between mb-3'>
                    <a href="" className='made-for-text'>Made For Mustapha Abbas Babatunde</a>
                    <div>Show all</div>
                </div>
                <div className='d-flex'>
                    <div className='daily-mix-div py-3 rounded me-4'>
                        <div className='daily-mix-inner-div mx-auto'>
                            <div className='d-img-div mb-3 bg-warning d-flex align-items-center justify-content-center'>
                                <img src={require("./image/daily-mix3.jpg")} alt="" className='w-100'/>
                            </div>
                            <div className='d-mix-text'>Daily Mix 3</div>
                            <span>Rord Kelly, Lil Kesh, Tia and more</span>
                        </div>                        
                    </div>
                    <div className='daily-mix-div py-3 rounded me-4'>
                        <div className='daily-mix-inner-div mx-auto'>
                            <div className='d-img-div mb-3 bg-warning d-flex align-items-center justify-content-center'>
                                <img src={require("./image/daily-mix3.jpg")} alt="" className='w-100'/>
                            </div>
                            <div className='d-mix-text'>Daily Mix 3</div>
                            <span>Rord Kelly, Lil Kesh, Tia and more</span>
                        </div>                        
                    </div>
                    <div className='daily-mix-div py-3 rounded me-4'>
                        <div className='daily-mix-inner-div mx-auto'>
                            <div className='d-img-div mb-3 bg-warning d-flex align-items-center justify-content-center'>
                                <img src={require("./image/daily-mix3.jpg")} alt="" className='w-100'/>
                            </div>
                            <div className='d-mix-text'>Daily Mix 3</div>
                            <span>Rord Kelly, Lil Kesh, Tia and more</span>
                        </div>                        
                    </div>
                    <div className='daily-mix-div py-3 rounded'>
                        <div className='daily-mix-inner-div mx-auto'>
                            <div className='d-img-div mb-3 bg-warning d-flex align-items-center justify-content-center'>
                                <img src={require("./image/daily-mix3.jpg")} alt="" className='w-100'/>
                            </div>
                            <div className='d-mix-text'>Daily Mix 3</div>
                            <span>Rord Kelly, Lil Kesh, Tia and more</span>
                        </div>                        
                    </div>                    
                </div>
            </div>
        </>
    )
}

export default HomeSection2