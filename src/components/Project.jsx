import React, {useRef} from "react";

function Project(){
    const linkRef = useRef(null);
    
    
  const handleClick = () => {
    // Faire quelque chose avec le lien, comme le focus
    linkRef.current.focus();
  };

    
    return(
        <section className="scroll-section-outer">
            <div className="text-wrapper">
                <span>Showcase 
                    <i className="fa-solid fa-star"></i>
                </span>
                <span>Showcase 
                    <i className="fa-solid fa-star"></i>
                </span>
                <span>Showcase 
                    <i className="fa-solid fa-star"></i>
                </span>
                <span>Showcase 
                    <i className="fa-solid fa-star"></i>
                </span>
                <span>Showcase 
                    <i className="fa-solid fa-star"></i>
                </span>
                <span>Showcase 
                    <i className="fa-solid fa-star"></i>
                </span>
                <span>Showcase 
                    <i className="fa-solid fa-star"></i>
                </span>
                <span>Showcase 
                    <i className="fa-solid fa-star"></i>
                </span>
                <span>Showcase 
                    <i className="fa-solid fa-star"></i>
                </span>
                <span>Showcase 
                    <i className="fa-solid fa-star"></i>
                </span>
                <span>Showcase 
                    <i className="fa-solid fa-star"></i>
                </span>
                <span>Showcase 
                    <i className="fa-solid fa-star"></i>
                </span>
            </div>
            
            
            <div className="scroll">
                <div className="scroll-section-inner">
                <div className="wrapper__subtitle">
                <h2 className="subtitle">Projects</h2>
                <p className="subtitle__text">I played a key role in project development. 
                Here's a carefully selected showcase highlighting 
                expertise and achieved results 
                </p>
                <a className="btn btn1" href="mailto: chanitebrandon@gmail.com"  type="button">Contact</a>
            </div>
            
            <div className="project">1</div>
            <div className="project">2</div>
            <div className="project">3</div>
            <div className="project">4</div>       
                    
                   
                
                   
                </div>
            </div>
        </section>
    );
}

export default Project;
