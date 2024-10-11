import {  Package2, RefreshCcw, Sprout } from "lucide-react"
import { Link } from "react-router-dom"

const data =[
    {
        name : 'Plants Collection',
        description:' Any plants for your ',
        link : '/*',
        incon : <Sprout size={30} strokeWidth={2}/>
    },
    {
        name : 'Free Shipping',
        description:' Free shipping order',
        link : '/*',
        incon : <Package2 size={30} strokeWidth={2} />
    },
    {
        name : '100% Money Back',
        description:'If the item did not suit you',
        link : '/*',
        incon : <RefreshCcw size={30} strokeWidth={2} />
    }
]


function SecondSection() {
  return (
    <div className=" container mx-1 md:mx-auto grid grid-cols-2 md:grid-cols-3 gap-4 py-10 md:py-20 ">
        {
            data.map((item,index)=>(
                <Link to={item.link} key={index} className="flex gap-4 items-center justify-center hover:scale-105 transition-all duration-200">
                    <div className="text-green-400">
                        {item.incon}
                    </div>
                    <div className=" flex flex-col justify-start">
                        <h1 className="text-md md:text-2xl font-semibold text-slate-500">{item.name}</h1>
                        <p className="text-xs md:text-md text-gray-400">{item.description}</p>
                    </div>
              </Link>
            ))
        }
      
    </div>
  )
}


export default SecondSection
