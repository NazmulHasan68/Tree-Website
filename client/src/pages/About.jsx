
import AboutBanner from "../component/about/AboutBanner";
import AboutFourth from "../component/about/AboutFourth";
import AboutSecond from "../component/about/AboutSecond";
import AboutThird from "../component/about/AboutThird";
import PageTitle from "../component/PageTitle";


export default function About() {
  return (
    <div className=" container mx-auto">
        <PageTitle title="About"/>
        <AboutBanner/>
        <AboutSecond/>
        <AboutThird/>
        <AboutFourth/>
    </div>
  )
}
