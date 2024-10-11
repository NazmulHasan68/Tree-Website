import img from '../assets/teammate-2.png'
import {  Star} from 'lucide-react';
function Account() {
  return (
    <div className=" container mx-auto">
      <div className=" mx-4 md:mx-auto flex flex-col md:flex-row gap-4 justify-between items-start">
        <div className="md:w-[40%] w-full ">
            <div className='py-5 border-b-2'>
              <img src={img} className='w-[250px]'/>
            </div>
            <div className='border-b-2 my-4'>
                <div className=' cursor-pointer'>
                  <h1 className='text-slate-600 font-semibold text-xl flex justify-between mt-2'>
                    Full Name
                    <span className='px-4 py-0.5  bg-slate-200 rounded-full text-xs pt-1'> Author</span>
                  </h1>
                  <p className='text-lg text-slate-500 '>Nazmul Hasan</p>
                </div>
                <div className=' cursor-pointer'>
                  <h1 className='text-slate-600 font-semibold text-xl flex justify-between mt-2'>
                    Profession
                    <span className='px-4 py-0.5  bg-slate-200 rounded-full text-xs pt-1'>Now</span>
                  </h1>
                  <p className='text-lg text-slate-400 '>Progrmmer</p>
                </div>
            </div>
            <div>
                <div className=' cursor-pointer'>
                  <h1 className='text-slate-600 font-semibold text-xl flex justify-between mt-2'>
                    Language 
                    <span className='px-4 py-0.5  bg-red-200 rounded-full text-xs pt-1'>Skill</span>
                  </h1>
                  <p className='text-lg text-slate-400 '>Bangla</p>
                  <p className='text-lg text-slate-400 '>Englsih</p>
                  <p className='text-lg text-slate-400 '>Hindi</p>
                  <p className='text-lg text-slate-400 '>Japnees</p>
                </div>
            </div>
        </div>
        <div className="md:w-[60%] w-full mx-4 md:mx-0">
          <div>
             <div className=' cursor-pointer'>
                  <h1 className='text-slate-600 font-semibold text-xl flex justify-between mt-2'>
                    Eduction
                  </h1>
                  <p className='text-lg text-slate-400 '> <span className='font-bold text-slate-500 text-sm'>Graduate :</span>Studied Computer Science & Engineering (CSE) at Bangladesh University</p>
                  <p className='text-lg text-slate-400 '> <span className='font-bold text-slate-500 text-sm'>H.S.C  :</span>Ruposhi Bangla College, Cumilla</p>
                  <p className='text-lg text-slate-400 '> <span className='font-bold text-slate-500 text-sm'>S.S.C :</span> Gazipur Khan Govt. High School & College</p>
              </div>
              <div className=' cursor-pointer py-6'>
                  <h1 className='text-slate-600 font-semibold text-xl flex justify-between mt-2'>
                    Present Address
                  </h1>
                  <p className='text-lg text-slate-400 '>Dhaka , Muhammdpur -1207</p>
              </div>
              <div className=' cursor-pointer pb-4'>
                  <h1 className='text-slate-600 font-semibold text-xl flex justify-between mt-2'>
                    Parmanent Address
                  </h1>
                  <p className='text-lg text-slate-400 '>Comilla , Bangladesh</p>
              </div>
              <div className=' cursor-pointer'>
                  <h1 className='text-slate-600 font-semibold text-xl flex justify-between mt-2'>
                    Experts
                  </h1>
                  <p className='text-lg text-slate-400 '>Programming </p>
                  <p className='text-lg text-slate-400 '>Web developing </p>
                  <p className='text-lg text-slate-400 '>Graphies Designing </p>
                  <p className='text-lg text-slate-400 '>Teaching</p>
              </div>
              <div className=' cursor-pointer'>
                  <h1 className='text-slate-600 font-semibold text-xl flex justify-between mt-2'>
                    Ratting
                  </h1>
                 <div className='flex gap-2 text-red-400'>
                  <Star size={20} strokeWidth={2} />
                  <Star size={20} strokeWidth={2} />
                  <Star size={20} strokeWidth={2} />
                  <Star size={20} strokeWidth={2} />
                  <Star size={20} strokeWidth={2} />
                 </div>
              </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Account
