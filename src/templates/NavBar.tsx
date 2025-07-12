import { SmoothScrollLink } from '@/navigation/SmoothScrollLink';

import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const NavBar = () => (
  <NavbarTwoColumns logo={<Logo xl />}>
    <nav className="fixed left-0 top-0 z-50 w-full bg-white shadow-md">
      <ul className="flex justify-center space-x-6 p-4">
        <li>
          <SmoothScrollLink to="#hero">Home</SmoothScrollLink>
        </li>
        <li>
          <SmoothScrollLink to="#features">Features</SmoothScrollLink>
        </li>
        <li>
          <SmoothScrollLink to="#banner">Banner</SmoothScrollLink>
        </li>
      </ul>
    </nav>
  </NavbarTwoColumns>
);

export { NavBar };
