import * as React from 'react';
import AppBanner from "./AppBanner";

let aboutBanner = '/img/face-banner.png';

class About extends React.Component {
    render() {
        return (
            <div>
                <AppBanner bannerImage={aboutBanner}
                           headline={"Do you experience Challenges with your mental health?"}
                           subheading={"View your thoughts in a 3D mindmap and record snapshots"}
                />
            </div>
        )
    }
}

export default About;