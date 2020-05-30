import React from 'react'
import Fade from 'react-reveal'
import CompletedIllustration from 'assets/image/completed.jpg'
import Button from 'element/Button'

export default function Completed() {
    return (
        <Fade>
            <div className="container" style={{ marginBottom: 30 }}>
                <div className="row justify-content-center text-center">
                    <div className="col-4">
                        <img
                            src={CompletedIllustration}
                            className="img-fluid"
                            alt="completed checkout apartmen"
                        />
                        <p className="text-gray-500">
                            We will you via email later once the transaction has been
                            accepted
                        </p>
                    </div>
                </div>
            </div>
        </Fade>
    )
}
