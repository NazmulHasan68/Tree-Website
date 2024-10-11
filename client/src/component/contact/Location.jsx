
function Location() {
  return (
    <div className="mt-10 mx-4 md:mx-0"> 
      <h1 className="text-2xl font-bold text-slate-600 py-4">Location</h1>
      <div style={{width: '100% '}}>
        <iframe  className=" w-[330px] md:w-[480px] h-[480px] md:h-[650px]"
         src="https://maps.google.com/maps?width=480&amp;height=650&amp;hl=en&amp;q=%205/B%20Beribandh%20Main%20Road,%20Dhaka%201207+(Tree%20shop)&amp;t=k&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
            <a href="https://www.gps.ie/">
                gps vehicle tracker
            </a>
        </iframe>
      </div>
    </div>
  )
}

export default Location
