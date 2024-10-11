import ContactBanner from "../component/contact/ContactBanner";
import ContactDetails from "../component/contact/ContactDetails";
import Location from "../component/contact/Location";
import PageTitle from "../component/PageTitle";

export default function Contact() {
  return (
    <div className=" container mx-auto">
      <PageTitle title="Contact"/>
      <ContactBanner/>
      <div className="flex flex-col md:flex-row justify-between items-start">
        <ContactDetails/>
        <Location/>
      </div>
    </div>
  )
}


