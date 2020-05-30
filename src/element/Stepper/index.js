import React, { useState } from "react";
import propTypes from "prop-types";

export default function Stepper(props) {
    const { steps, initialStep } = props
    const stepsKeys = Object.keys(steps)

    // state local
    const [CurrentStep, setCurrentStep] = useState (
        stepsKeys.indexOf(initialStep) > -1 ? initialStep : stepsKeys[0]
    )

    const totalStep = stepsKeys.length
    // untuk mencari berdasarkan step yang sedang aktif
    const indexStep = stepsKeys.indexOf(CurrentStep)

    // step aktif
    function prevStep() {
        if (+indexStep > 0) setCurrentStep(stepsKeys[indexStep - 1])
    }

    function nextStep() {
        if (+indexStep < totalStep) setCurrentStep(stepsKeys[indexStep + 1])
    }

    return (
        <>
            {/* kembalikan nilai dengan melewati function */}
            {props.children (prevStep, nextStep, CurrentStep, steps)}  
        </>
    )
}

Stepper.propTypes = {
    data: propTypes.object.isRequired,
    initialStep: propTypes.string,
};

export { default as Numbering } from "./Numbering";
export { default as Meta } from "./Meta";
export { default as Controller } from "./Controller";
export { default as MainContent } from "./MainContent";