import React from 'react'
import { toast } from 'react-toastify';

const Contact = () => {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "b2726df1-3344-481f-9c96-10a2b14fe898");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("");
            toast.success("Form Submitted Successfully")
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult("");
            toast.error(data.message);
        }
    };


    return (
        <div>
            <div className='w-full  sm:pt-10 pt-5 sm:px-36 px-7'>

                <div className='sm:text-4xl text-3xl font-medium flex items-center gap-3 '>
                    <span className='text-slate-500'>Contact</span><span>Us</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-20">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                    </svg>

                </div>
                <div className='sm:w-4/12 font-medium font-title text-slate-500'>
                    Whether you have questions,or ideas,or just want to connect,our Entrepreneurship Cell team is here for you. Do you have questions or feedback? We'd love to hear from you!

                </div>

                <form onSubmit={onSubmit} className='max-w-2xl mx-auto text-gray-600 pt-8'>
                    <div className='flex flex-wrap'>
                        <div className='w-full md:w-1/2 text-left'>
                            Your Name
                            <input className='w-full border border-gray-300 rounded py-3 px-4 mt-2' type="text" name='Name' placeholder='Your Name' required />
                        </div>

                        <div className='w-full md:w-1/2 text-left md:pl-4'>
                            Your Email
                            <input className='w-full border border-gray-300 rounded py-3 px-4 mt-2' type="text" name='Email' placeholder='Your Email' required />
                        </div>
                    </div>

                    <div className='my-6 text-left'>
                        Message
                        <textarea className='w-full border border-gray-300 rounded py-3 px-4 mt-2 h-48 resize-none' name='Message' placeholder='Message' required></textarea>
                    </div>
                    <div className='flex justify-center mb-10'>
                        <button className=' text-white bg-[#310742] hover:bg-[#310756]/90 focus:ring-4 focus:outline-none focus:ring-[#310743]/50 font-medium  text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 me-2 mb-2'>{result ? result :"Send Message"}</button>
                    </div>


                </form>

            </div>
        </div>
    )
}

export default Contact
