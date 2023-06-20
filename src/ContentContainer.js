import React from 'react'
import HomeSection1 from './HomeSection1'
import HomeSection2 from './HomeSection2'

function ContentContainer() {
    return (
        <>
            <div className='content-container-div me-2 overflow-auto rounded'>
                <div className='content-div text-white mx-auto'>
                    <HomeSection1 />
                    <HomeSection2 />
                </div>
            </div>
        </>
    )
}

export default ContentContainer