import Container from "../components/_Layout/Container";
import Head from "next/head";
import React from "react";
import type { NextPage } from "next";
import Link from "next/link";
import { routes } from "../routes";
import CarouselCoverflow from "../components/_Layout/CarouselCoverflow";

const WhitepaperPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>The Round Table - Whitepaper</title>
        <meta
          name="description"
          content="The round table White lists Get white listed without pain, The Round Table NFT will help you get white listed for NFT mints and token IDOs. The time of spending hours hunting white lists has come to an end. Read More Passive incomes Earn passive incomes with your NFT Using different mechanisms, you will."
        />{" "}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-cream-light text-lg">
        <Container>
          <div className="py-16 text-black">
            <div className=" text-center md:text-left">
              <p className="italic text-primary-500">Whitepaper</p>
              <div className="text-3xl font-bold mb-12">
                <span className="text-primary-500">Understanding</span> the
                project
              </div>
            </div>
            <p>
              The Round Table is a project aiming to bring exclusive benefits to
              Elrond lovers. Holding The Round Table NFTs, you will be eligible
              to have access to white lists for token presales, NFT mints,
              real-life events and much more. Also, holding a The Round Table
              NFT will make you a member of the DAO and thus will give you
              passive incomes through different mechanisms. The project will
              also promote interactions and collaborations with other project to
              strengthen the bounds in the Elrond ecosystem.
            </p>
          </div>
          <div className="text-black mb-16">
            <div className=" text-center md:text-left">
              <div className="text-3xl font-bold mb-12">
                The Round Table <span className="text-primary-500">NFTs</span>
              </div>
            </div>
            <div className="">
              <ul className="list-disc list-inside mb-4">
                <li>Supply: 500</li>
                <li>Main benefits:</li>
              </ul>
              <img
                className="w-full max-w-4xl"
                src="/assets/img/whitepaper-nft.png"
              ></img>
            </div>
          </div>
        </Container>
        <img src="/assets/img/top_dark.png" />
        <div className="bg-cream">
          <Container>
            <div className="text-black mb-16 pt-16">
              <div className=" text-center md:text-left">
                <div className="text-3xl font-bold mb-12">
                  <span className="text-primary-500">Economy </span>model
                </div>
              </div>
              <p className="mb-6">
                The Round Table will offer the possibility to access exclusive
                benefits such as white lists for both NFT mints and token sales,
                special goodies or NFT/items with partners, access to special
                events, etc. Each time benefits are negotiated, 50% of them will
                be randomly distributed to NFT holders.
              </p>
              <p className="mb-6">
                Let’s take an example: if the team obtains 100 white lists for a
                given NFT project, 50 VIP NFT holders will be randomly given a
                white list, meaning that 10% of the holders will be white
                listed. However, to encourage the use of the white lists, we
                plan to include votes in the DAO to create short lists of VIP
                NFT holders being interested in the project for which the white
                lists were obtained. This way, the NFT project knows that people
                will actually mint their NFTs and on our side, we know that
                people who will receive these white lists will be interested in
                the project. We strongly want to avoid situations where people
                who are not interested in the project get a white list and where
                people who actually want to mint do not get one.
              </p>
              <p className="mb-6">
                Once the distribution to NFT holders is done, the 50% remaining
                items will be put for sale to everyone (meaning not only NFT
                holders). These items will be purchased using our native token
                $Graal. Note: since we want to delight our NFT holders, they
                will sort of get a discount if they want to buy the item since
                50% of the sales benefits will be redistributed to the VIP NFT
                holders.
              </p>
              <p className="mb-6">
                For example: imagine you can buy a white list for a token
                pre-sale at 100 $Graal, 100 slots are available for sale. If
                everything is sold out, it makes a total of 10 000 $Graal for
                the sale. 50% of which, will be redistributed to the VIP NFT
                holders. Thus, 5000 $Graal will be distributed to our 500 VIP
                NFT holders. This means that each VIP NFT holder will receive 10
                $Graal and thus will finally get that white list access 90
                $Graal instead of 100 $Graal.
              </p>
              <img
                className="w-full max-w-4xl"
                src="/assets/img/whitepaper-economy.png"
              ></img>
            </div>
            <div className="text-black pb-8">
              <div className=" text-center md:text-left">
                <div className="text-3xl font-bold mb-12">
                  <span className="text-primary-500">DAO </span>membership
                </div>
              </div>
              <p className="mb-6">
                Holding a The Round Table NFT will give you a voice in the DAO.
                This means that holders will be able to vote for the potential
                partnerships they want the team to work on, as well as
                participate in the decision being made for the project.
              </p>
              <p className="mb-6">
                Using the DAO votes, NFT holders will vote and thus indicate if
                they are interested in buying a token or minting a project. This
                way, we reduce the number of participants in the vote to only
                the holders interested in the projects. Of course, you might
                think that everybody will want to be white listed by default and
                that it wil bias the process. We thought about it. We have
                implemented a mechanism that will penalize people having
                obtained a white list and who did not buy the token or mint the
                NFT. These people will not have any possibility to get white
                listed for the next 3 projects offered by The Round Table. This
                will prevent holders who are not – really – interested in the
                project to “steal” a white list to someone else.
              </p>
              <p className="mb-6">
                In contrast, to thank our serial minters/buyers, we will get a
                list of all VIP NFT holders having minted NFTs or bought tokens
                of partners projects, and we will automatically provide a white
                list to these holders the next time they place a vote in the DAO
                saying they are interested in a project.
              </p>
              <p className="mb-6">
                Also, being part of the DAO will provide you with passive
                incomes coming from different sources:
              </p>
              <ul className="list-disc list-inside mb-4">
                <li className="mb-2">
                  First, 50% of the benefits (not the fees) of the
                  WL/goodies/event sales will be directly distributed to the NFT
                  holders.
                </li>
                <li className="mb-2">
                  Second, 20% of the treasury will be used to create an
                  investment bag to invest in different projects of the Elrond
                  ecosystem. The DAO votes will decide on which projects to
                  invest. From the benefits made, 50% will be redistributed to
                  the VIP NFT holders, the other 50% will be added to the bag of
                  investment. 60% of the treasury will be staked in EGLD staking
                  at around 12% APR and all the rewards will be injected back in
                  the investment bag to make it grow. This is also to secure a
                  large part of the treasury in the event of the failure of a
                  project in which we would have invested.
                </li>
                <li>
                  Third: 20% of the treasury will be used to stake JEX tokens on
                  the JEXChange. The rewards will all be redistributed to NFT
                  holders.
                </li>
              </ul>
              <img
                className="w-full max-w-4xl mt-8"
                src="/assets/img/whitepaper-dao.png"
              ></img>
            </div>
          </Container>
        </div>
        <img src="/assets/img/bottom_dark.png" />
        <div className="bg-cream-light">
          <Container>
            <div className="py-16 text-black">
              <div className=" text-center md:text-left">
                <div className="text-3xl font-bold mb-12">
                  <span className="text-primary-500">$Graal </span>
                  tokenomics
                </div>
              </div>
              <ul className="list-disc list-inside mb-4">
                <li className="mb-2">Total supply: 20,000,000 $Graal</li>
                <li className="mb-2">
                  Token repartition:
                  <ul className="pl-8 list-disc list-inside">
                    <li>Team: 10%</li>
                    <li>Treasury: 40%</li>
                    <li>Community: 40%</li>
                    <li>Marketing: 10%</li>
                  </ul>
                </li>
                <li>
                  Note: and airdrop of $Graal will be distributed to all 500 VIP
                  NFT holders. This will allow them to buy items for which they
                  were not selected during the drop for NFT holders.
                </li>
                <li>
                  Note bis: $Graal token IDO will take place on the JEXChange.
                </li>
              </ul>
            </div>
            <div className="pb-16 text-black">
              <div className=" text-center md:text-left">
                <div className="text-3xl font-bold mb-12">
                  <span className="text-primary-500">Roadmap </span>
                </div>
              </div>
              <img
                className="w-full max-w-4xl mt-8"
                src="/assets/img/roadmap.png"
              ></img>
            </div>
          </Container>
        </div>
        <img className="bg-black" src="/assets/img/bottom.png" />
      </div>
    </>
  );
};

export default WhitepaperPage;
