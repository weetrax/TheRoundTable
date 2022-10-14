import Container from "../components/_Layout/Container";
import Head from "next/head";
import React from "react";
import type { NextPage } from "next";

const WhitepaperPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>The Round Table - Contact</title>
        <meta
          name="description"
          content="The round table White lists Get white listed without pain, The Round Table NFT will help you get white listed for NFT mints and token IDOs. The time of spending hours hunting white lists has come to an end. Read More Passive incomes Earn passive incomes with your NFT Using different mechanisms, you will."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-cream-light text-lg">
        <Container>
          <div className="py-16 text-black">
            <div className=" text-center md:text-left">
              <p className="italic text-primary-500">Contact</p>
              <div className="text-3xl font-bold mb-12">
                Get in <span className="text-primary-500">touch</span> with us
              </div>
            </div>
            <a
              href="https://forms.gle/qKGrZbRGoub7nQ689"
              rel="noreferrer"
              target={"_blank"}
              className="inline-flex justify-center rounded bg-primary-500 px-4 py-2 text-sm font-medium text-white hover:bg-primary-400"
            >
              Contact us
            </a>
          </div>
        </Container>
        <img className="bg-black" src="/assets/img/bottom.png" />
      </div>
    </>
  );
};

export default WhitepaperPage;
