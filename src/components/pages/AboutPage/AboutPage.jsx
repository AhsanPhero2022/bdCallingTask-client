import AboutBanner from "../../design/About/AboutBanner";
import BookConsultation from "../../design/About/BookConsultation";
import OurStory from "../../design/About/OurStory";
import OurTeam from "../../design/About/OurTeam";
import Testimonials from "../../design/Home/Testimonials";

const AboutPage = () => {
  return (
    <div className="mx-auto">
      <AboutBanner />
      <OurStory />
      <OurTeam />
      <BookConsultation />
      <Testimonials />
    </div>
  );
};

export default AboutPage;
