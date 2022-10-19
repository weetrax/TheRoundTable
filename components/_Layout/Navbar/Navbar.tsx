import classNames from "classnames";
import Container from "../Container";
import Link from "next/link";
import PropTypes from "prop-types";
import React, { useState } from "react";
import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { routes } from "../../../routes";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord, faTwitter } from "@fortawesome/free-brands-svg-icons";

type NavbarProps = {
  //
};

const navigation = [
  { name: "The Round Table", href: routes.home },
  { name: "Whitepaper (EN)", href: routes.whitepaper },
  { name: "Whitepaper (FR)", href: routes.whitepaperFR },
  { name: "Team", href: routes.team },
  { name: "Contact", href: routes.contact },
];

const Navbar: React.FC<NavbarProps> = () => {
  const router = useRouter();

  const [mintText, setMintText] = useState("Mint NFT");

  return (
    <Disclosure
      as="nav"
      className="bg-black backdrop-filter backdrop-blur bg-opacity-70 items-center sticky top-0 shadow-sm z-20"
    >
      {({ open }) => (
        <>
          <Container>
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-700">
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
                  <img
                    className="block lg:hidden h-8 w-auto"
                    src="/assets/img/logo.png"
                    alt="Workflow"
                  />
                  <img
                    className="hidden lg:block h-8 w-auto"
                    src="/assets/img/logo.png"
                    alt="Workflow"
                  />
                </div>
                <div className="hidden sm:block sm:ml-6 w-full">
                  <div className="flex items-center justify-between space-x-4">
                    <div>
                      {navigation.map((item) => (
                        <Link href={item.href} key={item.name}>
                          <a
                            className={classNames(
                              router.pathname == item.href
                                ? "text-primary-500"
                                : "hover:bg-primary-500 rounded duration-200 ease-in-out transition-all",
                              "px-3 py-2 text-sm font-medium"
                            )}
                            aria-current={
                              router.pathname == item.href ? "page" : undefined
                            }
                          >
                            {item.name}
                          </a>
                        </Link>
                      ))}
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <a
                        onMouseOver={() => setMintText("Coming soon")}
                        onMouseLeave={() => setMintText("Mint NFT")}
                        className="inline-flex justify-center rounded bg-primary-500 px-4 py-2 text-sm font-medium text-white hover:bg-primary-400 transition-all duration-200 ease-in-out"
                        href="#"
                      >
                        {mintText}
                      </a>
                      <a
                        href="https://twitter.com/TheRound_Table_"
                        rel="noreferrer"
                        className="flex justify-center hover:text-primary-500 ease-in-out transition-colors duration-200"
                        target={"_blank"}
                      >
                        <i>
                          <FontAwesomeIcon
                            className="w-5 h-5"
                            icon={faTwitter}
                          />
                        </i>
                      </a>
                      <a
                        href="https://dsc.gg/TheRoundTable"
                        rel="noreferrer"
                        className="flex justify-center hover:text-primary-500 ease-in-out transition-colors duration-200"
                        target={"_blank"}
                      >
                        <i>
                          <FontAwesomeIcon
                            className="w-5 h-5"
                            icon={faDiscord}
                          />
                        </i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Disclosure.Button key={item.name} as="div">
                  <Link href={item.href} key={item.name}>
                    <a
                      className={classNames(
                        router.pathname == item.href
                          ? "text-primary-500"
                          : "hover:text-primary-500 rounded duration-200 ease-in-out transition-all",
                        "px-3 py-2 text-sm font-medium"
                      )}
                      aria-current={
                        router.pathname == item.href ? "page" : undefined
                      }
                    >
                      {item.name}
                    </a>
                  </Link>
                </Disclosure.Button>
              ))}
              <a
                className="inline-flex justify-center rounded bg-primary-500 px-4 py-2 text-sm font-medium text-white hover:bg-primary-400"
                href="#"
              >
                Mint NFT
              </a>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

Navbar.propTypes = {
  //
};

export default Navbar;
