import { Phone } from "lucide-react"

function FiveSection() {
  return (
    <div className=" container  flex md:justify-between md:items-center flex-col md:flex-row mx-2 md:mx-auto gap-4 py-10 md:py-30 mt-5 md:mt-10">
      <div className=" basis-5/12 ">
        <p className="text-slate-700 text-md md:text-xl font-semibold ">Need help in choosing the right plants?</p>
        <div className="flex gap-2  text-red-400 mt-4 cursor-pointer">
            <Phone size={15} className="mt-0.5"/>
            <p className="text-sm">Ask For Help</p>
        </div>
      </div>
      <div className=" basis-7/12">
        <p className="text-sm md:text-md text-slate-500 py-5 ">
        Commodo sociosqu venenatis cras dolor sagittis integer luctus sem primis eget maecenas sedurna malesuada consectetuer.<br></br>
        Ornare integer commodo mauris et ligula purus, praesent cubilia laboriosam viverra. Mattis id rhoncus. Integer lacus eu
         volutpat fusce. Elit etiam phasellus suscipit suscipit dapibus, condimentum tempor quis, turpis luctus dolor sapien vivamus.
        </p>
      </div>
    </div>
  )
}

export default FiveSection
