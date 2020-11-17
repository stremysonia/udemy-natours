import React from 'react'
import './Smoke.css'
import { Player } from 'video-react'

const Smoke = () => {
        return (
                <>
                    <Player src="smoke.mp4" autoPlay muted type='mp4'/>
                </>
        );
}
export default Smoke;