import ContactUsForm from "./ContactForm/ContactUsForm";
import ContactMain from "./contactmain/ContactMain";

function ContactUsPage() {
  return (
    <div className="main_head max-w-screen overflow-hidden lg:mt-[110px]">
      <ContactMain />
      <ContactUsForm />
    </div>
  );
}

export default ContactUsPage;
