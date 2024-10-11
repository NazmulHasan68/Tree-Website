import img1 from '../../assets/client1.jpg'
import img2 from '../../assets/client2.jpg'
import img3 from '../../assets/client3.jpg'

const data = [
    {
        name : 'Sarah Jones',
        title : 'Interior Designer',
        option : 'Neque porro quisquam est, qui dolore ipsum quia dolor sit amet, consectetur adipisci velit, sed quia non numquam eius modi tempora incidunt. ',
        img : img1
    },
    {
        name : 'Jessica ',
        title : 'Student',
        option : 'Neque porro quisquam est, qui dolore ipsum quia dolor sit amet, consectetur adipisci velit, sed quia non numquam eius modi tempora incidunt. ',
        img : img2
    },
    {
        name : 'Briana Luke ',
        title : 'Student',
        option : 'Neque porro quisquam est, qui dolore ipsum quia dolor sit amet, consectetur adipisci velit, sed quia non numquam eius modi tempora incidunt. ',
        img : img3
    }
]

function SixSection() {
  return (
    <div className=" container mx-4 md:mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 py-10 md:py-20">
      <div className='flex flex-col justify-center'>
        <h1 className='text-xl md:text-2xl text-slate-600 font-bold'>Testimonials</h1>
        <p className='text-md text-slate-500 w-[95%]'>Lorem ipsum dolor sit amet, consectetur adipis cing amet</p>
      </div>
      {
        data.map((item, index)=>(
            <div key={index} className='flex items-center gap-2'>
                <div>
                    <img src={item.img} className='w-[500px] rounded-3xl'/>
                </div>
                <div className='px-6'>
                    <p className='text-sm text-slate-500'>{item.option}</p>
                    <p className='text-xl text-slate-600 font-medium pt-4'> {item.name}</p>
                    <p className='text-sm text-slate-500'>{item.title}</p>
                </div>
            </div>
        ))
      }
    </div>
  )
}

export default SixSection
