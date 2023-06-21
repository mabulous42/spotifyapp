import React from 'react'
import HomeSection1 from './HomeSection1'
import HomeSection2 from './HomeSection2'
import HomeSection3 from './HomeSection3'

function ContentContainer(props) {
    return (
        <>
            <div className={props.containerDivOne}>
                <div className={props.containerDivTwo}>
                    {props.HomeSection1}
                    {props.HomeSection2}
                    {props.HomeSection3}
                    {props.ArtistPlaylist}
                </div>
            </div>
        </>
    )
}

export default ContentContainer