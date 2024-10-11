import { BriefcaseBusiness, Star } from "lucide-react"
import img1 from '../../assets/plant1.jpg'
import img2 from '../../assets/plant2.jpg'
import img3 from '../../assets/plant9.jpg'
import img4 from '../../assets/plant4.jpg'
import img5 from '../../assets/plant8.jpg'
import img6 from '../../assets/plant6.jpg'
import img7 from '../../assets/plant7.jpg'
import img8 from '../../assets/plant8.jpg'




const data = [
    {   
        id:1,
        brand : 'Plants',
        name : 'Boncellensis Secullant',
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint quisquam doloremque alias accusamus, tempora autem explicabo odio voluptates nostrum fugiat!",
        price : '35.00',
        img : img1
    },
    {
        id:2,
        brand : 'Cactus',
        name : 'Cleistocactus',
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint quisquam doloremque alias accusamus, tempora autem explicabo odio voluptates nostrum fugiat!",
        price : '25.00',
        img : img2
    },
    {
        id:3,
        brand : 'Plants',
        name : 'Green Soil Lotus',
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint quisquam doloremque alias accusamus, tempora autem explicabo odio voluptates nostrum fugiat!",
        price : '34.00',
        img : img3
    },
    {
        id:4,
        brand : 'Plants',
        name : 'Money Plant',
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint quisquam doloremque alias accusamus, tempora autem explicabo odio voluptates nostrum fugiat!",
        price : '38.00',
        img : img4
    },
    {
        id:5,
        brand : 'Cactus',
        name : 'Old laday cactus',
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint quisquam doloremque alias accusamus, tempora autem explicabo odio voluptates nostrum fugiat!",
        price : '26.00',
        img : img5
    },
    {
        id:6,
        brand : 'Plants',
        name : 'Piorro Quisquam',
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint quisquam doloremque alias accusamus, tempora autem explicabo odio voluptates nostrum fugiat!",
        price : '36.00',
        img : img6
    },
    {
        id:7,
        brand : 'Plants',
        name : 'Rattle Snake Tail',
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint quisquam doloremque alias accusamus, tempora autem explicabo odio voluptates nostrum fugiat!",
        price : '27.00',
        img : img7
    },
    {
        id:8,
        brand : 'Cactus',
        name : 'Star Cactus',
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint quisquam doloremque alias accusamus, tempora autem explicabo odio voluptates nostrum fugiat!",
        price : '32.00',
        img : img8
    },
]

import { useNavigate } from "react-router-dom";

function FourthSection() {
   const navigate = useNavigate()
   const senddata = (item) =>{
    navigate(`/product/${item.name}`, { state: { item } })
    window.scrollTo({
        top: 0,
        behavior: 'smooth' 
    });
   }

   
   
  return (
  <div className="py-4">
      <div className="mx-auto text-center py-4 my-10">
        <h1 className="text-xl md:text-3xl font-semibold text-slate-500">Featured Plants</h1>
        <p className="text-slate-400 text-sm">Lorem ipsum dolor sit amet, consectetur adipis.</p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mx-4 md:mx-0">
      {
        data.map((item, index)=>(
            <div key={index} onClick={()=>senddata(item)} className="py-2 md:py-6 hover:scale-105 transition-all duration-200 relative ">
                <div className="group">
                    <img className="w-[150px] md:w-[300px] bg-blend-multiply mx-auto" src={item.img}/>
                    <div className=" group-hover:block hidden absolute top-4 md:top-8 right-2 text-slate-600 p-1 shadow-sm bg-white rounded-full hover:text-slate-800">
                        <BriefcaseBusiness size={20} strokeWidth={1.5}/>
                    </div>
                    <div className="group">
                        <p className="hidden group-hover:block absolute text-[12px] top-4 md:top-10 right-10 md:right-12 cursor-pointer text-slate-500 hover:text-red-400">
                            Add to cart</p>
                    </div>
                </div>
               
                <div className=" py-2 md:py-4 mx-2 md:mx-0">
                    <p className="text-sm text-slate-400">{item.brand}</p>
                    <h1 className="text-md text-slate-500 font-medium">{item.name}</h1>
                    <div className="flex gap-1">
                        {Array(4).fill(null).map((_, idx) => (
                        <p key={idx} className="text-red-400"><Star size={10} strokeWidth={2}/></p>
                        ))}
                    </div>
                    <p className="text-xs text-slate-500 font-bold">${item.price}</p>
                </div>
                <p className="px-2 rounded-full text-sm text-slate-600 bg-slate-300 absolute top-4 md:top-8 left-3 md:left-2">Sale!</p>
            </div>
            
        )) 
      }
     
    </div>
  </div>
  )
}

export default FourthSection
