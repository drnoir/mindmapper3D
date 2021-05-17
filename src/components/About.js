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
                               subheading={"View your thoughts in a 3D MindMap and record snapshots"}
                    />
                </div>
                <div className={"col"}>
                    <div className={"center-text"}>
                        <h1>About Us</h1>
                        <p>We are a <a href="https://www.chrisgodber.co.uk" target="_blank" rel={"noreferrer"}>frontend developer</a> and
                            UI / UX designer who have created this app for the WorthyWeb Hackathon.</p>
                        <p>Click on make a MindMap to add some notes on your current mental state, and view them in a 3D
                            visualisation.</p>
                        <p>Take snapshots of your 3D MindMap for future reference</p>
                    </div>
                </div>
                <div className={"col"}>
                    <div className={"center-text"}>
                        <h1>How it works</h1>
                    </div>
                    <div className={"container-about"}>
                        <div className={"about-item"}>
                            <img src={writingimage} alt={"Make your notes"}/>
                            <h2 className={"center-text"}>Make your notes</h2>
                        </div>
                        <div className={"about-item"}>
                            <img src={wordsimage} alt={"View your 3D Mindmap"}/>
                            <h2 className={"center-text"}>View your 3D Mindmap</h2>
                        </div>
                        <div className={"about-item"}>
                            <img src={photoimage} alt={"Take snapshots"}/>
                            <h2 className={"center-text"}>Take snapshots</h2>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default About;