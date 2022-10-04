import Container from "../components/_Layout/Container";
import Head from "next/head";
import React from "react";
import type { NextPage } from "next";

const WhitepaperPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>The Round Table - Our Team</title>
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
              <p className="italic text-primary-500">Team</p>
              <div className="text-3xl font-bold mb-12">
                Meet our <span className="text-primary-500">team</span>
              </div>
            </div>
            <div className="flex flex-col gap-8">
              <div className="flex flex-col sm:flex-row justify-center items-center sm:items-start text-center sm:text-left gap-2">
                <img
                  className="w-44 h-44 rounded"
                  src="/assets/img/nft/nft3.png"
                ></img>
                <div>
                  <div className="text-2xl text-primary-500 font-semibold mb-4">
                    Stéphane (@Didoudidoute):
                  </div>
                  <p>
                    After discovering the world of cryptocurrencies at the end
                    of 2020, Stéphane quickly focused his interests on Elrond.
                    The Elrond community has a lot to do with it because the
                    state of mind is very pleasant and the mutual aid is very
                    present. The passion for NFTs then arrived and the ideas to
                    develop a useful project also.
                  </p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row justify-center items-center sm:items-start text-center sm:text-left gap-2">
                <img
                  className="w-44 h-44 rounded"
                  src="/assets/img/nft/nft4.png"
                ></img>
                <div>
                  <div className="text-2xl text-primary-500 font-semibold mb-4">
                    Florian (@Billythekid945):
                  </div>
                  <p>
                    Working as a technical instructor for Amazon Web Services,
                    passionate about cryptocurrencies, and currently involved in
                    other crypto projects (i.e: Wwwine.io), Florian quickly
                    realized the pain of following newly created projects and
                    hunting white lists. Moreover, the aspect of creating an NFT
                    that would generate passive incomes really matched with his
                    view of what NFTs should be. Therefore, he will use his
                    experience both in tech and crypto as well as his network to
                    make this happen.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
        <img className="bg-black" src="/assets/img/bottom.png" />
      </div>
    </>
  );
};

export default WhitepaperPage;
