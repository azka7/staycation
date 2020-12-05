import React from 'react'
import Fade from 'react-reveal'
import Header from 'parts/Header'
import ProgressIllustration from 'assets/image/progress.svg'
import Button from 'element/Button'

export default function Progress() {
    return (
        <Fade>
            <Header isCentered />

            <div className="container ">
                <div className=" row justify-content-center text-center">
                    <div className="col-7">
                        <h4 className="text-gray-800 pb-5">
                            Sorry, this page still on Development
                        </h4>
                        
                        <Button className="btn px-5" type="link" href="/" hasShadow isPrimary>
                            Back To Home
                        </Button>
                    </div>
                </div>
            </div>
        </Fade>
    )
}
