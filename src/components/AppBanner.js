import * as React from 'react';
import {Link} from 'react-router-dom'
function AppBanner(props) {
    return (
        <div className="app-banner"  style={{
            backgroundImage: `url(${props.bannerImage})`
        }}>
            <div className="app-banner-hero">
                <div className='app-banner-row'>
                    <div className='app-banner-column'>
                        <div className='app-banner-column-left'></div>
                    </div>
                    <div className='app-banner-column'>
                        <div className='app-banner-column-right'>
                            <h1>{props.headline}</h1>
                            <h3>{props.subheading}</h3>
                           <button className="app-banner-button"> <Link to="/MindMap">Get Started</Link></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AppBanner;