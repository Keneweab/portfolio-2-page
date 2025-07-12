import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';
import { Banner } from './Banner';
import { Footer } from './Footer';
import { Hero } from './Hero';
import { NavBar } from './NavBar';
import { Sponsors } from './Sponsors';
import { VerticalFeatures } from './VerticalFeatures';

const Base = () => (
  <div className="text-gray-600 antialiased">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <NavBar />
    <section id="hero">
      <Hero />
    </section>
    <section id="features">
      <VerticalFeatures />
    </section>
    <section id="banner">
      <Banner />
    </section>
    {/* <section id="carousel">
      <Carousel />
    </section> */}
    <section id="sponsors">
      <Sponsors />
    </section>
    <section id="footer">
      <Footer />
    </section>
  </div>
);

export { Base };
