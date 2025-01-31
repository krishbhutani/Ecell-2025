import React from 'react'

const Summit_Contact = () => {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "42839a8d-138b-4050-b8b0-cf399c1bb3a4");

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
            <div className='w-full z-10 sm:px-36 px-7 py-4'>

                <form onSubmit={onSubmit} className='max-w-2xl mx-auto text-gray-600 pt-8  px-6 py-3 rounded-md'>
                    <div className=' z-10 flex flex-wrap'>
                        <div className='font-semibold z-10 w-full md:w-1/2 text-left'>
                            Your Name
                            <input className='w-full z-10 border border-black rounded py-3 px-4 mt-2' type="text" name='Name' placeholder='Your Name' required />
                        </div>

                        <div className='font-semibold z-10 w-full md:w-1/2 text-left md:pl-4 '>
                            Your Email
                            <input className='w-full border border-black rounded py-3 px-4 mt-2' type="text" name='Email' placeholder='Your Email' required />
                        </div>
                    </div>

                    <div className='font-semibold my-6 text-left '>
                        Message
                        <textarea className='w-full border border-black rounded py-3 px-4 mt-2 h-48 resize-none' name='Message' placeholder='Message' required></textarea>
                    </div>
                    <div className='flex justify-center mb-10'>
                    <button className='bg-yellow-400 text-black font-medium text-base px-4 py-1 rounded-sm '>{result ? result :"Send Message"}</button>
                    </div>


                </form>

            </div>
        </div>
    )
}

export default Summit_Contact
