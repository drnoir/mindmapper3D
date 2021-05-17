import * as React from 'react';
import AppBanner from "./AppBanner";

let aboutBanner = '/img/face-banner.png';
let writingimage = '/img/writing.jpg';
let wordsimage = '/img/words-map.jpg';
let photoimage = '/img/photo.jpg';
class About extends React.Component {
    render() {
        return (
            <div className={"container"}>
                <div className={"col"}>
                    <AppBanner bannerImage={aboutBanner}
                               headline={"Do you experience Challenges with your mental health?"}
                               subheading={"View your thoughts in a 3D mindmap and record snapshots"}
                    />
                </div>
                <div className={"col"}>
                    <div className={"center-text"}>
                        <h1>About Us</h1>
                        <p>We are a a frontend developer and a UI / UX designer who have created this app for the WorthyWeb Hackathon.</p>
                        <p>Click on make a MindMap to add some notes on your current mental state, and view them in a 3D visualisation.</p>
                        <p>Take snapshots of your mindmap for future reference</p>
                    </div>
                </div>
                <div className={"col"}>
                    <div className={"center-text"}>
                    <h1>How it works</h1>
                    </div>
                    <div className={"container-about"}>
                        <div className={"about-item"}>
                            <img src={writingimage} />
                            <h2 className={"center-text"}>Make your notes</h2>
                        </div>
                        <div className={"about-item"}>
                            <img src={wordsimage} />
                            <h2 className={"center-text"}>View your 3D Mindmap</h2>
                        </div>
                        <div className={"about-item"}>
                            <img src={photoimage} />
                            <h2 className={"center-text"}>Take snapshots</h2>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default About;