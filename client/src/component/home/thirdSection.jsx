
import img1 from '../../assets/plant7.jpg'
import img2 from '../../assets/plant8.jpg'
import img3 from '../../assets/plant6.jpg'
import { MoveRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const data = [
    {
        name : 'Beautiful Plant Varieties',
        description : 'Luctus nec ullamcorper mattis, pulvinar dapibus leo.',
        link : 'SEE COLLECTION',
        img: img1,
    },
    {
        name : 'Trendy Cactus Varieties',
        description : 'Luctus nec ullamcorper mattis, pulvinar dapibus leo.',
        link : 'SEE COLLECTION',
        img: img2,
    },
    {
        name : 'Gardening Accessories',
        description : `Luctus nec ullamcorper mattis, pulvinar dapibus leo.`,
        link : 'SEE COLLECTION',
        img: img3,
    }
]
function ThirdSection() {
  return (
    <div className='pb-10 grid mx-4 md:mx-0 gap-4 grid-flow-col-1 sm:grid-cols-2 md:grid-cols-3'>
      {
        data.map((item, index)=>(
            <div key={index} className='hover:shadow-xl transition-all duration-200 rounded-lg overflow-hidden bg-[#EEEDF3] py-2 md:py-8'>
                <div >
                    <img className='bg-blend-multiply w-[300px] mx-auto' src={item.img}/>
                    <div className='mx-16 py-3 md:py-6' >
                        <h1 className='text-md md:text-xl font-semibold text-slate-700'>{item.name}</h1>
                        <p className=' font-normal text-slate-500 py-1 md:py-2'>{item.description}</p>
                        <Link to='/login' className='pt-2 text-red-400 font-semibold flex gap-2 items-center'>{item.link} <MoveRight size={20} strokeWidth={1.5} /></Link>
                    </div>
                </div>
            </div>
        ))
      }
    </div>
  )
}

export default ThirdSection
