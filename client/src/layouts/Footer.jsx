import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="w-full py-10 md:py-20 p-2 mt-10 bg-slate-100  ">
        <div className=" container md:mx-auto flex flex-col md:flex-row md:justify-between gap-20 md:gap-4">
            <div className=" basis-1/4 mx-2 md:mx-auto text-left">
                <h3 className="text-slate-700 font-semibold text-xl ">Go This page</h3>
                <div className="flex md:flex-col gap-4 md:gap-2 mt-2">
                    <Link className="text-slate-700 font-medium text-md hover:font-bold" to='/'>Home</Link>
                    <Link className="text-slate-700 font-medium text-md hover:font-bold" to='/register'>Register</Link>
                    <Link className="text-slate-700 font-medium text-md hover:font-bold" to='/login'>Login</Link>
                    <Link className="text-slate-700 font-medium text-md hover:font-bold" to='/cart'>Cart</Link>
                </div>
            </div>
            <div className=" basis-2/4 px-2">
                <h3 className="text-slate-700 font-semibold text-xl">Our Shop</h3>
                <p className="mt-2 text-slate-600 font-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit quasi numquam modi 
                    ipsum sequi dolore maxime autem cupiditate iste vel dolorum facere delectus hic amet optio
                    ipsam est quaerat, porro fugit at tenetur incidunt voluptate magni. Aut et provident, 
                    necessitatibus ratione similique eveniet quo vero ea, commodi pariatur voluptas quia!</p>
            </div>
            <div className=" basis-1/4">
                <h3 className="text-slate-700 font-semibold text-xl">Sent us your Opnion</h3>
                <div className="flex flex-col gap-2 px-2">
                    <div className="flex flex-col gap-1">
                        <label className="text-slate-700 font-medium">Email : </label>
                        <input type="email" className="w-full p-1  bg-slate-200 outline-none font-semibold"/>
                    </div>
                    <div className="flex flex-col gap-1">
                        <label className="text-slate-700 font-medium">Message : </label>
                        <textarea rows={3} className="w-full p-1 bg-slate-200 outline-none font-semibold"/>
                    </div>
                    <button className="w-full p-1 text-slate-600 hover:bg-slate-400 hover:text-slate-800 bg-slate-200 outline-none font-semibold">Submit your mail</button>
                </div>
            </div>
        </div>
    </footer>
  )
}
