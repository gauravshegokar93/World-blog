import { useState } from "react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function ContactPage({ contactPageInfo }) {
    return (
        <div className="pb-[60px] py-9">
            <div
                id="hello"
                className="relative w-full h-[430px] bg-cover bg-center flex items-center justify-center text-center"
                style={{ backgroundImage: `url(${contactPageInfo.hellowImgURL})` }}
            >
                <div className="absolute inset-0 bg-white opacity-60"></div>

                <div className="relative p-6 max-w-xl">
                    <h1 className="text-6xl font-bold text-black mb-6">
                        {contactPageInfo.heading}
                    </h1>

                    <p className="text-m text-black">
                        {contactPageInfo.headingDescription}
                    </p>
                </div>
            </div>

            <div
                id="intro"
                className="w-full h-[350px] flex flex-col items-center justify-center text-center"
            >
                <h1 className="text-3xl font-bold mb-5">
                    {contactPageInfo.introduction}
                </h1>

                <p className="text-sm text-black">
                    {contactPageInfo.introductionDescription}
                </p>
            </div>

            <div id="contacts" className="flex justify-center px-4">
                <div className="flex gap-6 max-w-[1290px] w-full justify-center">

                    {/* Physical Address */}
                    <div
                        id="physicalAddress"
                        className="w-[400px] h-[310px] text-black flex items-center justify-center text-center p-4 rounded bg-[#f8f9fb]"
                    >
                        <div className="flex flex-col items-center space-y-2">
                            <img src={contactPageInfo.physicalAddressLogoURL} alt="physicalAddressLogo" />
                            <h2 className="text-2xl font-semibold">Physical Address</h2>
                            <p className="text-sm">{contactPageInfo.physicalAddress}</p>
                        </div>
                    </div>

                    {/* Email Address */}
                    <div
                        id="emailAddress"
                        className="w-[400px] h-[310px] text-black flex items-center justify-center text-center p-4 rounded bg-[#f8f9fb]"
                    >
                        <div className="flex flex-col items-center space-y-2">
                            <img src={contactPageInfo.emailAddressLogoURL} alt="emailAddressLogo" />
                            <h2 className="text-2xl font-semibold">Email Address</h2>
                            
                            <div className="flex flex-col space-y-1">
                            {contactPageInfo.emailAddresses.map((EMaddress, index) => (
                                <p key={index} className="text-sm">{EMaddress}</p>
                            ))}
                            </div>
                        </div>
                    </div>

                    {/* Phone Number */}
                    <div
                        id="phoneNumber"
                        className="w-[400px] h-[310px] text-black flex items-center justify-center text-center p-4 rounded bg-[#f8f9fb]"
                    >
                        <div className="flex flex-col items-center space-y-2">
                            <img src={contactPageInfo.phoneNumbersLogoURL} alt="phoneNumberLogo" />
                            <h2 className="text-2xl font-semibold">Phone Number</h2>

                            <div className="flex flex-col space-y-1">
                                {contactPageInfo.phoneNumbers.map((PNumber, index) => (
                                    <p key={index} className="text-sm">{PNumber}</p>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>





            <div id="messageBox" className="flex justify-center h-[700px] pt-[60px]">
               <div className="max-w-[1290px] w-full h-full flex rounded overflow-hidden">
                    <div
                        id="messageBoxImage"
                        className="w-1/2 h-full bg-cover bg-center"
                        style={{backgroundImage: `url(${contactPageInfo.messageBoxImageURL})`}}
                    ></div>

                    <div className="w-1/2 h-full bg-white p-6">
                        <MessageBox info={contactPageInfo} />
                    </div>
                </div>
            </div>
        </div>
    )
}



// Message Box :

function MessageBox({ info }) {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_drov6se",      // e.g., "service_123abc"
                "template_8gzpnzw",     // e.g., "template_xyz456"
                form.current,
                "wahBcwM_0WuWE9WX1"       // e.g., "user_xxxxxxxxxxxxx"
            )
            .then(
                () => {
                    alert("Message sent successfully!");
                    form.current.reset();
                },
                (error) => {
                    alert("Failed to send message, please try again.");
                    console.error(error);
                }
            );
    };

    return (
        <div className="flex flex-col justify-center items-center h-full w-full">
            <div className="w-full h-full">
                <h1 className="text-2xl font-bold text-gray-800 mb-2">
                    {info.messageBoxHeading}
                </h1>

                <p className="text-gray-600 mb-6">
                    {info.messageBoxDescription}
                </p>

                <form ref={form} onSubmit={sendEmail} className="space-y-4">
                    <div>
                        <label className="block text-sm font-semibold text-gray-700">
                            Name <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            name="user_name"
                            className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-semibold text-gray-700">
                            Email <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="email"
                            name="user_email"
                            className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-semibold text-gray-700">
                            Subject <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            name="subject"
                            className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-semibold text-gray-700">
                            Comment or Message <span className="text-red-500">*</span>
                        </label>
                        <textarea
                            rows="4"
                            name="message"
                            className="w-full border border-gray-300 p-2 rounded resize-y focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}