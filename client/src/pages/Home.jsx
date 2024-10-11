import Bannersection from "../component/home/Bannersection";
import FiveSection from "../component/home/FiveSection";
import FourthSection from "../component/home/FourthSection";
import SecondSection from "../component/home/SecondSection";
import SixSection from "../component/home/SixSection";
import ThirdSection from "../component/home/thirdSection";
import PageTitle from "../component/PageTitle";

export default function Home() {
  return (
    <div className=" container mx-auto">
      <PageTitle title="Home"/>
      <Bannersection/>
      <SecondSection/>
      <ThirdSection/>
      <FourthSection/>
      <FiveSection/>
      <SixSection/>
    </div>
  )
}

// https://websitedemos.net/plant-store-02/about-us/