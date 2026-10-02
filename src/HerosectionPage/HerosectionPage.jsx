import gsap from "gsap";
import { useEffect, useRef } from "react";
import Header from "../Hader/HadernavBaar";
import { ArrowUpRight } from "lucide-react";


const HerosectionPage = () => {
    const image =
        [
            { src: "https://zone-ui.vercel.app/assets/images/home/hero-1.webp", alt: "Description" },
            { src: "https://zone-ui.vercel.app/assets/images/home/hero-2.webp", alt: "Description" },
            { src: "https://zone-ui.vercel.app/assets/images/home/hero-3.webp", alt: "Description" },
            { src: "https://zone-ui.vercel.app/assets/images/home/hero-4.webp", alt: "Description" },
            { src: "https://zone-ui.vercel.app/assets/images/home/hero-5.webp", alt: "Description" },
            { src: "https://zone-ui.vercel.app/assets/images/home/hero-6.webp", alt: "Description" },
            { src: "https://zone-ui.vercel.app/assets/images/home/hero-7.webp", alt: "Description" }
        ]

    const boxRef1 = useRef(null);
    const boxRef2 = useRef(null);
    const boxRef3 = useRef(null);
    const boxRef4 = useRef(null);
    const boxRef5 = useRef(null);
    const boxRef6 = useRef(null);
    const boxRef7 = useRef(null);

    useEffect(() => {
        gsap.to(boxRef1.current, {
            y: 100,
            duration: 1,
            ease: "power2.out",
        });
        gsap.to(boxRef2.current, {
            y: 100,
            duration: 2,
            ease: "power2.out",
        });
        gsap.to(boxRef3.current, {
            y: 100,
            duration: 3,
            ease: "power2.out",
        });
        gsap.to(boxRef4.current, {
            y: 100,
            duration: 2,
            ease: "power2.out",
        });
        gsap.to(boxRef5.current, {
            y: 100,
            duration: 4,
            ease: "power2.out",
        });
        gsap.to(boxRef6.current, {
            y: 100,
            duration: 4,
            ease: "power2.out",
        });
        gsap.to(boxRef7.current, {
            y: 100,
            duration: 4,
            ease: "power2.out",
        });
    }, []);
    return (
        <div className="w-full h-screen bg-black flex justify-center items-center">
            <Header />
            <div className="w-full lg:mt-42 h-screen flex">
                <div className="w-full lg:w-1/2 h-full flex flex-col justify-center items-center lg:items-start gap-4 px-4 lg:px-20">
                    <h1 className="text-5xl text-white font-bold">Welcome to Our Website</h1>
                    <p className="text-lg text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <button
                        className="group flex items-center gap-2
                        px-5 py-2.5 rounded-xl
                        text-sm font-semibold text-white
                        bg-gradient-to-r from-blue-600 to-purple-600
                        hover:from-blue-500 hover:to-pink-500
                        shadow-lg shadow-purple-500/20
                        hover:shadow-purple-500/40
                        transition-all duration-300"
                    >
                        Get Started

                        <ArrowUpRight
                            size={16}
                            className="group-hover:translate-x-1
                  group-hover:-translate-y-1 transition"
                        />
                    </button>
                </div>
                <div className=" relative w-1/2 h-full hidden lg:block">
                    <img ref={boxRef1} src={image[0].src} alt={image[0].alt} className=" absolute z-50" />
                    <img ref={boxRef2} src={image[1].src} alt={image[1].alt} className=" absolute z-40" />
                    <img ref={boxRef3} src={image[2].src} alt={image[2].alt} className=" absolute z-30" />
                    <img ref={boxRef4} src={image[3].src} alt={image[3].alt} className=" absolute z-20" />
                    <img ref={boxRef5} src={image[4].src} alt={image[4].alt} className=" absolute z-10" />
                    <img ref={boxRef6} src={image[5].src} alt={image[5].alt} className=" absolute z-0" />
                    <img ref={boxRef7} src={image[6].src} alt={image[6].alt} className=" absolute z-0" />
                </div>
            </div>

        </div>
    )
}

export default HerosectionPage
