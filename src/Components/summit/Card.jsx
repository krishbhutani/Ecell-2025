import React from 'react'
import "./Card.css"
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'

const Card = () => {
  return (
    <div className='lg:px-20 sm:px-16 px-12  flex flex-wrap gap-5 gap-y-7 justify-center'>
      {data.map((item, i) => (
        <div className='card relative h-[280px] w-64 border-[1px] rounded-md border-white  overflow-hidden '>
          <div>
            <img className='w-full object-contain ' src={item.img} alt="" />
          </div>
          <div className={`text_content absolute backdrop-blur-sm bg-[#11141192] top-[250px] transition-all duration-500 text-white w-full  flex flex-col items-center`}>
            <div className='font-bold text-lg w-full flex justify-around'>{item.title}</div>
            <div className='font-normal px-5 mb-1 text-wrap'>{item.subtitle}</div>
            <button className='text-black bg-white p-2 px-3 rounded-full'><Link  to = {item.explore}>Explore More..</Link></button>
          </div>
          
        </div>

      ))}
    </div>

  )
}

export default Card

const data = [
  {
    img: `${assets.Event_1}`,
    title: "Virtual Stock Market",
    subtitle: "Buckle up for the big reveal! After days of simulated stock market thrills and strategic investing, the champions of this high-stakes financial adventure will take center stage to claim their glory."

  },

  {
    img: `${assets.Event_2}`,
    title: "Arena",
    subtitle: "Step into the action-packed battlefield where strategy meets adrenaline! Armed with simulated guns, participants navigate obstacles and conquer missions. It's time to unleash your inner gamer in this real-life adventure."

  },

  {
    img: `${assets.Event_3}`,
    title: "Find The Bug",
    subtitle: "Think like a detective, act like a strategist! Uncover the hidden flaws in company workflows and propose genius solutions to tackle real-world business conundrums."

  },


  {
    img: `${assets.Event_4}`,
    title: "Startup Expo",
    subtitle: "Dive into the future! Witness disruptive ideas, explore revolutionary prototypes, and connect with cutting-edge startups. Get inspired, discover job opportunities, and walk away with a treasure trove of innovation."

  },

  // {
  //   img:`${assets.Event_5}`,
  //   title:"Tech Trek",
  //   subtitle:"Gear up for a robotic adventure! Teams will design, code, and unleash bots to navigate intricate mazes. Creativity meets tech as the smartest bot takes the crown."

  // },

  {
    img: `${assets.Event_6}`,
    title: "Startup National Debate",
    subtitle: "Fuel your passion for debate and policy making! This MUN-inspired showdown has participants tackling real-world startup challenges and reimagining the ecosystem. Who will emerge as the voice of reason and innovation?"

  },

  {
    img: `${assets.Event_7}`,
    title: "Reverse Pitch",
    subtitle: "Ever wondered what goes on in an investor's mind? Step into their shoes, analyze a fictional company, and predict its fate. Match your insights to reality-this is reverse engineering like never before!"

  },

  {
    img: `${assets.Event_8}`,
    title: "Venturo",
    subtitle: "First impressions are everything! Pitch your visionary ideas to venture capitalists and industry leaders. This is your moment to shine, captivate, and turn dreams into reality.",
    explore:"https://unstop.com/o/f6x3X5Z?lb=wtCaR79x&utm_medium=Share&utm_source=WhatsApp"
  },

  {
    img: `${assets.Event_9}`,
    title: "Esports Meet",
    subtitle: "Game on! Watch as participants battle it out in the digital arena, showcasing their skills and strategies in an electrifying esports showdown. Let the games begin!"

  },

  {
    img: `${assets.Event_10}`,
    title: "Sell Your Idea",
    subtitle: "Creativity knows no bounds here! Craft ingenious marketing strategies and pitch them with flair. Bring your wildest ideas to life and win over the judges with your brilliance."

  },

  {
    img: `${assets.Event_11}`,
    title: "Creator's Meet",
    subtitle: "Lights, camera, inspiration! Dive into the world of social media with industry influencers and content creators. Learn the secrets of building a brand, forging connections, and becoming a digital icon."

  },


  {
    img: `${assets.Event_12}`,
    title: "Panel Discussion",
    subtitle: "An epic meeting of minds! Industry experts unravel the mysteries of entrepreneurship, share insider stories, and inspire the next generation. Be there to soak in the wisdom and spark your ideas."

  },


  {
    img: `${assets.Event_13}`,
    title: "IPL Auction",
    subtitle: "Feel the rush of the gavel! Experience the thrill of bidding wars and strategic decisions in a simulated IPL auction. Think fast, bid smart, and take the win!",
    explore: "https://unstop.com/o/z4AmXTE?lb=wtCaR79x&utm_medium=Share&utm_source=WhatsApp"
  },

  {
    img: `${assets.Event_14}`,
    title: "Dreamer's Dialogue",
    subtitle: "Get up close with a visionary! An exclusive talk show with the FACE of E-Summit. It's not just a talk—it's a spark for your entrepreneurial dreams."

  },

  {
    img: `${assets.Event_15}`,
    title: "Achievers of E-Summit",
    subtitle: "From team players to solo warriors, watch the best compete for the ultimate title. With surprise challenges and a nail-biting questionnaire, the stakes couldn't be higher. Who will claim the crown?"

  },

  // {
  //   img:`${assets.Event_16}`,
  //   title:"Racing Summit",
  //   subtitle:"Start your engines! Innovate, build, and race your way to glory. This is where speed, creativity, and engineering collide in a high-octane showdown."

  // },
]
