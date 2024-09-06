import ContactUsForm from "./ContactForm/ContactUsForm";
import ContactMain from "./contactmain/ContactMain";

function ContactUsPage() {
  return (
    <div className="main_head max-w-screen overflow-hidden">
      <ContactMain />
      <ContactUsForm />
    </div>
  );
}

export default ContactUsPage;
