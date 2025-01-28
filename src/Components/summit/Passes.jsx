import React , { useEffect } from 'react'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'
import "./Passes.css"
import Footer from './Footer'



const Passes = () => {
    const handleSubmit = (e)=>{
        e.preventDefault()
        const url= 'https://script.google.com/macros/s/AKfycbyqRbVn-3bGszMN53JfgJuKNnSxoVwDiwWmdW8o7ef22PZZ2lskRqAsVUskypbBe9h_yw/exec'
        fetch(url,{
            method:'POST',
            headers: {"Content-Type": "application/x-www-form-urlencoded"},
            body:(`Name=${e.target.Name.value}&College=${e.target.College.value}&Email=${e.target.Email.value}&District=${e.target.District.value}&Package=${e.target.Package.value}&Candidate=${e.target.Candidate.value}&Payment=${e.target.Payment.value}`)
        }).then(res=>res.text()).then(data=>{
            alert(data)
        }).catch(error=>console.log(error))
    }

    return (
        <div>
            <div className='bg-[#000000] w-full h-auto'>
                <div className='z-10 sticky top-0 flex justify-between items-center lg:px-9 px-5 py-4 h-16 lg:h-auto backdrop-blur-md bg-cyan-300/10 '>
                    <img className='lg:h-12 md:h-9 my-auto h-8 z-20' src={assets.Ecell_logo} alt="" />
                    <button className='bg-yellow-400 text-black font-medium text-base px-4 py-1 rounded-sm '><Link to='/summit'>Home</Link></button>
                </div>

                <div className='text-white font-extrabold mt-10 mb-5 py-6 sm:text-7xl text-3xl   flex justify-center '>
                    Registration Form
                </div>
                <div className='relative flex justify-center'>

                    <img src={assets.bg_2} className=' absolute left-20 -top-10 h-[50vmin]' alt="" />


                    <div className='w-11/12 lg:w-9/12 bg-[#caccd02d] backdrop-blur-md rounded-3xl mb-12'>
                        <form onSubmit={handleSubmit} method='post' name='contactform' action="" className='text-lg border-white border-2 rounded-xl px-12 py-10'>
                            <div>
                                <label className='block mb-2 mt-5 font-bold text-white ' htmlFor="">Name</label>
                                <input required name="Name" className='border-2 border-[#ccc] text-white p-2 w-full box-border rounded-md bg-transparent' type="text" />
                            </div>
                            <div>
                                <label className='block mb-2 mt-5 font-bold text-white  ' htmlFor="">College</label>
                                <input required name="College" className='border-2 border-[#ccc] text-white p-2 w-full box-border rounded-md bg-transparent' type="text" />
                            </div>
                            <div>
                                <label className='block mb-2 mt-5 font-bold text-white' htmlFor="">Email</label>
                                <input required name='Email' className='border-2 border-[#ccc] text-white p-2 w-full box-border rounded-md bg-transparent' type="email" />
                            </div>
                            <div>
                                <label className='block mb-2 mt-5 font-bold text-white' htmlFor="">District</label>
                                <input required name='District' className='border-2 border-[#ccc] text-white p-2 w-full box-border rounded-md bg-transparent' type="text" />
                            </div>

                            <div>
                                <label className='block mb-2 mt-5 font-bold text-white' htmlFor="">Which package would you like to have?</label>
                                <select required  className='border-2 border-[#ccc] p-2 w-full box-border text-white rounded-md bg-transparent ' name="Package" id="hello">
                                    <option className='text-black cursor-pointer' value="Event - Rs. 500 per head">Event - Rs. 500 per head</option>
                                    <option className='text-black' value="Event & T-shirt - Rs. 1100 per head">Event & T-shirt - Rs. 1100 per head</option>
                                    <option  className='text-black' value="Event & Hoodie - Rs. 1200 per head">Event & Hoodie - Rs. 1200 per head</option>
                                    <option  className='text-black' value="Event, Accomodation(3 days), T-shirt,Food - Rs. 2200 per head">Event, Accomodation(3 days), T-shirt,Food - Rs. 2200 per head</option>
                                    <option  className='text-black' value="Event, Accomodation(3 days), Hoodie,Food - Rs. 2500 per head">Event, Accomodation(3 days), Hoodie,Food - Rs. 2500 per head</option>
                                    <option  className='text-black' value="Event, Accomodation(3 days), Hoodie, T-shirt,Food - Rs. 3000 per head">Event, Accomodation(3 days), Hoodie, T-shirt,Food - Rs. 3000 per head</option>
                                </select>

                            </div>

                            <div>
                                <label className='block mb-2 mt-5 font-bold text-white' htmlFor="">How many people are coming from your college?</label>
                                <input required className='border-2 border-[#ccc] p-2 text-white w-full box-border rounded-md bg-transparent' name='Candidate' type="number" />
                            </div>

                            <div>
                            <label className='block mb-2 mt-5 font-bold text-white' htmlFor="">Amount to be Paid : Rs <span>0</span></label>
                            <div className='flex justify-center'>
                                <img className='w-52 h-52' src={assets.Event_10} alt="" />
                            </div>
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
                                    <input className='border-2 p-2 w-40 box-border rounded-md border-black bg-yellow-400 text-black' type="submit" />
                                </div>

                            </div>
                        </form>
                    </div>
                </div>

            </div>
            <Footer />
        </div>
    )
}

export default Passes


