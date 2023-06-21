import React from 'react'

function SongMix(props) {
    return (
        <>
            <div className={props.mixStyle}>
                <div className='daily-mix-inner-div mx-auto'>
                    <div className='d-img-div mb-3 d-flex align-items-center justify-content-center'>
                        <img src={props.mixImg} alt="" className='w-100' />
                    </div>
                    <div className='d-mix-text'>{props.mixTitle}</div>
                    <span>{props.mixFeature}</span>
                </div>
            </div>
        </>
    )
}

export default SongMix