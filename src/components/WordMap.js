import * as React from 'react';
import ReactWordcloud from 'react-wordcloud';
import "tippy.js/dist/tippy.css";
import "tippy.js/animations/scale.css";
import { select } from "d3-selection";

const size = [900 , 700];

function getCallback(callback) {
    return function (word, event) {
        const isActive = callback !== "onWordMouseOut";
        const element = event.target;
        const text = select(element);
        text
            .on("click", () => {
                if (isActive) {
                    window.open(`https://google.com/search?q=${word.text}`, "_blank");
                }
            })
            .transition()
            .attr("background", "white")
            .attr("font-size", isActive ? "300%" : "100%")
            .attr("text-decoration", isActive ? "underline" : "none");
    };
}

const callbacks = {
    getWordColor: (word) => (word.value > 50 ? "white" : "#84cef1"),
    getWordTooltip: (word) =>
        `The word "${word.text}" appears ${word.value} times.`,
    onWordClick: getCallback("onWordClick"),
    onWordMouseOut: getCallback("onWordMouseOut"),
    onWordMouseOver: getCallback("onWordMouseOver")
};



class WordMap extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            words:[]
        };
    }

    componentDidMount(){
        const keywords = this.props.keywords;
        const keywordsobj = Object.values(keywords);
        // will need to create a way to count each occurrence of word in keywords state
        console.log(this.props.keywords)
        this.setState({words:keywordsobj})
    }

    render() {

        return (
            <div className="row">
                <div className="wordcloud column">
                    <ReactWordcloud  callbacks={callbacks} keywords={this.props.words}   size={size}  />
                </div>
            </div>
        )
    }
}


export default  WordMap;