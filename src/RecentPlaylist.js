import React from 'react'

function RecentPlaylist(props) {
    return (
        <>
            <button className={props.myClass}>
                <div className='play-pix me-3 d-flex align-items-center justify-content-center'>
                    <img src={props.myImage} alt="" className='w-100 rounded-start' />
                </div>
                <div className='artistName'>{props.myName}</div>
            </button>
        </>
    )
}

export default RecentPlaylist