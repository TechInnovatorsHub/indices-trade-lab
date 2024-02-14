import { useEffect, useState } from "react";
function ToTopButton() {

    const [isVisible, setIsVisible] = useState(false);

    // scroll event listener to show/hide the button
    useEffect(() => {
        const handleScroll = () => {
            if (window.window.scrollY > 20) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth', 
        });
    };

    return (
        <button
            id="topButton"
            onClick={scrollToTop}
            className={`fixed bottom-4 right-4 p-2 bg-[#FC5B3F] rounded-xl shadow-lg cursor-pointer w-[2.8rem] h-[2.8rem] z-40  ${
                isVisible ? 'block' : 'hidden'
            }`}
        >
            <svg    
                viewBox="0 0 24 24" fill="none" 
                xmlns="http://www.w3.org/2000/svg"
            >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier"> 
                    <path 
                        d="M20 15L12 7L4 15" 
                        stroke="#ffffff" stroke-width="1.3" 
                        stroke-linecap="round" stroke-linejoin="round"
                    ></path> 
                </g>
            </svg>
        </button>
    )
}

export default ToTopButton
