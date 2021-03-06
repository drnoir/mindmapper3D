import * as React from 'react';
import {useState} from 'react';
import {Editor, EditorTools} from "@progress/kendo-react-editor";
import { Canvas} from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import * as THREE from 'three'
import Roboto from './assets/fonts/Roboto.json';
import * as htmlToImage from 'html-to-image';

const {
    Bold, Italic, Underline,
    AlignLeft, AlignRight, AlignCenter,
    Indent, Outdent,
    OrderedList, UnorderedList,
    Undo, Redo, Link, Unlink
} = EditorTools;

function MindMap() {

    const [journalText, setEntry] = useState(" ");
    const [journalkeywords, setKeywords] = useState([]);

    const textUpdate = (event) => {
        setEntry(event.html)
        save()
    }

    const save = (event) =>{
        const str = journalText;
        //regEx to strip out html markup
        const strStrip = str.replace(/<\/?("[^"]*"|'[^']*'|[^>])*(>|$)/g, "");
        // extract words from string
        const res = strStrip.split(" ");
        // setState with array of words from journal entry
        setKeywords(res);
    };

//used for random positioning
    function getRandomArbitrary(min, max) {
        return Math.random() * (max - min) + min;
    }


    function Box(props) {
        const intPos = getRandomArbitrary(0,15);
        const word = props.word;

        const material = new THREE.LineBasicMaterial({
            color: 'deeppink'
        });

        const font = new THREE.FontLoader().parse(Roboto);

        // configure font geometry
        const textOptions = {
            font,
            size: 1,
            height: 0.5
        };

        let points = [];
        let randX;
        let randY;
        let randZ;
        for ( let i = 0; i < 10 ; i ++ ) {

            randX = Math.random() * 2 - 1;
            randY = Math.random() * 2 - 1;
            randZ = Math.random() * 2 - 1;

            let particle = new THREE.Sprite( material );
            particle.position.x = randX;
            particle.position.y = randY;
            particle.position.z = randZ;


            particle.position.normalize();
            particle.position.multiplyScalar( Math.random() * 20 + 250);


            particle.scale.x = particle.scale.y = 2.5;
            particle.scale.y = particle.scale.y = 2.5;
            particle.scale.z = particle.scale.z = 2.5;
            points.push( particle.position );

        }
        // lines
        let geometry = new THREE.BufferGeometry().setFromPoints( points );
        let line = new THREE.Line( geometry, new THREE.LineBasicMaterial( { color: 0xffffff, opacity: 0.8 } ) );


        return (
            <line geometry={geometry}>
                <lineBasicMaterial attach="material" color={'white'} linewidth={25} linecap={'round'} linejoin={'round'} />
                <mesh  position={[intPos / Math.random() * 2 - 1, intPos / Math.random() * 2 - 1, intPos / Math.random() * 2 - 1]}>
                    <textGeometry attach='geometry' args={[word, textOptions]} />
                </mesh>
            </line>


        )
    }

    // take a picture of canvas
    function takeImage(elementId) {
        htmlToImage.toJpeg(document.getElementById('THREEContainer'), { quality: 100 })
            .then(function (dataUrl) {
                var link = document.createElement('a');
                link.download = 'my-image-name.jpeg';
                link.href = dataUrl;
                link.click();
            });
    }

    return(
        <div className={"MindMapContainer"}>
            <div className='app-banner-row'>
                <div className='app-banner-column'>
                    <div className='app-banner-column-left'>
                        <h2>Enter your thoughts here</h2>
                        <Editor
                            className="journal"
                            tools={[
                                [Bold, Italic, Underline],
                                [Undo, Redo],
                                [Link, Unlink],
                                [AlignLeft, AlignCenter, AlignRight],
                                [OrderedList, UnorderedList, Indent, Outdent]
                            ]}
                            contentStyle={{height: 550}}
                            value={journalText}
                            onChange={textUpdate}
                        />
                    </div>
                </div>
                <div className='app-banner-column'>
                    <div className='app-banner-column-right'>
                        <h2>3D MindMap</h2>
                        <div id="THREEContainer">
                            <Canvas style={{height:600}} dpr={[1, 2]}  camera={{ fov: 25 }}  gl={{ preserveDrawingBuffer: true }} >
                                <ambientLight intensity={0.5} />
                                <pointLight position={[10, 10, 5]} />
                                <pointLight position={[-10, -10, -10]} />
                                {journalkeywords ?
                                    journalkeywords.map((Word, index) => (
                                        <Box key={index} word={Word} />
                                    ))
                                    : null}
                                <OrbitControls />
                            </Canvas>
                        </div>
                    </div>
                    <button className ="photo" onClick={takeImage}>Record Snapshot</button>
                </div>
            </div>
        </div>
    )
}


export default MindMap;