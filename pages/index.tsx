import Container from "../components/_Layout/Container";
import Head from "next/head";
import React from "react";
import type { NextPage } from "next";
import Link from "next/link";
import { routes } from "../routes";
import CarouselCoverflow from "../components/_Layout/CarouselCoverflow";
const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>The Round Table - Home</title>
        <meta
          name="description"
          content="The round table White lists Get white listed without pain, The Round Table NFT will help you get white listed for NFT mints and token IDOs. The time of spending hours hunting white lists has come to an end. Read More Passive incomes Earn passive incomes with your NFT Using different mechanisms, you will."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="relative">
        <div className="absolute top-1/3 right-0 left-0 text-center">
          <h1
            className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl"
            style={{ textShadow: "10px 5px 30px #bd8d4b" }}
          >
            The Round Table
          </h1>
        </div>
        <img src="/assets/img/hero.jpeg"></img>
      </div>
      <div className="bg-cream-light">
        <Container>
          <div className="py-16 text-black mb-16">
            <div className=" text-center md:text-left">
              <p className="italic text-primary-500">Whitelist</p>
              <div className="text-3xl font-bold mb-12">
                Get <span className="text-primary-500">white listed</span>{" "}
                without pain
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 text-center md:text-left mb-0 md:mb-24">
              <div className="col-span-2 md:col-span-1">
                <div className="h-full flex flex-col justify-between">
                  <div className="text-xl">
                    <p className="mb-4">
                      The Round Table NFT will help you get white listed for NFT
                      mints and token IDOs. The time of spending hours hunting
                      white lists has come to an end.
                    </p>
                    <Link href={routes.whitepaper}>
                      <a className="inline-flex justify-center rounded bg-primary-500 px-4 py-2 text-sm font-medium text-white hover:bg-primary-400">
                        Read more
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-span-2 md:col-span-1 relative hidden md:block">
                <div className="absolute -top-24 right-7">
                  <img src="/assets/img/img-9.png" />
                </div>
              </div>
            </div>
          </div>
        </Container>
        <img src="/assets/img/top_dark.png" />
        <div className="bg-cream">
          <Container>
            <div className="py-16 text-black">
              <div className="text-center md:text-right">
                <p className="italic text-primary-500">Passive incomes</p>
                <div className="text-3xl font-bold mb-12 w-full md:w-1/2 ml-auto">
                  <span className="text-primary-500">Earn</span> passive incomes
                  with your NFT
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 text-center md:text-left mb-0 md:mb-24">
                <div className="col-span-2 md:col-span-1 relative hidden md:block">
                  <div className="absolute -top-40 left-7">
                    <img src="/assets/img/bg-1-removebg-preview.png" />
                  </div>
                </div>
                <div className="col-span-2 md:col-span-1 text-center md:text-right">
                  <div className="h-full flex flex-col justify-between">
                    <div className="text-xl">
                      <p className="mb-4">
                        Using different mechanisms, you will be able to earn
                        passive incomes. The approach used combines different
                        risk levels to optimize the return on investment and
                        reward our NFT holders.
                      </p>
                      <Link href={routes.whitepaper}>
                        <a className="inline-flex justify-center rounded bg-primary-500 px-4 py-2 text-sm font-medium text-white hover:bg-primary-400">
                          Read more
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </div>
        <img src="/assets/img/bottom_dark.png" />
        <Container>
          <div className="py-16 text-black">
            <div className="text-center">
              <p className="italic text-primary-500">Coming soon</p>
              <div className="text-3xl font-bold mb-12">
                The Round Table{" "}
                <span className="text-primary-500">NFT Collection</span>{" "}
              </div>
            </div>
            <CarouselCoverflow
              items={[
                <img
                  key={"carousel-img-1"}
                  className="rounded blur-sm"
                  src="/assets/img/team/team-1.jpeg"
                />,
                <img
                  key={"carousel-img-2"}
                  className="rounded blur-sm"
                  src="/assets/img/team/team-2.jpeg"
                />,
                <img
                  key={"carousel-img-3"}
                  className="rounded blur-sm"
                  src="/assets/img/team/team-3.jpeg"
                />,
                <img
                  key={"carousel-img-4"}
                  className="rounded blur-sm"
                  src="/assets/img/team/team-4.jpeg"
                />,
              ]}
            />
          </div>
          <div className="py-16 text-black">
            <div className="text-center">
              <p className="italic text-primary-500">Partners</p>
              <div className="text-3xl font-bold mb-12">
                Our <span className="text-primary-500">Partners</span>{" "}
              </div>
            </div>
            <div className="flex justify-center items-end gap-12">
              <div>
                <img
                  className="max-h-40"
                  src="/assets/img/partners/wwwine.png"
                ></img>
                <a
                  href="https://www.wwwine.io/"
                  target={"_blank"}
                  rel="noreferrer"
                  className="mt-2 block text-center text-primary-500 hover:text-primary-400 transition-colors duration-200 ease-in-out text-2xl font-bold"
                >
                  wwwine
                </a>
              </div>
              <div>
                <img
                  className="max-h-40"
                  src="/assets/img/partners/jex.svg"
                ></img>
                <a
                  href="https://jexchange.io/"
                  target={"_blank"}
                  rel="noreferrer"
                  className="mt-2 block text-center text-primary-500 hover:text-primary-400 transition-colors duration-200 ease-in-out text-2xl font-bold"
                >
                  Jexchange
                </a>
              </div>
            </div>
          </div>
        </Container>
        <img className="bg-black" src="/assets/img/bottom.png" />
      </div>
    </>
  );
};

export default Home;
