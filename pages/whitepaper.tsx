import Container from '../components/_Layout/Container';
import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import { routes } from '../routes';
import type { NextPage } from "next";

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
      <div className="bg-cream-light text-lg text-justify">
        <Container>
          <div className="py-16 text-black">
            <div className="text-center md:text-left mb-12">
              <p className="italic text-primary-500">Whitepaper</p>
              <div className="text-3xl font-bold mb-2">
                <span className="text-primary-500">The story</span> of The Round Table
              </div>
              <Link href={routes.whitepaperFR}>
                <a className="inline-flex justify-center rounded bg-primary-500 px-4 py-2 text-sm font-medium text-white hover:bg-primary-400">
                  Go to French Whitepaper
                </a>
              </Link>
            </div>
            <p className="mb-6">
              This story takes place in Camelot where King Arthur is ruling his
              kingdom together with his knights of The Round Table. This project
              gives you the amazing opportunity to join the round table and
              become a knight. King Arthur wants to travel around the world to
              find the holy grail, the most important quest of his life. The
              king needs you, knight of the round table, to join him in this
              journey and maybe, find some treasures along the way.
            </p>
            <p className="mb-6">
              As a knight of the round table, you will be eligible to obtain
              rewards, get access to white lists for token presales, NFT mints,
              specials events and much more. As you all know, knights are the
              main advisors of the king and thus, will be able to have a sit at
              the royal councils in which many important decisions will be made.
            </p>
            <p className="mb-6">
              Finally, along the journey, King Arthur wants to make alliances in
              order to make the kingdom stronger and ready in the event of an
              attack, therefore, this project will aim to partner with other
              projects to strengthen the bounds within the Elrond ecosystem.
            </p>
            <p className="mb-6">
              The biggest aim of the Round Table, is to make profits and share
              them between all knights of the Round Table. You become a knight
              by holding an NFT from The Round Table. There are only 500 NFT
              available for you to take part to the Round Table.
            </p>
            <img className="w-full max-w-4xl" src="/assets/img/s1.png"></img>
          </div>
          <div className="text-black mb-16">
            <div className=" text-center md:text-left">
              <div className="text-3xl font-bold mb-12">
                <span className="text-primary-500">Where</span> do these profits
                come from?
              </div>
            </div>
            <div className="">
              <ul className="list-disc list-inside mb-4 flex flex-col gap-6">
                <li>
                  A first alliance will be made with JEXChange and 20% of the
                  treasury of Camelot will be used to buy and stake $JEX token.
                  All rewards will be distributed to the NFT holders.{" "}
                </li>
                <li>
                  The main source of income of the project is done through an
                  investment bag that represents 60% of the treasury. These 60%
                  will be invested in various projects from the Elrond
                  ecosystem. The projects will be chosen by a vote of the royal
                  council. This way, YOU, knights of the round table, are
                  empowered to choose where the money goes. 50% of the benefits
                  of these investments will go to the NFT holders, 35% will go
                  to the investment back to make it grow, 5% will go to the
                  team.
                </li>
                <li>
                  Finally, to secure a part of the treasury, 10% will be staked
                  on Maiar. All rewards will be used to increase the treasury.
                </li>
              </ul>
              <p>
                In addition, 10% of the amount collected during the mint will be
                used to remunerate the team and to cover operating costs
              </p>
              <img className="w-full max-w-4xl" src="/assets/img/s2.png"></img>
              <p>
                NFT Holders will be able to claim their rewards periodically
                once the amount becomes high enough.
              </p>
            </div>
          </div>
          <div className="text-black mb-16">
            <div className=" text-center md:text-left">
              <div className="text-3xl font-bold mb-12">
                The Round Table <span className="text-primary-500">NFT</span>
              </div>
            </div>
            <div className="mb-12">
              <p className="mb-6">
                Benefits and rewards will be split equally among the NFT
                holders. However, within the round table, His Majesty King
                Arthur will get 5X more rewards as he is the king. Also, King
                Arthur likes to have a very close advisor circle, these 9
                special knights will get 3X more rewards than the other knights.
              </p>
              <p className="mb-6">
                This means that the rewards will be split into 490 (500 – 10
                special NFTs) + 5 (5 parts for the King) + 9* 3 (9 times 3 parts
                for the special knights) = 522 equal parts.
              </p>
              <ul className="list-disc list-inside mb-4 flex flex-col gap-6">
                <li>King Arthur will get 5/522 of the rewards</li>
                <li>The special knights will get 3/522 of the rewards</li>
                <li>Regular knights will get 1/522 of the rewards</li>
              </ul>
              <p>
                Let’s say that you hold 3 regular knight NFTs, you will get 3
                shares, or 3/522 of the rewards.
              </p>
            </div>
            <div>
              <p className="mb-6">
                The mint price of each NFT will be decided in agreement with
                people being the most involved in the project. This, in order to
                determine the right balance between the entry price and the
                investment bag available. Obviously, the higher the price, the
                more we can invest and therefore, the faster the rewards will
                increase.
              </p>
              <p className="mb-6">
                Royalties for the reseale of the NFT will be set at 5% and will
                be entierely redistributed for our Holders !
              </p>
              <p className="mb-6">
                As a Round Table community, we will make sure to make the best
                decisions to make the treasury growth and thus rewards our
                holders.
              </p>
            </div>
          </div>
        </Container>
        <img src="/assets/img/top_dark.png" />
        <div className="bg-cream">
          <Container>
            <div className="text-black mb-16 pt-16">
              <div className=" text-center md:text-left">
                <div className="text-3xl font-bold mb-12">
                  <span className="text-primary-500">The Royal </span>Council
                </div>
              </div>
              <p className="mb-6">
                As a Knight of the Round Table, you will be sitting at the Royal
                Council. You will be empowered to vote on a large number of
                decisions. For example, when a new project starts on the Elrond
                blockchain, whether it's an NFT project or a token-related
                project, holders will be able to vote to determine whether or
                not we should invest in it. If so, we will invest a maximum of
                1/20th of the treasury.
              </p>
              <p className="mb-6">
                Despite you can hold several NFTs, you will only get one vote
                per holder address as we do not want whales to influence too
                much the direction of the project.
              </p>
              <p className="mb-6">
                The council will also have a voice about taking profits for the
                different projects in which we invested. However, these
                decisions might require a certain speed of execution depending
                on market conditions. In this case, the team will manage these
                quick moves to avoid losses.
              </p>
              <p className="mb-6">
                Holders will also be able to propose projects to invest in.
                These projects will be reviewed by the team, and submitted to
                the vote of the royal council if they are considered
                interesting.
              </p>
            </div>
            <div className="text-black pb-8">
              <div className=" text-center md:text-left">
                <div className="text-3xl font-bold mb-12">
                  Others <span className="text-primary-500">benefits</span>
                </div>
              </div>
              <p className="mb-6">
                In addition to the rewards from the investments, you will have
                access to giveaways on our discord. As a project, we will obtain
                WL for NFT or token sales. These WL will be partly used by The
                Round Table to buy these NFTs or tokens, at a cheaper price. The
                other part will be offered to our NFT holders. We have the
                ambition to establish partnerships with other projects on Elrond
                and, why not, on other blockchains. We will of course
                participate in the Elrond launchpads. For these launchpads,
                profits made will be redistributed to the holders.
              </p>
            </div>
          </Container>
        </div>
        <img src="/assets/img/bottom_dark.png" />
        <div className="bg-cream-light">
          <Container>
            <div className="py-16 text-black">
              <div className=" text-center md:text-left">
                <div className="text-3xl font-bold mb-12">
                  <span className="text-primary-500">Conclusion</span>
                </div>
              </div>
              <p>
                The Round Table has a clear and simple vision. We do not need to
                create a very complicated mechanics. The project is all about
                investing as a community and providing recurring rewards. We
                also do not need a roadmap that promises unachievable things.
                Everything is there, ready. The project will evolve according to
                the evolution of its budget and in line with the desires of the
                holders. We do not promise anything unattainable, but we have no
                limits. Our motto: Community, Money & Fun !
              </p>
            </div>
          </Container>
        </div>
        <img className="bg-black" src="/assets/img/bottom.png" />
      </div>
    </>
  );
};

export default WhitepaperPage;
