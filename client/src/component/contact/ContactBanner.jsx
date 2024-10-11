import banner from '../../assets/contact-bg.jpg'
import PageTitle from "../../component/PageTitle";


export default function ContactBanner() {
  return (
    <div className="bg-no-repeat bg-cover bg-center rounded-lg h-[300px] md:h-[480px] flex items-center justify-start" style={{backgroundImage: `url(${banner})`}}>
      <PageTitle title="About"/>
      <div className='ml-10'>
        <h1 className='text-2xl md:text-5xl font-bold text-slate-600 py-2 md:py-4 text-shadow-xl '><span className='text-red-400 font-medium'>Share Your</span> <br></br>Thoughts with us</h1>
        <button className='px-4 py-1 text-sm md:text-xl rounded-3xl bg-red-400 text-white font-semibold hover:bg-red-500'>Call Now</button>
      </div>
  </div>
  )
}

