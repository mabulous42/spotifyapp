import React from 'react'
import SongMix from './SongMix'

function HomeSection2() {
    return (
        <>
        <div className='sect2 mx-auto'>
            <div className=' d-flex align-items-center justify-content-between mb-3'>
                <a href="" className='made-for-text'>Made For Mustapha Abbas Babatunde</a>
                <div>Show all</div>
            </div>
            <div className='d-flex'>
                <SongMix mixStyle='daily-mix-div py-3 rounded me-4 mb-3' mixImg={require("./image/daily-mix3.jpg")} mixTitle="Daily Mix 3" mixFeature="Rord Kelly, Lil Kesh, Tia and more" />
                <SongMix mixStyle='daily-mix-div py-3 rounded me-4 mb-3' mixImg={require("./image/daily-mix4.jpg")} mixTitle="Daily Mix 4" mixFeature="Ajesings, Mansa Jabulani, Lade and more" />
                <SongMix mixStyle='daily-mix-div py-3 rounded me-4 mb-3' mixImg={require("./image/daily-mix5.jpg")} mixTitle="Daily Mix 5" mixFeature="Mentro Boomin, Lil Durk, 21 Savage and more" />
                <SongMix mixStyle='daily-mix-div py-3 rounded mb-3' mixImg={require("./image/discover-weekly.jpg")} mixTitle="Discover Weekly" mixFeature="Your weekly mixtape of fresh music. Enjoy new music and..." />
            </div>
        </div>
        </>
    )
}

export default HomeSection2