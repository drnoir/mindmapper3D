import * as React from 'react';
import AppBanner from "./AppBanner";

let aboutBanner = '/img/face-banner.png';

class About extends React.Component {
    render() {
        return (
            <div>
                <AppBanner bannerImage={aboutBanner}
                           headline={"Do you experience Challenges with your mental health?"}
                           subheading={"Tell us what it is, find out what in means, view your mind in a 3D mindmap"}
                />
            </div>
        )
    }
}

export default About;