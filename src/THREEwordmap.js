import React, { useState } from 'react'
import { Canvas, useUpdate, useThree, useResource  } from '@react-three/fiber'
import { OrbitControls, Html } from '@react-three/drei'
import {connect} from "react-redux";
import * as THREE from 'three'
import Roboto from './assets/fonts/Roboto.json';

//used for random positioning
function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}


function Box(props) {
    const intPos = getRandomArbitrary(0,15);
    const word = props;
    const material = new THREE.LineBasicMaterial({
        color: 'deeppink'
    });

    console.log('wordcount'+word);
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


        // let spritey = makeTextSprite( " Test Gallery, ",
        //     { fontsize: 12, borderColor: {r:255, g:0, b:0, a:1.0}, backgroundColor: {r:255, g:100, b:100, a:0.8} } );

        particle.position.normalize();
        particle.position.multiplyScalar( Math.random() * 20 + 250);


        particle.scale.x = particle.scale.y = 2.5;
        particle.scale.y = particle.scale.y = 2.5;
        particle.scale.z = particle.scale.z = 2.5;
        points.push( particle.position );

    }
    // lines
    let geometry = new THREE.BufferGeometry().setFromPoints( points );
    // let textMap = new THREE.TextBufferGeometry("hello world", geometry, new THREE.TextBufferGeometry( { color: 0xffffff, opacity: 0.8 } ) );

    // let textMap = new THREE.TextGeometry( "Hello World", { color: 0xffffff, opacity: 0.8 } );
    let line = new THREE.Line( geometry, new THREE.LineBasicMaterial( { color: 0xffffff, opacity: 0.8 } ) );


    return (
        <line geometry={geometry}>
            <lineBasicMaterial attach="material" color={'white'} linewidth={25} linecap={'round'} linejoin={'round'} />
            <mesh  position={[intPos / Math.random() * 2 - 1, intPos / Math.random() * 2 - 1, intPos / Math.random() * 2 - 1]}>
                <textGeometry attach='geometry' args={[props.word.text, textOptions]} />
            </mesh>
        </line>


    )
}


function THREEWordMap (props) {
    const {keywords} = props;
    return (
        <div className="THREEContainer">
            <Canvas style={{height:1000}} dpr={[1, 2]}  camera={{ fov: 25 }} >
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 5]} />
                <pointLight position={[-10, -10, -10]} />
                {keywords ?
                    keywords.map((Word, index) => (
                        <Box key={index} word={Word} />
                    ))
                    : null}
                <OrbitControls />
            </Canvas>
        </div>
    )
}



export default THREEWordMap;