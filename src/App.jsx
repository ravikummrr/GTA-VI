import react from "react";
import gsap from "gsap";  
import {useState} from "react";
import { useGSAP } from '@gsap/react';
import 'remixicon/fonts/remixicon.css'



function App() {
 let [showContent, setShowContent] = useState(false)
   useGSAP (() => {
    const tl = gsap.timeline();

      tl.to(".vi-mask-group", {
        rotate: 10,
        duration: 2,
        power: "Power4.easeInOut",
        transformOrigin: "50% 50%",
      })
      .to(".vi-mask-group", {
        scale: 10,
        duration: 2,
        delay: -1.8,
        ease: "Expo.easeInOut",
        transformOrigin: "50% 50%",
        opacity: 0,
        onUpdate: function(){
           if(this.progress() >= .9) {
             document.querySelector(".svg").remove();
             setShowContent(true);
             this.kill();
           }
        }
      });
   });
  
    useGSAP(() => {
     
      if(!showContent) return;
      gsap.to(".main", {
        scale: 1,
        rotate: 0,
        duration:2,
        delay: "-1",
        ease: "Expo.easeInOut",
      });
      gsap.to(".sky", {
        scale: 1,
        rotate: 0,
        duration:-2,
        delay: "-.8",
        ease: "Expo.easeInOut",
      });
      gsap.to(".bg", {
        scale: 1,
        rotate: 1,
        duration:2,
        delay: "-.8",
        ease: "Expo.easeInOut",
      });



      const main  = document.querySelector(".main");
      main?.addEventListener("mousemove", function(e) {
        const xMove = (e.clientX / window.innerWidth - 0.5) * 40;
        
        gsap.to('.imagediv .text', {
          x: `${xMove * 0.3}%`,
        });
         gsap.to('.sky', {
          x: xMove,
        });
         gsap.to('.bg', {
          x: xMove * 0.7,
        });

      })
    }, [showContent]);


  return(
    <>
      <div className="svg flex items-center justify-center fixed top-0 left-0 z-[100] w-full h-screen overflow-hidden bg-[#000]">
        <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
          <defs>
            <mask id="viMask">
              <rect width="100%" height="100%" fill="black" />
              <g className="vi-mask-group">
                <text
                  x="50%"
                  y="50%"
                  fontSize="250"
                  textAnchor="middle"
                  fill="white"
                  dominantBaseline="middle"
                  fontFamily="Arial Black"
                  fontWeight="100"
                >
                  VI
                </text>
              </g>
            </mask>
          </defs>
          <image
            href="./bg.png"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            mask="url(#viMask)"
          />
        </svg>
      </div>
      {showContent && <div className="main w-full rotate-[-10deg] scale-[1.7]">
        <div className="landing w-full h-screen bg-black">
          <div className="navbar absolute top-0 left-0 w-full z-[10] py-10 px-10">
             <div className="logo flex gap-7">
               <div className="lines flex flex-col gap-[6px]">
                  <div className="line w-15 h-1 bg-white"></div>
                  <div className="line w-8 h-1 bg-white"></div>
                  <div className="line w-5 h-1 bg-white"></div>
               </div>
               <h2 className="text-4xl text-white -mt-[8px] leading-none font-thin">RockStar</h2>
             </div>
          </div>
         
          <div className="imagediv overflow-hidden relative w-full h-screen">
             <img className="sky scale-[1.5] rotate-[-20deg] absolute top-0 left-0 h-full w-full object-cover" src="./public/sky.png" alt="Background Image"/>
             <img className="bg scale-[1.8] rotate-[-20deg] absolute top-0 left-0 h-full w-full object-cover" src="./public/bg.png" alt="Background Image"/>
             <div className="text absolute flex flex-col gap-1 top-17 left-1/2 -translate-x-1/2 text-white">
                <h1 className="text-[9rem] -ml-40 leading-none font-thin">grand</h1>
                <h1 className="text-[9rem] ml-10 leading-none font-thin">theft</h1>
                <h1 className="text-[9rem] -ml-40 leading-none font-thin">auto</h1>
             </div>
             <img className="character absolute -bottom-[45%] left-1/2 -translate-x-1/2 scale-[1.4]" src="./public/girlbg.png" alt="girl" />
          </div>
          <div className="btmbr absolute bottom-0 left-0 text-white w-full py-10 px-10 bg-gradient-to-t from-black to-transparent">
            <div className="flex gap-4 item-center">
              <i className="ri-arrow-down-line text-2xl"></i>
              <h3 className="font-[Helvetica_Now_Display] text-2xl font-thin">Scroll Down</h3>
            </div>
            <img className="h-[55px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" src="./public/ps5.png" />
          </div>
        </div>
        <div className="w-full flex items-center justify-center h-screen bg-black"> 
          <div className="cntr flex text-white w-full h-[80%]">
             <div className="limg relative  w-1/2 h-full">
               <img
                  className="scale-[1.3] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 " 
                  src="imag.png" 
                  alt="Left Image"/>
             </div>
             <div className="rimg w-[30%] py-30">  
               <h1 className="text-8xl font-thin">Still Running</h1>
               <h1 className="text-8xl font-thin">NOT HUNTING</h1>
                 <p className="text-3xl mt-10 font-[helvetica_Now_Display] font-thin">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                 </p>
                 <p className="text-2xl mt-3 font-[helvetica_Now_Display] font-thin">
                   orem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.orem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                 </p>
                 <p className="text-2xl mt-3 font-[helvetica_Now_Display] font-thin">
                   orem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.orem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                 </p>
                 <button className="bg-yellow-500 px-10 py-10 text-3xl text-black mt-10">Download Now</button>
            </div>
          </div>
        </div>
      </div>
      }
    </>
  );
}

export default App;