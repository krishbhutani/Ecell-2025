import React from 'react'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'
import Footer from './Footer'

const merchandise = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Submitting....");
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
            <div className='bg-[#000000] w-full min-h-screen'>
                <div className='z-10 sticky top-0 flex justify-between items-center lg:px-9 px-5 py-4 h-16 lg:h-auto backdrop-blur-md bg-cyan-300/10 '>
                    <Link to='/summit'><img className='lg:h-12 md:h-9 my-auto h-8 z-20' src={assets.Ecell_logo} alt="" /></Link>
                    <button className='bg-yellow-400 text-black font-medium text-base px-4 py-1 rounded-sm '><Link to='/summit'>Home</Link></button>
                </div>
                <div>
                    <div className='text-white font-extrabold mt-10  py-3 sm:text-7xl text-3xl   flex justify-center '>
                        E-SUMMIT'25
                    </div>

                    <div className='text-white font-extrabold   sm:text-3xl text-lg  mb-10  flex justify-center '>
                        Presents
                    </div>

                    <div className='lg:px-20 sm:px-16 px-12 mb-7  flex flex-wrap gap-10 gap-y-7 justify-center'>
                        <div className='relative h-[310px] rounded-lg w-64 bg-white'>
                            <img className='rounded-lg object-cover bg-white h-full' src={assets.BACK_BLACK} alt="" />
                            <img className='absolute top-0 hover:opacity-0 duration-300 bg-white rounded-lg object-cover h-full' src={assets.FRONT_BLACK} alt="" />

                        </div>

                        <div className='relative h-[310px] rounded-lg w-64 bg-white'>
                            <img className='rounded-lg object-cover bg-white h-full' src={assets.BACK_BLUE} alt="" />
                            <img className='absolute top-0 bg-white hover:opacity-0 duration-300 rounded-lg object-cover h-full' src={assets.FRONT_BLUE} alt="" />

                        </div>

                        <div className='relative h-[310px] rounded-lg w-64 bg-white'>
                            <img className='rounded-lg object-cover bg-white h-full' src={assets.BACK_T} alt="" />
                            <img className='absolute top-0 hover:opacity-0 bg-white duration-300 rounded-lg object-cover h-full' src={assets.FRONT_T} alt="" />

                        </div>
                    </div>

                    <div className='text-white font-extrabold my-10   py-3 sm:text-5xl text-3xl   flex justify-center '>
                        Order Now...
                    </div>


                    <div className='w-11/12 lg:w-9/12 bg-[#caccd02d] backdrop-blur-md rounded-3xl mb-12 mx-auto'>
                        <form onSubmit={onSubmit} name='contactform' action="" className='text-lg border-white border-2 rounded-xl px-12 py-10'>
                            <div>
                                <label className='block mb-2 mt-5 font-bold text-white ' htmlFor="">Name</label>
                                <input required name="Name" className='border-2 border-[#ccc] text-white p-2 w-full box-border rounded-md bg-transparent' type="text" />
                            </div>

                            <div>
                                <label className='block mb-2 mt-5 font-bold text-white' htmlFor="">Email</label>
                                <input required name='Email' className='border-2 border-[#ccc] text-white p-2 w-full box-border rounded-md bg-transparent' type="email" />
                            </div>

                            <div>
                                <label className='block mb-2 mt-5 font-bold text-white' htmlFor="">Phone No.</label>
                                <input required name='Number' className='border-2 border-[#ccc] text-white p-2 w-full box-border rounded-md bg-transparent' type="text" />
                            </div>

                            <div>
                                <label className='block mb-2 mt-5 font-bold text-white' htmlFor="">Select Your Goodies</label>
                                <select required className='border-2 border-[#ccc] p-2 w-full box-border text-white rounded-md bg-transparent ' name="Package" id="pack">
                                    <option className='text-black cursor-pointer' value="Hoodie">Hoodie - Rs. 799</option>
                                    <option className='text-black cursor-pointer' value="T-Shirt">T-Shirt - Rs. 399</option>
                                    <option className='text-black' value="Combo">Hoodie & T-shirt Combo - Rs. 1099 </option>
                                </select>

                            </div>

                            <div>
                                <label className='block mb-2 mt-5 font-bold text-white' htmlFor="">Size</label>
                                <select required className='border-2 border-[#ccc] p-2 w-full box-border text-white rounded-md bg-transparent ' name="Package" id="pack">
                                    <option className='text-black cursor-pointer' value="S">S</option>
                                    <option className='text-black cursor-pointer' value="M">M</option>
                                    <option className='text-black cursor-pointer' value="L">L</option>
                                    <option className='text-black cursor-pointer' value="XL">XL</option>
                                    <option className='text-black cursor-pointer' value="XXL">XXL</option>
                                    <option className='text-black cursor-pointer' value="XXXL">XXXL</option>
                                </select>

                            </div>

                            <label className='block mb-2 mt-5 font-bold text-white' htmlFor="">Hoodie Color</label>
                                <select  className='border-2 border-[#ccc] p-2 w-full box-border text-white rounded-md bg-transparent ' name="Package" id="pack">
                                    <option className='text-black cursor-pointer' value="Blue">Blue</option>
                                    <option className='text-black cursor-pointer' value="Black">Black</option>

                                </select>


                            <div>
                                <label className='block mb-2 mt-5 font-bold text-white' htmlFor="">Year</label>
                                <select required className='border-2 border-[#ccc] p-2 w-full box-border text-white rounded-md bg-transparent ' name="Package" id="pack">
                                    <option className='text-black cursor-pointer' value="First Year">First Year</option>
                                    <option className='text-black cursor-pointer' value="Second Year">Second Year</option>
                                    <option className='text-black cursor-pointer' value="Third Year">Third Year</option>
                                    <option className='text-black cursor-pointer' value="Final Year">Final Year</option>
                                    <option className='text-black cursor-pointer' value="Super Final Year">Super Final Year</option>
                                    <option className='text-black cursor-pointer' value="Others">Others</option>
                                </select>

                            </div>

                            <div>
                                <label className='block mb-2 mt-5 font-bold text-white' htmlFor="">Payment</label>
                                <div className='flex justify-center'>
                                    <img className='w-52 h-52' src={assets.V_QR} alt="" />
                                </div>
                            </div>


                            <div>
                                <label className='block mb-2 mt-5 font-bold text-white ' htmlFor="">Transaction ID</label>
                                <input required type="text" name="Transaction" className='border-2 border-[#ccc] text-white p-2 w-full box-border rounded-md bg-transparent' />
                            </div>


                            <div>
                                <label className='block mb-2 mt-5 font-bold text-white' htmlFor="">Past URL of Payment Recipt after Saving in Google Drive(Make Sure Link is accessible to all) </label>
                                <input required className='border-2 border-[#ccc] p-2 text-white w-full box-border rounded-md bg-transparent' name='Payment' type="url" />
                            </div>


                            <div className='flex flex-wrap-reverse justify-around gap-6 mt-14'>
                                <div>
                                    <input className='border-2 p-2 w-40 box-border rounded-md border-black bg-yellow-400 text-black ' type="reset" name="" id="" />
                                </div>
                                <div>
                                    <button className='border-2 p-2 w-40 box-border rounded-md border-black bg-yellow-400 text-black '>{result ? result : "Submit"}</button>
                                </div>

                            </div>

                            <div className='flex gap-3 mt-9 justify-start items-center'>
                                <div className='block mb-2 mt-5 font-bold text-white'>For Any Query Contact : <span className='decoration-white underline'>9545778555</span></div>

                            </div>



                        </form>
                    </div>





                </div>
                <Footer />
            </div>

        </div>
    )
}

export default merchandise
