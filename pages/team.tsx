import Container from '../components/_Layout/Container';
import Head from 'next/head';
import React from 'react';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
                    Stéphane{" "}
                    <div className="inline-flex items-center gap-4">
                      <a
                        href="https://twitter.com/Didoudidoute"
                        target={"_blank"}
                        className="font-bold hover:text-primary-400 ease-in-out transition-colors duration-200"
                        rel="noreferrer"
                      >
                        (@Didoudidoute)
                      </a>
                      <a
                        href="https://twitter.com/Didoudidoute"
                        rel="noreferrer"
                        title="Twitter"
                        className="hover:text-primary-400 ease-in-out transition-colors duration-200"
                        target={"_blank"}
                      >
                        <i>
                          <FontAwesomeIcon
                            className="w-5 h-5"
                            icon={faTwitter}
                          />
                        </i>
                      </a>
                    </div>
                  </div>
                  <p className="text-justify">
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
                    Florian{" "}
                    <div className="inline-flex items-center gap-4">
                      <a
                        href="https://twitter.com/BillythekidEGLD"
                        target={"_blank"}
                        className="font-bold hover:text-primary-400 ease-in-out transition-colors duration-200"
                        rel="noreferrer"
                      >
                        (@Billythekid945)
                      </a>
                      <a
                        href="https://twitter.com/BillythekidEGLD"
                        rel="noreferrer"
                        title="Twitter"
                        className="hover:text-primary-400 ease-in-out transition-colors duration-200"
                        target={"_blank"}
                      >
                        <i>
                          <FontAwesomeIcon
                            className="w-5 h-5"
                            icon={faTwitter}
                          />
                        </i>
                      </a>
                    </div>
                  </div>
                  <p className="text-justify">
                    Working as a technical instructor for Amazon Web Services
                    and passionate about cryptocurrencies, Florian decided to
                    take an active part to the Elrond ecosystem by joining
                    crypto projects (i.e: Wwwine.io and Wwwatch.io). The idea of
                    creating an NFT that would generate passive incomes really
                    matched his view of what NFTs should be. Therefore, he will
                    use his experience both in tech and crypto as well as his
                    network to make this happen for the knights of The Round
                    Table.
                  </p>
                </div>

              </div>
              <div className="flex flex-col sm:flex-row justify-center items-center sm:items-start text-center sm:text-left gap-2">
                <img
                  className="w-44 h-44 rounded"
                  src="/assets/img/nft/nft1.png"
                ></img>
                <div>
                  <div className="text-2xl text-primary-500 font-semibold mb-4">
                    Benoit{" "}
                    <div className="inline-flex items-center gap-4">
                      <a
                        href="https://twitter.com/benitothemoon"
                        target={"_blank"}
                        className="font-bold hover:text-primary-400 ease-in-out transition-colors duration-200"
                        rel="noreferrer"
                      >
                        (@Gerhun)
                      </a>
                      <a
                        href="https://twitter.com/benitothemoon"
                        rel="noreferrer"
                        title="Twitter"
                        className="hover:text-primary-400 ease-in-out transition-colors duration-200"
                        target={"_blank"}
                      >
                        <i>
                          <FontAwesomeIcon
                            className="w-5 h-5"
                            icon={faTwitter}
                          />
                        </i>
                      </a>
                    </div>

                  </div>
                  <p className="text-justify">
                    Recently graduated from a master's degree in computer
                    science and business management, Benoit started exploring
                    Elrond possibilities. He is fond of technology and is
                    looking forward to getting as many skills as he can. He is
                    currently working on building up his knowledge about Elrond
                    Smart Contracts. Which will be key for our system and reward
                    mechanism.
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
