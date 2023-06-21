import React from 'react'
import SideNav from './SideNav'
import Nav from './Nav'
import ContentContainer from './ContentContainer'
import ArtistPlaylist from './ArtistPlaylist'

function Page2() {
    return (
        <>
            <div className='body pt-2'>
                <div className='fixed-top'>
                    <SideNav />
                    <Nav />
                </div>
                <ContentContainer containerDivOne='content-container-div me-2 overflow-auto rounded' containerDivTwo='content-div text-white mx-auto'
                ArtistPlaylist={<ArtistPlaylist />}
                />
            </div>
        </>
    )
}

export default Page2