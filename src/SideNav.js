import React from 'react'

function SideNav() {
    return (
        <>
            <div className='text-white w-25 m-2 position-fixed side-nav-div rounded'>
                <div className='home-nav-div mb-2 py-3 rounded d-flex align-items-center justify-content-center'>
                    <button className='col-sm-10 border-0 text-white'>
                        <div className='d-flex align-items-center mb-3'>
                            <div className='me-4'><i className="bi bi-house-door-fill fs-4"></i></div>
                            <span className='home-text mt-1'>Home</span>
                        </div>
                        <div className='d-flex align-items-center search-div'>
                            <div className='me-4'><i className="bi bi-search fs-5 search-icon"></i></div>
                            <span className='search-text ms-1'>Search</span>
                        </div>
                    </button>
                </div>
                <div className='rounded playlist-nav-div'>
                    <div className='py-2 shadow-lg'>
                        <div className='mx-auto col-sm-10 mb-3 d-flex align-items-center justify-content-between'>
                            <button className='library-btn border-0 text-white p-0 d-flex align-items-center'>
                                <div className='me-3'><i className="bi bi-collection-fill fs-4 library-icon"></i></div>
                                <div className='library-text'>Your Library</div>
                            </button>
                            <div className='d-flex align-items-center'>
                                <div className='arrow-div d-flex align-items-center justify-content-center rounded-circle me-2'><i class="bi bi-plus fs-3 plus-icon"></i></div>
                                <div className='arrow-div d-flex align-items-center justify-content-center rounded-circle'><i class="bi bi-arrow-right-short fs-3 arrow-icon"></i></div>
                            </div>
                        </div>
                        <div className='playlist-artist-div mb-1 mx-auto col-sm-11'>
                            <button className='p-0 me-2 border-0 text-white'>
                                <span className='rounded-pill'>Playlists</span>
                            </button>
                            <button className='p-0 border-0 text-white'>
                                <span className='rounded-pill'>Artists</span>
                            </button>
                        </div>
                    </div>
                    <div className='overflow-auto scroll-div py-2'>
                        <div className=''>
                            <div className='col-sm-11 mx-auto d-flex align-items-center justify-content-between mb-2'>
                                <div><i className="bi bi-search search-icon2"></i></div>
                                <div className='d-flex align-items-center'>
                                    <div className='me-2 recent-text'>Recents</div>
                                    <div className='mt-1'><i class="bi bi-caret-down-fill drop-icon"></i></div>
                                </div>
                            </div>
                            <div className='artist-div mx-auto'>
                                <div className='artist-inner-div d-flex align-items-center rounded p-2'>
                                    <div className='me-2 img-div d-flex align-items-center justify-content-center'>
                                        <img src={require("./image/burna-boy.jpg")} alt="" className='w-100 rounded-circle'/>
                                    </div>
                                    <div>
                                        <div className='artist-name-text'>Burna Boy</div>
                                        <div className='artist-text'>Artist</div>
                                    </div>
                                </div>
                                <div className='artist-inner-div d-flex align-items-center rounded p-2'>
                                    <div className='me-2 img-div d-flex align-items-center justify-content-center'>
                                        <img src={require("./image/burna-boy.jpg")} alt="" className='w-100 rounded-circle'/>
                                    </div>
                                    <div>
                                        <div className='artist-name-text'>Burna Boy</div>
                                        <div className='artist-text'>Artist</div>
                                    </div>
                                </div>
                                <div className='artist-inner-div d-flex align-items-center rounded p-2'>
                                    <div className='me-2 img-div d-flex align-items-center justify-content-center'>
                                        <img src={require("./image/burna-boy.jpg")} alt="" className='w-100 rounded-circle'/>
                                    </div>
                                    <div>
                                        <div className='artist-name-text'>Burna Boy</div>
                                        <div className='artist-text'>Artist</div>
                                    </div>
                                </div>
                                <div className='artist-inner-div d-flex align-items-center rounded p-2'>
                                    <div className='me-2 img-div d-flex align-items-center justify-content-center'>
                                        <img src={require("./image/burna-boy.jpg")} alt="" className='w-100 rounded-circle'/>
                                    </div>
                                    <div>
                                        <div className='artist-name-text'>Burna Boy</div>
                                        <div className='artist-text'>Artist</div>
                                    </div>
                                </div>
                                <div className='artist-inner-div d-flex align-items-center rounded p-2'>
                                    <div className='me-2 img-div d-flex align-items-center justify-content-center'>
                                        <img src={require("./image/burna-boy.jpg")} alt="" className='w-100 rounded-circle'/>
                                    </div>
                                    <div>
                                        <div className='artist-name-text'>Burna Boy</div>
                                        <div className='artist-text'>Artist</div>
                                    </div>
                                </div>
                                <div className='artist-inner-div d-flex align-items-center rounded p-2'>
                                    <div className='me-2 img-div d-flex align-items-center justify-content-center'>
                                        <img src={require("./image/burna-boy.jpg")} alt="" className='w-100 rounded-circle'/>
                                    </div>
                                    <div>
                                        <div className='artist-name-text'>Burna Boy</div>
                                        <div className='artist-text'>Artist</div>
                                    </div>
                                </div>
                                <div className='artist-inner-div d-flex align-items-center rounded p-2'>
                                    <div className='me-2 img-div d-flex align-items-center justify-content-center'>
                                        <img src={require("./image/burna-boy.jpg")} alt="" className='w-100 rounded-circle'/>
                                    </div>
                                    <div>
                                        <div className='artist-name-text'>Burna Boy</div>
                                        <div className='artist-text'>Artist</div>
                                    </div>
                                </div>
                                <div className='artist-inner-div d-flex align-items-center rounded p-2'>
                                    <div className='me-2 img-div d-flex align-items-center justify-content-center'>
                                        <img src={require("./image/burna-boy.jpg")} alt="" className='w-100 rounded-circle'/>
                                    </div>
                                    <div>
                                        <div className='artist-name-text'>Burna Boy</div>
                                        <div className='artist-text'>Artist</div>
                                    </div>
                                </div>
                                <div className='artist-inner-div d-flex align-items-center rounded p-2'>
                                    <div className='me-2 img-div d-flex align-items-center justify-content-center'>
                                        <img src={require("./image/burna-boy.jpg")} alt="" className='w-100 rounded-circle'/>
                                    </div>
                                    <div>
                                        <div className='artist-name-text'>Burna Boy</div>
                                        <div className='artist-text'>Artist</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SideNav