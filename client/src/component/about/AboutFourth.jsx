import { Facebook, Instagram, Linkedin, Youtube } from 'lucide-react'
import owner1 from '../../assets/teammate-1.png'
import owner2 from '../../assets/teammate-2.png'
import owner3 from '../../assets/teammate-3.png'

const data = [
    {
        name : 'Jessica Gordon',
        position : 'Co-Founder',
        img : owner1,
    },
    {
        name : 'Bryan Joes',
        position : 'Co-Founder', 
        img : owner2
    },
    {
        name : 'Angella Mike',
        position : 'Co-Founder',
        img : owner3
    }
]
// icons :{
//     fb:<Facebook size={20} strokeWidth={1} />,
//     in: <Instagram size={20} strokeWidth={1} />,
//     you: <Youtube size={20} strokeWidth={1} />,
//     lin: <Linkedin size={20} strokeWidth={1} />
// }

function AboutFourth() {
  return (
    <div className=" container mx-auto flex flex-col py-10 justify-center overflow-hidden">
        <div className="text-center mx-2 md:mx-0">
            <h1 className="text-3xl text-slate-600 font-bold">Our Team</h1>
            <p className=" text-slate-500 text-sm md:text-lg w-full md:w-[50%] md:mx-auto py-10">I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo, when an unknown printer took a galley.</p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
           {
            data.map((item, index)=>(
                <div key={index} className='text-center'>
                    <img src={item.img} className='w-[60%] mx-auto'/>
                    <h1 className='text-xl text-slate-600 font-medium pt-2'>{item.name}</h1>
                    <p className='text-sm text-slate-500 '>{item.position}</p>
                    <div className='flex justify-center items-center gap-2 mt-4'>
                        <Facebook size={25} strokeWidth={2} className='p-1 rounded-full bg-slate-200 text-slate-600 cursor-pointer transition-all duration-150 hover:text-white hover:bg-blue-400'/>
                        <Instagram size={25} strokeWidth={2} className='p-1 rounded-full bg-slate-200 text-slate-600 cursor-pointer transition-all duration-150 hover:text-white hover:bg-pink-400'/>
                        <Youtube size={25} strokeWidth={2} className='p-1 rounded-full bg-slate-200 text-slate-600 cursor-pointer transition-all duration-150 hover:text-white hover:bg-red-500'/>
                        <Linkedin size={25} strokeWidth={2} className='p-1 rounded-full bg-slate-200 text-slate-600 cursor-pointer transition-all duration-150 hover:text-white hover:bg-blue-600'/>
                    </div>
                </div>
            ))
           }
        </div>
    </div>
  )
}

export default AboutFourth

