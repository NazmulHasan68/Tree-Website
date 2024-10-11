import banner from '../../assets/aboutPage.jpg'
function AboutThird() {
  return (
    <div className=" container mx-auto flex flex-col py-10 justify-center overflow-hidden">
        <div className="text-center mx-2 md:mx-0">
            <h1 className="text-3xl text-slate-600 font-bold">Our Company</h1>
            <p className=" text-slate-500 text-sm md:text-lg w-full md:w-[50%] md:mx-auto py-10">I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo, when an unknown printer took a galley.</p>
        </div>
        <div className='mx-auto w-[90%] h-[280px] md:h-[600px]'>
            <img src={banner} className=' rounded-3xl object-cover w-full'/>
        </div>
    </div>
  )
}

export default AboutThird
