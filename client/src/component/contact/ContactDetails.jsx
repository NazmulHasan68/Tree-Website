import { Mail, MapPin, Phone } from "lucide-react"

const data = [
    {
        name : 'Our Location',
        add: '1569 2nd Ave, New York,NY 10028, USA',
        icon : <MapPin size={30} strokeWidth={1.5} />
    },
    {
        name : 'Call Us',
        add: '018 456 7890',
        icon : <Phone size={30} strokeWidth={1.5}/>
    },
    {
        name : 'Our Email',
        add: 'Nazmul@gmail.com',
        icon : <Mail size={30} strokeWidth={1.5}/>
    },

]
function ContactDetails() {
  return (
    <div className="md:w-[60%] w-full  mx-4 md:mx-0">
        <div className="py-10 ">
            <h1 className="text-xl md:text-2xl font-bold text-slate-600">Contact Details</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-4">
                {
                    data.map((item, index)=>(
                        <div key={index} className="flex items-center gap-4 md:gap-8 hover:scale-105 transition-all duration-150 cursor-pointer">
                            <div className="text-red-400">
                                {item.icon}
                            </div>
                            <div>
                                <p className="text-lg md:text-xl font-medium text-slate-600">{item.name}</p>
                                <p className="text-xs md:text-sm font-normal text-slate-400">{item.add}</p>
                            </div>
                        </div>
                    ))
                }    
            </div>
        </div>
        <div className="border-t-2 my-10 ">
            <h1 className="text-lg md:text-2xl font-bold text-slate-600 mx-4 py-4 md:mx-0" >Send Us a Message</h1>
            <div className="flex flex-col gap-4 w-[90%]">
              <input type="text" className="w-full h-[35px] md:h-[40px] px-4 text-slate-500 outline-none bg-slate-100" placeholder="Name"/>
              <input type="email" className="w-full h-[35px] md:h-[40px] px-4 text-slate-500 outline-none bg-slate-100" placeholder="Email"/>
              <input type="text"  className="w-full h-[35px] md:h-[40px] px-4 text-slate-500 outline-none bg-slate-100"placeholder="Subject"/>
              <textarea placeholder="Message" rows={4} className="w-full h-[120px] px-4 text-slate-500 outline-none bg-slate-100"></textarea>
              <button className="px-6 py-1 rounded-full bg-red-400 hover:bg-red-600 text-white w-[150px] md:w-[200px] text-lg">Submit</button>
            </div>
        </div>
    </div>
  )
}

export default ContactDetails
