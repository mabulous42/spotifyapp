import React from 'react'
import SongMix from './SongMix'

function HomeSection3() {
    return (
        <>
        <div className='sect2 mx-auto'>
            <div className='d-flex align-items-center justify-content-between mb-3'>
                <a href="" className='made-for-text'>Your top mixes</a>
                <div>Show all</div>
            </div>
            <div className='d-flex'>
            <SongMix mixStyle='daily-mix-div py-3 rounded me-4 mb-3' mixImg={require("./image/seyi-mix.jpg")} mixTitle="Seyi Vibez Mix" mixFeature="Young John, Kizz Daniel and Poco Lee" />
            <SongMix mixStyle='daily-mix-div py-3 rounded me-4 mb-3' mixImg={require("./image/buju-mix.jpg")} mixTitle="Bnxn Mix" mixFeature="Seyi Vibez, Young John and Ruger" />
            <SongMix mixStyle='daily-mix-div py-3 rounded me-4 mb-3' mixImg={require("./image/wande-mix.jpg")} mixTitle="Wande Coal Mix" mixFeature="Asake, Omah Lay and Pheelz" />
            <SongMix mixStyle='daily-mix-div py-3 rounded mb-3' mixImg={require("./image/90s.jpg")} mixTitle="90s Mix" mixFeature="All-4-One, Lucky Dube, Backstreet Boys and more" />
            </div>
        </div>
        </>
    )
}

export default HomeSection3