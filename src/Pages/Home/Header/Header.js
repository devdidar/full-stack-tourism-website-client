import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import useAuth from "../../hooks/useAuth";
import "./Header.css";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const Header = () => {
  const { user, handleLogOut } = useAuth();
  const [barIcon, setBarIcon] = useState(false);

  return (
    <div className="bg-indigo-600 pb-2 ">
      <nav className="flex nav-section justify-between items-center mx-12 text-white text-lg ">
        <Link to="/">
          <h1 className="text-3xl logo">Travelo</h1>
        </Link>

        <div className={barIcon ? "mobile-menu nav-link" : "nav-link"}>
          <div className={barIcon || "mobile-nav-link"}>
            <Link to="/home">Home</Link>
            <Link to="/trips">Trip Package</Link>
            <Link to="/guide">Tour Guide</Link>
            <Link to="/contactUs">contact Us</Link>
            {user.email ? (
              <Menu as="div" className="relative inline-block text-left mt-3">
                <div>
                  <Menu.Button className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
                    DashBoard
                    <ChevronDownIcon
                      className="-mr-1 ml-2 h-5 w-5"
                      aria-hidden="true"
                    />
                  </Menu.Button>
                </div>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none">
                    <div className="py-1">
                      <Menu.Item>
                        {({ active }) => (
                          <div
                            className={classNames(
                              active
                                ? "bg-gray-100 text-gray-900"
                                : "text-gray-700",
                              "block px-4 py-2 text-sm"
                            )}
                          >
                            <h1>{user?.displayName}</h1>
                          </div>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            to="/myOrders"
                            className={classNames(
                              active
                                ? "bg-gray-100 text-gray-900"
                                : "text-gray-700",
                              "block px-4 py-2 text-sm"
                            )}
                          >
                            <button>My Orders</button>
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            to="/manageOrders"
                            className={classNames(
                              active
                                ? "bg-gray-100 text-gray-900"
                                : "text-gray-700",
                              "block px-4 py-2 text-sm"
                            )}
                          >
                            <button>Manage Orders</button>
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            to="/addATrip"
                            className={classNames(
                              active
                                ? "bg-gray-100 text-gray-900"
                                : "text-gray-700",
                              "block px-4 py-2 text-sm"
                            )}
                          >
                            <button>Add A Trip</button>
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            onClick={handleLogOut}
                            className={classNames(
                              active
                                ? "bg-gray-100 text-gray-900"
                                : "text-gray-700",
                              "block px-4 py-2 text-sm"
                            )}
                          >
                            Log Out
                          </button>
                        )}
                      </Menu.Item>
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
            ) : (
              <Link to="/login">
                <button className=" mt-3 text-sm bg-gradient-to-r from-purple-700 to-blue-800 px-4 py-2 text-white rounded">
                  Log In
                </button>
              </Link>
            )}
          </div>
        </div>
      </nav>
      <i
        className="fas fa-bars hidden bar-icon cursor-pointer"
        onClick={() => {
          setBarIcon(!barIcon);
        }}
      ></i>
    </div>
  );
};

export default Header;
