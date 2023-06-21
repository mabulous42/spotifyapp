import React from 'react'
import RecentPlaylist from './RecentPlaylist'

function HomeSection1() {
  return (
    <div className='h-s-1 mx-auto'>
      <h2 className='greetings-text mb-3'>Good Morning</h2>
      <div className='d-flex flex-wrap'>
        <RecentPlaylist myClass="mb-3 text-white me-4 rounded d-flex align-items-center r-playlist-btn" myImage={require("./image/zino.jpg")} myName="Zinoleesky"/>
        <RecentPlaylist myClass="mb-3 text-white me-4 rounded d-flex align-items-center r-playlist-btn" myImage={require("./image/seyi-vibez.jpg")} myName="Seyi Vibez"/>
        <RecentPlaylist myClass="mb-3 text-white rounded d-flex align-items-center r-playlist-btn" myImage={require("./image/top-songs.jpg")} myName="Top Songs - Nigeria"/>
        <RecentPlaylist myClass="mb-3 text-white me-4 rounded d-flex align-items-center r-playlist-btn" myImage={require("./image/hat-trick.jpg")} myName="Hat-trick"/>
        <RecentPlaylist myClass="mb-3 text-white me-4 rounded d-flex align-items-center r-playlist-btn" myImage={require("./image/daily-mix.jpg")} myName="Daily Mix 1"/>
        <RecentPlaylist myClass="mb-3 text-white rounded d-flex align-items-center r-playlist-btn" myImage={require("./image/daily-mix2.jpg")} myName="Daily Mix 2"/>
      </div>
    </div>
  )
}

export default HomeSection1