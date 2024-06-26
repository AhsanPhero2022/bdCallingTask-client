import AboutBanner from "../../design/About/AboutBanner";
import BookConsultation from "../../design/About/BookConsultation";
import OurStory from "../../design/About/OurStory";
import OurTeam from "../../design/About/OurTeam";
import Testimonials from "../../design/Home/Testimonials";
import Users from "../../shared/Users";

const AboutPage = () => {
  return (
    <div className="mx-auto">
      <AboutBanner />
      <Users />
      <OurStory />
      <OurTeam />
      <BookConsultation />
      <Testimonials />
    </div>
  );
};

export default AboutPage;
