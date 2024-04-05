import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

function Project(){
    const sectionRef = useRef(null);
    const triggerRef = useRef(null);
    
    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {

        const pin = gsap.fromTo(sectionRef.current, {
            translateX: 0
        }, {
            translateX: "-300vw",
            ease: "none",
            duration: 1,
            scrollTrigger: {
                trigger: triggerRef.current,
                start:  "top top",
                end: "2000 top" ,
                scrub: 0.6,
                pin: true
            }
        });
        return () => {
            pin.kill()
        }
    }, []);
    return(
        <section className="scroll-section-outer">
            <div ref={triggerRef}>
                <div ref={sectionRef} className="scroll-section-inner">
                    <div className="scroll-section">
                        <div className="card" >
                            <img src="https://picsum.photos/400/400" className="" alt="..."/>
                            <div className="card_body">
                                <p className="card_text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                    <div className="scroll-section">
                        <div className="card" >
                            <img src="https://picsum.photos/400/400" className="" alt="..."/>
                            <div className="card_body">
                                <p className="card_text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                    <div className="scroll-section">
                        <div className="card" >
                            <img src="https://picsum.photos/400/400" className="" alt="..."/>
                            <div className="card_body">
                                <p className="card_text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                    <div className="scroll-section">
                    <div className="card" >
                            <img src="https://picsum.photos/400/400" className="" alt="..."/>
                            <div className="card_body">
                                <p className="card_text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Project;
