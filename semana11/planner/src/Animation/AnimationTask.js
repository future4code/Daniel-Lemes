import React, { useState } from 'react';
import Lottie from 'react-lottie';
import animationData from "../animationTask.json";
import styled from "styled-components"

const Pointer = styled.div`
cursor:pointer
`

export  function AnimationTask (props)  {
    const [animationState] = useState({ isStopped: false, isPaused: false, direction:1 })

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };
    const animation = <Lottie options={defaultOptions}
        height={30}
        width={150}
        direction={animationState.direction}
        isStopped={animationState.isStopped}
        isPaused={animationState.isPaused} />

        return(
            <Pointer>
                {animation}
            </Pointer>
        )
}