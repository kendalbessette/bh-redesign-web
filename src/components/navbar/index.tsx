import React from 'react';
import {useRouter} from 'next/router';
import Link from 'next/link';

import {
  StyledNavBarLink,
  NavBarElementContainer,
  StyledNavBarLinkExternal,
  DesktopNav,
} from './style';

// The menu item should be a prop that is passed into the nav bar
// submenu should be its own component - will have their titles/links passed in
// pill color should be a prop - should I set that in the theme section?

// navbar should take in a list of items from contentful that can change at any time
// when the menu item is selected a submenu of items should display
// submenu items will also be popuated from contentful
// the color of the pills will change based on the branding of the project on the work pages

//placeholder route values
const routes = [
  {
    path: '/work',
    title: 'Work',
    external: false,
  },
  {
    path: '/services',
    title: 'Services',
    external: false,
  },
  {
    path: '/industries',
    title: 'Industries',
    external: false,
  },
  {
    path: '/about',
    title: 'About',
    external: false,
  },
  {
    path: '/careers',
    title: 'Careers',
    external: false,
  },
  {
    path: '/blog',
    title: 'Blog',
    external: false,
  },
];

interface NavBarElementProps {
  title: string;
  to: string;
  external: boolean;
  active: boolean;
}

export const NavBarElement: React.FC<NavBarElementProps> = ({
  title,
  to,
  external,
  active = false,
}) =>
  external ? (
    <NavBarElementContainer>
      <StyledNavBarLinkExternal href={to}>
        <span>{title}</span>
      </StyledNavBarLinkExternal>
    </NavBarElementContainer>
  ) : (
    <NavBarElementContainer>
      <StyledNavBarLink to={to} href={to} className={active ? 'active' : ''}>
        <span>{title}</span>
      </StyledNavBarLink>
    </NavBarElementContainer>
  );

