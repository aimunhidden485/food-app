import Link from 'next/link';
import React from 'react';
const menu = [
     {
          name: "Home",
          path: "/",
     },
     {
          name: "About",
          path: "/about",
     },
     {
          name: "Orders",
          path: "/Orders",
     },
     {
          name: "Blog",
          path: "/blog",
     },
     {
          name: "Contact",
          path: "/contact",
     },
];
const NavMenu = () => {
     return (
          <ul className="md:flex md:flex-row gap-4 hidden ">
				{menu.map((item, i) => (
					<Link key={i} href={item.path}>
						<li>{item.name}</li>
					</Link>
				))}
			</ul>
     );
};

export default NavMenu;