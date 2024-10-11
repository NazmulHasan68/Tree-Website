import banner from '../../assets/plant5.jpg'
function Bannersection() {
  return (
    <div className="bg-no-repeat bg-cover bg-center rounded-lg h-[300px] md:h-[480px] flex items-center justify-start" style={{backgroundImage: `url(${banner})`}}>
      <div className='ml-10'>
        <h2 className='text-md md:text-xl font-semibold text-red-400'>Best Quality Plants</h2>
        <h1 className='text-2xl md:text-5xl font-bold text-slate-500 py-2 md:py-4'>Amazing Variety <br></br>Of Plants Starting <br></br><span className='text-red-400 font-medium'>Just $6</span></h1>
        <button className='px-4 py-1 text-sm md:text-md rounded-3xl bg-red-400 text-white font-semibold hover:bg-red-500'>Shop Now</button>
      </div>
    </div>
  )
}

export default Bannersection
