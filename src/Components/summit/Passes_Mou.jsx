import React, { useEffect, useState } from 'react'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'
import "./Passes.css"
import Footer from './Footer'
import { toast } from 'react-toastify';


const Passes_Mou = () => {
    const handleSubmit = (e) => {
            setResult("Submitting....")
            e.preventDefault()
            const url = 'https://script.google.com/macros/s/AKfycby63_d3XhK6qkCogPyRyBxmerpyNZQYdvUlzrvkylw_Txk0NeVdH_iViK_nqpcbAVc/exec'
            fetch(url, {
                method: 'POST',
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: (`Name=${e.target.Name.value}&College=${e.target.College.value}&Email=${e.target.Email.value}&Phone=${e.target.Phone.value}&District=${e.target.District.value}&Package=${e.target.Package.value}&Candidate=${e.target.Candidate.value}Transaction=${e.target.Transaction.value}&Payment=${e.target.Payment.value}`)
            }).then(res => res.text()).then(data => {
                setResult("Submit");
                alert(data);
                e.target.reset();
    
            }).catch(error => console.log(error))
        }
    
    
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
    
    
        const [pack, setpack] = useState(599);
        const [people, setpeople] = useState(0);
        const [total, settotal] = useState(0);
        const [promo, setpromo] = useState(0);
    
        // const Checker = () =>{
        //     if( === "MOU-NITH"){
        //         setpromo(200);
        //     }
        // }
    
    
        const handleChange = (e) => {
            const id = e.target.id;
            const value = parseInt(e.target.value)
    
            if (id === 'pack') {
                setpack(value);
            }
    
    
    
            else {
                setpeople(value);
            }
       
            
        }
    
        const calculateTotal = () => {
            let a = pack;
            let b = people;
            let c ;
            if(b>=8){
                c = (a* (b-1));
            }
            else{
                c = (a * b) ;
            }
            
    
            settotal(c);
        }
    
        useEffect(() => {
            calculateTotal();
        }, [pack, people,promo])
  return (
    <div>
            <div className='bg-[#000000] w-full h-auto'>
                <div className='z-10 sticky top-0 flex justify-between items-center lg:px-9 px-5 py-4 h-16 lg:h-auto backdrop-blur-md bg-cyan-300/10 '>
                    <Link to='/summit'><img className='lg:h-12 md:h-9 my-auto h-8 z-20' src={assets.Ecell_logo} alt="" /></Link>
                    <button className='bg-yellow-400 text-black font-medium text-base px-4 py-1 rounded-sm '><Link to='/summit'>Home</Link></button>
                </div>

                <div className='text-white font-extrabold mt-10 mb-5 py-6 sm:text-7xl text-3xl   flex justify-center '>
                    Registration Form
                </div>
                <div className='relative flex justify-center'>

                    <img src={assets.bg_2} className=' absolute left-20 -top-10 h-[50vmin]' alt="" />


                    <div className='w-11/12 lg:w-9/12 bg-[#caccd02d] backdrop-blur-md rounded-3xl mb-12'>
                        <form onSubmit={onSubmit} name='contactform' action="" className='text-lg border-white border-2 rounded-xl px-12 py-10'>
                            <div>
                                <label className='block mb-2 mt-5 font-bold text-white ' htmlFor="">Campus Ambassador Name</label>
                                <input required name="CA Name" className='border-2 border-[#ccc] text-white p-2 w-full box-border rounded-md bg-transparent' type="text" />
                            </div>

                            <div>
                                <label className='block mb-2 mt-5 font-bold text-white ' htmlFor="">Team Name(If Applicable)</label>
                                <input  name="Team Name" className='border-2 border-[#ccc] text-white p-2 w-full box-border rounded-md bg-transparent' type="text" />
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
                                <label className='block mb-2 mt-5 font-bold text-white' htmlFor="">Phone No.</label>
                                <input required name='Number' className='border-2 border-[#ccc] text-white p-2 w-full box-border rounded-md bg-transparent' type="text" />
                            </div>
                            <div>
                                <label className='block mb-2 mt-5 font-bold text-white' htmlFor="">District</label>
                                <input required name='District' className='border-2 border-[#ccc] text-white p-2 w-full box-border rounded-md bg-transparent' type="text" />
                            </div>

                            <div>
                                <label className='block mb-2 mt-5 font-bold text-white' htmlFor="">State</label>
                                <input required name='State' className='border-2 border-[#ccc] text-white p-2 w-full box-border rounded-md bg-transparent' type="text" />
                            </div>

                            <div>
                                <label className='block mb-2 mt-5 font-bold text-white' htmlFor="">Which package would you like to have?</label>
                                <select required onChange={handleChange} className='border-2 border-[#ccc] p-2 w-full box-border text-white rounded-md bg-transparent ' name="Package" id="pack">
                                    <option className='text-black' value="599">Event & T-shirt - Rs. 599 per head</option>
                                    <option className='text-black' value="899">Event & Hoodie - Rs. 899 per head</option>
                                    <option className='text-black cursor-pointer' value="1399">Event,Stay & Food - Rs. 1399 per head</option>
                                    <option className='text-black' value="1999">Event, Accomodation(3 days), T-shirt,Food - Rs. 1999 per head</option>
                                    <option className='text-black' value="2299">Event, Accomodation(3 days), Hoodie,Food - Rs. 2299 per head</option>
                                    <option className='text-black' value="2799">Event, Accomodation(3 days), Hoodie, T-shirt,Food - Rs. 2799 per head</option>
                                </select>

                            </div>

                            <div>
                                <label className='block mb-2 mt-5 font-bold text-white' htmlFor="">How many people are coming from your college?</label>
                                <input required onChange={handleChange} className='border-2 border-[#ccc] p-2 text-white w-full box-border rounded-md bg-transparent' name='Candidate' type="number" min='1' id='people' />
                            </div>

                

                            

                            <div>
                                <label className='block mb-2 mt-5 font-bold text-white' htmlFor="">Amount to be Paid : Rs <span>{total}</span></label>
                                <div className='flex justify-center'>
                                    <img className='w-52 h-52' src={assets.QR} alt="" />
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
                                <div className='block mb-2 mt-5 font-bold text-white'>Join Whatsapp Group for Further Information <Link to="https://chat.whatsapp.com/LGaJdMYIwnv872Gybc2FF3" className='decoration-white underline'>Click Here</Link></div>
                                
                            </div>
                        </form>
                    </div>
                </div>

            </div>
            <Footer />
        </div>
  )
}

export default Passes_Mou
