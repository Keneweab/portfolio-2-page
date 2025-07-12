import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section
    title="Start your Automation in 3 easy Steps!!"
    description="Below are the features of the automaton application"
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
      description="Spend your time where it matters most — with your clients, not the paperwork."
      image="/assets/images/undraw_loving-it_hspq.svg"
      imageAlt="Third feature alt text"
    />
  </Section>
);

export { VerticalFeatures };
