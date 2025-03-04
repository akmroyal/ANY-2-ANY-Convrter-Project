import React from 'react'

// for the icon's svgs 
import people from '../assets/people.png'
import hour from '../assets/fullday.svg'
import protection from '../assets/protection.svg'
import HeroExplorer from './HeroExplorer'

const facts = [
    { title: "People Trust Us", description: "Over a billion users have used our service to simplify their work with digital documents.", icon: people },
    { title: "Businesses Trust Us", description: "Your safety is our priority. Files are not stored on our servers", icon: hour },
    { title: "24/7 Customer Support", description: "Get all the help you need with our round-the-clock customer support.", icon: protection },
]
const WhyChoose = () => {
    return (
        <div className='flex flex-col items-center gap-18 bg-white-700 md:px-3 lg:px-48'>
            <HeroExplorer />
            <h1 className='text-5xl text-gray-700 text-center'>Why Choose <span className='tracking-tighter'>ANY-2️⃣-ANY</span> ?</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-6'>
                {facts.map((fact, index) => (
                    <div key={index} className={` flex flex-col justify-between p-4 bg-box shadow-lg rounded cursor-pointer text-gray-700`}>
                        <img src={fact.icon} alt="icon" className="" />
                        <div>
                            <h3 className="font-bold text-3xl">{fact.title}</h3>
                            <p className="text-base sub-heading">{fact.description}</p>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default WhyChoose
