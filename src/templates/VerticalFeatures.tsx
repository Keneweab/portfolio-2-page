import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section
    title="Your title here"
    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus malesuada nisi tellus, non imperdiet nisi tempor at."
  >
    <VerticalFeatureRow
      title="Get Started Fast!"
      description="Sign up, set up your practice, and invite your team — all in minutes."
      image="/assets/images/undraw_enter-password_1kl4.svg"
      imageAlt="First feature alt text"
    />
    <VerticalFeatureRow
      title="Automate Letter Workflows!"
      description="Effortlessly manage patient records, forms, and billing with smart automation."
      image="/assets/images/undraw_compose-email_s6kf.svg"
      imageAlt="Second feature alt text"
      reverse
    />
    <VerticalFeatureRow
      title="Focus on Care"
      description="Spend your time where it matters most — with your patients, not the paperwork."
      image="/assets/images/undraw_loving-it_hspq.svg"
      imageAlt="Third feature alt text"
    />
  </Section>
);

export { VerticalFeatures };
