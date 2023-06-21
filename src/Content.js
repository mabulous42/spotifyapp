import React from 'react'
import ContentContainer from './ContentContainer'
import HomeSection1 from './HomeSection1'
import HomeSection2 from './HomeSection2'
import HomeSection3 from './HomeSection3'

function Content() {
    return (
        <>
            <ContentContainer containerDivOne='content-container-div me-2 overflow-auto rounded' containerDivTwo='content-div text-white mx-auto' 
            HomeSection1={<HomeSection1 />}
            HomeSection2={<HomeSection2 />}
            HomeSection3={<HomeSection3 />}
            />
        </>
    )
}

export default Content