export const Navbar = () => {
  const {pathname} = useRouter();

  return (
    <DesktopNav>
      <Link href="/">
        <svg
          width="35"
          height="35"
          viewBox="0 0 35 35"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_73_965)">
            <path
              d="M0 17.5C0 7.83502 7.83502 0 17.5 0C27.165 0 35 7.83502 35 17.5C35 27.165 27.165 35 17.5 35C7.83502 35 0 27.165 0 17.5Z"
              fill="#F0F1F1"
            />
            <path
              d="M0 17.5C0 7.83502 7.83502 0 17.5 0C27.165 0 35 7.83502 35 17.5C35 27.165 27.165 35 17.5 35C7.83502 35 0 27.165 0 17.5Z"
              fill="#E3E5E7"
              fill-opacity="0.25"
            />
            <path
              d="M27.9659 12.1937L23.6067 7.8864C22.8049 7.09327 21.8528 6.46409 20.805 6.03483C19.7571 5.60556 18.6339 5.38461 17.4996 5.38461C16.3653 5.38461 15.2422 5.60556 14.1943 6.03483C13.1464 6.46409 12.1944 7.09327 11.3925 7.8864L7.03334 12.1937C6.80398 12.4203 6.62204 12.6893 6.4979 12.9855C6.37377 13.2816 6.30988 13.599 6.30988 13.9196C6.30988 14.2401 6.37377 14.5575 6.4979 14.8536C6.62204 15.1498 6.80398 15.4188 7.03334 15.6454L11.3925 19.961C12.1944 20.7542 13.1464 21.3833 14.1943 21.8126C15.2422 22.2419 16.3653 22.4628 17.4996 22.4628C18.6339 22.4628 19.7571 22.2419 20.805 21.8126C21.8528 21.3833 22.8049 20.7542 23.6067 19.961L27.9659 15.6516C28.1967 15.4252 28.3799 15.1559 28.5049 14.8591C28.6299 14.5624 28.6943 14.2441 28.6943 13.9227C28.6943 13.6012 28.6299 13.283 28.5049 12.9862C28.3799 12.6895 28.1967 12.4201 27.9659 12.1937ZM17.4996 20.0172C16.2794 20.0177 15.0865 19.6603 14.0718 18.9903C13.0571 18.3204 12.2661 17.3679 11.7991 16.2535C11.332 15.1391 11.2098 13.9128 11.4479 12.7297C11.686 11.5466 12.2737 10.4599 13.1367 9.6071C13.9997 8.75428 15.0991 8.17366 16.296 7.93868C17.4928 7.7037 18.7333 7.82492 19.8604 8.28702C20.9875 8.74912 21.9507 9.53132 22.6281 10.5347C23.3054 11.538 23.6665 12.7174 23.6657 13.9237C23.6646 15.5398 23.0145 17.0894 21.8583 18.232C20.7021 19.3746 19.1344 20.0167 17.4996 20.0172Z"
              fill="#0F0F10"
            />
            <path
              d="M17.4997 10.8718C16.8902 10.8722 16.2945 11.0512 15.7879 11.3862C15.2813 11.7211 14.8865 12.197 14.6533 12.7537C14.4202 13.3104 14.3592 13.923 14.478 14.5139C14.5969 15.1049 14.8902 15.6478 15.3211 16.074C15.7519 16.5002 16.3009 16.7906 16.8986 16.9085C17.4963 17.0264 18.1159 16.9665 18.6792 16.7364C19.2425 16.5063 19.7242 16.1163 20.0634 15.6157C20.4026 15.1151 20.584 14.5263 20.5849 13.9238C20.5854 13.523 20.506 13.1261 20.3512 12.7557C20.1964 12.3853 19.9692 12.0487 19.6826 11.7652C19.3961 11.4817 19.0558 11.2569 18.6812 11.1036C18.3066 10.9503 17.9051 10.8715 17.4997 10.8718Z"
              fill="#0F0F10"
            />
            <path
              d="M7.34502 59.4244C7.30371 59.1734 7.18449 58.9413 7.00387 58.7603L4.14407 55.9352C3.58734 55.3869 3.17114 54.7151 2.93012 53.9757C2.6891 53.2362 2.63022 52.4506 2.75839 51.6841L5.91723 33.0455C6.30124 30.7676 7.49052 28.6984 9.27334 27.2062C11.0562 25.7141 13.3168 24.8958 15.6528 24.8972H19.3591C21.695 24.8962 23.9554 25.7146 25.7381 27.2067C27.5209 28.6988 28.7103 30.7678 29.0947 33.0455L32.2409 51.6841C32.3696 52.4499 32.3118 53.235 32.0723 53.9743C31.8328 54.7136 31.4184 55.3858 30.8636 55.9352L28.0038 58.7603C27.822 58.941 27.7013 59.173 27.6585 59.4244L22.7854 88.3056H21.2018C20.878 88.3059 20.5572 88.2431 20.2579 88.1209C19.9586 87.9986 19.6866 87.8193 19.4575 87.5931C19.2283 87.3669 19.0464 87.0983 18.9222 86.8026C18.798 86.507 18.734 86.19 18.7337 85.8699V65.1369C18.7337 64.8134 18.6037 64.5031 18.3722 64.2743C18.1408 64.0455 17.8269 63.917 17.4996 63.917C17.1723 63.917 16.8585 64.0455 16.627 64.2743C16.3956 64.5031 16.2656 64.8134 16.2656 65.1369V85.872C16.2656 86.192 16.2018 86.5089 16.0778 86.8046C15.9539 87.1002 15.7722 87.3688 15.5432 87.595C15.3142 87.8212 15.0423 88.0006 14.7431 88.1229C14.4439 88.2452 14.1233 88.308 13.7996 88.3077H12.216L7.34502 59.4244Z"
              fill="#0F0F10"
            />
          </g>
          <defs>
            <clipPath id="clip0_73_965">
              <path
                d="M0 17.5C0 7.83502 7.83502 0 17.5 0C27.165 0 35 7.83502 35 17.5C35 27.165 27.165 35 17.5 35C7.83502 35 0 27.165 0 17.5Z"
                fill="white"
              />
            </clipPath>
          </defs>
        </svg>
      </Link>
      {routes.map(route => {
        return (
          <NavBarElement
            key={`nav_route_${route.path}`}
            to={route.path}
            title={route.title}
            external={route.external}
            active={route.path === pathname}
          />
        );
      })}
    </DesktopNav>
  );
};