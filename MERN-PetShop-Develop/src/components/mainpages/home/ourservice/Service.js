import React from 'react';
import './service.css';
import { BsPlusCircle } from 'react-icons/bs';
import { Link } from 'react-router-dom';
export const Service = () => {
    return (
        <>
            <div className="our-service-wrapper">
                <div className="our-service-label-container">
                    <div className="our-service-image">
                        <img
                            src="https://demothemedh.b-cdn.net/petpuzzy/wp-content/uploads/2022/07/h1-foot.png"
                            alt=""
                        />
                    </div>
                    <div className="our-service-label">
                        <p>Our Services</p>
                    </div>
                    <div className="our-service-paragraph">
                        <p>
                            Grooming & Supply provides grooming services for all dog and cat breeds. We are fully
                            committed to the health.
                        </p>
                    </div>
                </div>
                <div className="our-service-grid-container">
                    <div className="our-service-container">
                        <div className="our-service-container-image">
                            <img
                                src="https://demothemedh.b-cdn.net/petpuzzy/wp-content/uploads/2022/06/service1.svg"
                                alt=""
                            />
                        </div>
                        <div className="our-service-container-label">
                            <p>Vaccination</p>
                        </div>
                        <div className="our-service-container-paragraph">
                            <p>
                                With lots of unique blocks you can easily create a page without coding with Appmax
                                easily.​
                            </p>
                        </div>
                    </div>
                    <div className="our-service-container">
                        <div className="our-service-container-image">
                            <img
                                src="https://demothemedh.b-cdn.net/petpuzzy/wp-content/uploads/2022/06/service2.svg"
                                alt=""
                            />
                        </div>
                        <div className="our-service-container-label">
                            <p>Pet Grooming</p>
                        </div>
                        <div className="our-service-container-paragraph">
                            <p>
                                We know how to make your pet more classy. With the dog / cat hair trimming service, we
                                will help the children become the most perfect version.​
                            </p>
                        </div>
                        <Link to="/grooming">Go to</Link>
                    </div>
                    <div className="our-service-container">
                        <div className="our-service-container-image">
                            <img
                                src="https://demothemedh.b-cdn.net/petpuzzy/wp-content/uploads/2022/06/service3.svg"
                                alt=""
                            />
                        </div>
                        <div className="our-service-container-label">
                            <p>Hotel</p>
                        </div>
                        <div className="our-service-container-paragraph">
                            <p>
                                Every action at PET FIRST starts with the mission of Sending Love. Every new pet that
                                comes to us is taken care of by a team of experienced staff​
                            </p>
                        </div>
                    </div>
                    <div className="our-service-container">
                        <div className="our-service-container-image">
                            <img
                                src="https://demothemedh.b-cdn.net/petpuzzy/wp-content/uploads/2022/06/service4.svg"
                                alt=""
                            />
                        </div>
                        <div className="our-service-container-label">
                            <p>Cleaning​</p>
                        </div>
                        <div className="our-service-container-paragraph">
                            <p>
                                With lots of unique blocks you can easily create a page without coding with Appmax
                                easily.​
                            </p>
                        </div>
                        <Link to="/cleaning">Go to</Link>
                    </div>
                </div>
                {/* <div className="our-service-btn">
                    <button>
                        Learn More <BsPlusCircle />
                    </button>
                </div> */}
            </div>
        </>
    );
};
