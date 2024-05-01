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
            translateX: "-100vw",
            ease: "none",
            duration: 1,
            scrollTrigger: {
                trigger: triggerRef.current,
                start:  "top top",
                end: "1000 top" ,
                scrub: 1,
                pin: true,
                // snap: 1 / (sections.length - 1),
                // end: ()=> "+=" + document.querySelectorAll(triggerRef.current).offsetWidth
            }
        });

        return () => {
            pin.kill();
        }
    }, []);
    return(
        <section className="scroll-section-outer">
            <div className="text-wrapper">
                <span>Showcase 
                    <i class="fa-solid fa-star"></i>
                </span>
                <span>Showcase 
                    <i class="fa-solid fa-star"></i>
                </span>
                <span>Showcase 
                    <i class="fa-solid fa-star"></i>
                </span>
                <span>Showcase 
                    <i class="fa-solid fa-star"></i>
                </span>
                <span>Showcase 
                    <i class="fa-solid fa-star"></i>
                </span>
                <span>Showcase 
                    <i class="fa-solid fa-star"></i>
                </span>
                <span>Showcase 
                    <i class="fa-solid fa-star"></i>
                </span>
                <span>Showcase 
                    <i class="fa-solid fa-star"></i>
                </span>
                <span>Showcase 
                    <i class="fa-solid fa-star"></i>
                </span>
                <span>Showcase 
                    <i class="fa-solid fa-star"></i>
                </span>
                <span>Showcase 
                    <i class="fa-solid fa-star"></i>
                </span>
                <span>Showcase 
                    <i class="fa-solid fa-star"></i>
                </span>
            </div>
            
            
            <div ref={triggerRef} className="scroll">
                <div ref={sectionRef} className="scroll-section-inner">
                <div className="wrapper__subtitle">
                <h2 className="subtitle">Project</h2>
                <p className="subtitle__text">I played a key role in project development. 
                Here's a carefully selected showcase highlighting 
                expertise and achieved results 
                </p>
                
                    <a className="btn btn1" href="https://bab882.github.io/brandon-chanite/"  type="submit">Contact</a>
              
                    
                
            </div>
                    <div className="scroll-section">
                        <div className="project2">
                            <div className="heading">
                            <h4 className="title__1">HIP HOP F'EST</h4>
                            <a href="https://hiphopfest.fr" className="link__project">
                                <i className="fa-solid fa-arrow-right"></i>
                            </a>
                            </div>
                            <div className="card-body2">
                            </div> 
                        </div>
                    </div>
                    
                    <div className="scroll-section">
                        <div className="project1">
                            <div className="heading">
                            <h4 className="title__1">VIVIANI</h4>
                            <a href="#" className="link__project">
                                <i className="fa-solid fa-arrow-right"></i>
                            </a>
                            </div>
                            <div className="card-body">
                            </div> 
                        </div>
                    </div>
                    <div className="scroll-section">
                        <div className="project1">
                            <div className="heading">
                            <h4 className="title__1">VIVIANI</h4>
                            <a href="#" className="link__project">
                                <i className="fa-solid fa-arrow-right"></i>
                            </a>
                            </div>
                            <div className="card-body">
                            </div> 
                        </div>
                    </div>
                   
                </div>
            </div>
            
        </section>
    );
}

export default Project;
