import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import { Link, NavLink } from "react-router-dom";

const navigation = [
  { name: "Home", href: "/", current: true },
  { name: "Dashboard", href: "/dashboard", current: false },
  { name: "Detection", href: "/disease-detection", current: false },
  { name: "Teleconsulting", href: "/teleconsulting", current: false },
];

export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-brown-600">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-black hover:text-black hover:bg-brown-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center">
                 <Link to='/'>
                  <div className="block lg:hidden h-8 w-auto">
                      <h3 className="font-mono text-black font-bold text-xl">FM</h3>
                  </div>
                  <div className="hidden lg:block h-8 w-auto">
                    <h2 className="font-mono text-black font-bold text-xl">fasal-mitra</h2>
                  </div>
                 {/* {<img
                    className="block lg:hidden h-8 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                    alt="Workflow"
                  />
                  <img
                    className="hidden lg:block h-8 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg"
                    alt="Workflow"
                  />} */}
                 </Link>
                </div>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <NavLink
                        key={item.name}
                        to={item.href}
                        className={({ isActive }) =>
                          `${
                            isActive
                              ? "bg-brown-900 text-white"
                              : "text-black hover:bg-brown-700 hover:text-white"
                          } px-3 py-2 rounded-md text-sm font-medium`
                        }
                      >
                        {item.name}
                      </NavLink>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <Link
                  to="/auth"
                  className="bg-brown-800 px-3 py-2 rounded-md text-white text-sm hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-white"
                >
                  Login/Signup
                </Link>

                {/* Profile dropdown */}
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <NavLink
                  key={item.name}
                  as={NavLink}
                  to={item.href}
                  className={({ isActive }) =>
                    `${
                      isActive
                        ? "bg-white text-black"
                        : "text-white hover:bg-white hover:text-white"
                    } block px-3 py-2 rounded-md text-base font-medium`
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
