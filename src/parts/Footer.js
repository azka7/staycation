import React from 'react'
import Button from 'element/Button'
import BrandIcon from 'parts/IconText'

export default function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-auto" style={{ width: 350 }}>
                        <BrandIcon/>
                        <p className="brand-tagline">
                            We kaboom your beauty holiday instantly and memorable.
                        </p>
                    </div>
                    <div className="col-auto mr-5">
                        <h6 className="mt-2">For Beginners</h6>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <Button type="link" href="/register">
                                    New Account
                                </Button>
                            </li>
                            <li className="list-group-item">
                                <Button type="link" href="/properties">
                                    Start Booking a Room
                                </Button>
                            </li>
                            <li className="list-group-item">
                                <Button type="link" href="/use-payments">
                                    Use Payments
                                </Button>
                            </li>
                        </ul>
                    </div>
                    <div className="col-2 mr-5">
                        <h6 className="mt-2">Explore Us</h6>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <Button type="link" href="/careers">
                                    Our Careers
                                </Button>
                            </li>
                            <li className="list-group-item">
                                <Button type="link" href="/privacy">
                                    Privacy
                                </Button>
                            </li>
                            <li className="list-group-item">
                                <Button type="link" href="/terms">
                                   Terms & Condition
                                </Button>
                            </li>
                        </ul>
                    </div>
                    <div className="col-3">
                        <h6 className="mt-2">Connect Us</h6>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <Button isExternal type="link" href="mailto:thazka.afkar@outlook.com">
                                    thazka.afkar@outlook.com
                                </Button>
                            </li>
                            <li className="list-group-item">
                                <Button isExternal type="link" href="tel:+6283821279021">
                                    +62838 - 2127 - 9021
                                </Button>
                            </li>
                            <li className="list-group-item">
                                <Button type="link">
                                   <span>StayCation, Cilandak, Jakarta Selatan</span>
                                </Button>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="col text-center copyrights">
                        Copyrights 2020 - Thazka Al Afkar - StayCation
                    </div>
                </div>
            </div>
        </footer>
    )
}
