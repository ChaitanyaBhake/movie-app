import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const ContactUs = () => {
    const navigate = useNavigate(); // Using useNavigate hook to get the navigate function
    const [popupOpened, setPopupOpened] = useState(false);

    const handleClick = () => {
        const email = 'chaitubhake2013@gmail.com';
        const mailtoLink = `mailto:${email}`;
        window.open(mailtoLink, '_blank', 'noopener noreferrer');
        setPopupOpened(true);
    };
    return (
        <div className="lg:w-[100vh] lg:h-[80vh] w-[90%] h-[90%] flex justify-center items-center flex-col m-auto bg-[#1F1E24] ">
            <h1 className="lg:text-5xl text-3xl font-semibold text-zinc-400 mb-5 ">
                Contact Me <i className="ri-chat-smile-line"></i>
            </h1>

            <div className="w-full h-full shadow-lg shadow-[rgba(101,86,205,.3)] mt-5 border-2 border-zinc-700 p-5 list-disc text-zinc-400 overflow-y-auto">
                <div className="hover:bg-zinc-900 hover:text-[#6556CD] rounded-md duration-300 p-2 mb-3">
                    <h1 className="lg:text-3xl text-2xl hover:text-[#7765f0]">
                        Get In Touch
                    </h1>
                    <p className="mb-3 lg:text-2xl text-xl hover:bg-zinc-900 duration-[800ms]  p-5 rounded-lg">
                        "Got a question, suggestion, or just want to say hello?
                        I'm here to help! Simply click on button below and get
                        in touch with me today."
                    </p>
                </div>

                <div className="  duration-300 mt-3 p-2 mb-3 overflow-hidden w-full ">
                    <img
                        className="object-cover rounded-md w-full h-[37vh]  "
                        src="https://images.inc.com/uploaded_files/image/1920x1080/getty_469566889_105923.jpg"
                        alt=""
                    />
                </div>
            </div>

            <div className></div>
            <div className="flex lg:gap-20 gap-x-10">
                <button className="mt-4 lg:px-4 px-2 lg:py-3 py-1 bg-[#6556CD] rounded-lg hover:text-white text-2xl" onClick={handleClick}>
                    Lets Talk
                    <i className="ri-arrow-right-line"></i>
                </button>

                <button
                    onClick={() => {
                        navigate('/'); // Using navigate function to navigate to the homepage
                    }}
                    className="mt-4 lg:px-4 px-2 lg:py-3 py-1 bg-[#6556CD] rounded-lg hover:text-white text-2xl"
                >
                    <i className="ri-home-3-line"></i> Homepage
                </button>
            </div>
        </div>
    );
};

export default ContactUs;
