import React from 'react'
import ContentContainer from './ContentContainer'
import HomeSection1 from './HomeSection1'

function ArtistPlaylist() {
  return (
    <>
        <div className='mx-auto playing-artist-songs d-flex align-items-center'>
            <div className='me-3 d-flex align-items-center justify-content-center'>
                <img src={require("./image/ti-blaze.jpg")} alt="" className='rounded-circle playlist-img-div'/>
            </div>
            <div className='artist-playing'>
                <div className='d-flex'>
                    <div className='me-2'><i class="bi bi-patch-check-fill verified"></i></div>
                    <span>Verified Artist</span>
                </div>
                <h1>T.I BLAZE</h1>
                <div className='listener mt-4'>273,896 monthly listeners</div>
            </div>
        </div>
    </>
  )
}

export default ArtistPlaylist