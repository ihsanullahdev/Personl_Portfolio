import "./menuBar.css";
import { NavLink } from "react-router-dom";

import {
  House,
  User,
  BriefcaseBusiness,
  Brain,
  FolderKanban,
  Mail,
} from "lucide-react";

function MenuBar() {
  const menuItems = [
    {
      name: "Home",
      path: "/",
      icon: House,
    },
    {
      name: "About",
      path: "/about",
      icon: User,
    },
    {
      name: "Experience",
      path: "/experience",
      icon: BriefcaseBusiness,
    },
    {
      name: "Skills",
      path: "/skills",
      icon: Brain,
    },
    {
      name: "Projects",
      path: "/projects",
      icon: FolderKanban,
    },
    {
      name: "Contact",
      path: "/contact",
      icon: Mail,
    },
  ];

  return (
    <nav className="menuBar">
      {menuItems.map((item) => {
        const Icon = item.icon;

        return (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              isActive ? "menuLink active" : "menuLink"
            }
          >
            <Icon size={20} />

            <span>{item.name}</span>
          </NavLink>
        );
      })}
    </nav>
  );
}

export default MenuBar;
