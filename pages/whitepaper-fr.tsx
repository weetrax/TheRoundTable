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
                                <span className="text-primary-500">L'histoire</span> de The Round Table
                            </div>
                            <Link href={routes.whitepaper}>
                                <a className="inline-flex justify-center rounded bg-primary-500 px-4 py-2 text-sm font-medium text-white hover:bg-primary-400">
                                    Go to English Whitepaper
                                </a>
                            </Link>
                        </div>
                        <p className="mb-6">
                            Cette histoire se déroule à Camelot où le roi Arthur dirige son
                            royaume avec ses chevaliers de la Table ronde. Ce projet vous donne
                            l'incroyable opportunité de rejoindre la Table Ronde et de devenir
                            chevalier. Le roi Arthur veut parcourir le monde pour trouver le
                            Saint Graal, la quête la plus importante de sa vie. Le roi a besoin
                            de vous, chevaliers de la Table Ronde, pour vous joindre à lui dans cette aventure et peut-être trouver des trésors en cours de route.
                        </p>
                        <p className="mb-6">
                            En tant que chevalier de la Table Ronde, vous pourrez obtenir des
                            récompenses, accéder à des WL pour des IDO, des mints NFT, des événements spéciaux et bien plus
                            encore. Comme vous le savez tous, les chevaliers sont les
                            principaux conseillers du roi et pourront donc siéger au conseil
                            royal au cours duquel de nombreuses décisions importantes seront
                            prises.
                        </p>
                        <p className="mb-6">
                            Enfin, tout au long du voyage, le roi Arthur souhaite nouer des
                            alliances afin de rendre le royaume plus fort et prêt en cas
                            d'attaque. Par conséquent, ce projet visera à s'associer à d'autres
                            projets pour renforcer les liens au sein de l'écosystème Elrond.
                        </p>
                        <p className="mb-6">
                            Le plus grand objectif de The Round Table est de faire des profits
                            et de les partager entre tous les chevaliers de la Table Ronde.
                            Vous devenez un chevalier en possédant un NFT The Round Table. Il
                            n'y a que 500 NFT disponibles pour participer à la Table Ronde.
                        </p>
                        <img className="w-full max-w-4xl" src="/assets/img/s1.png"></img>
                    </div>
                    <div className="text-black mb-16">
                        <div className=" text-center md:text-left">
                            <div className="text-3xl font-bold mb-12">
                                <span className="text-primary-500">D'où</span> viennent ces bénéfices?
                            </div>
                        </div>
                        <div className="">
                            <ul className="list-disc list-inside mb-4 flex flex-col gap-6">
                                <li>
                                    Une première alliance sera faite avec JEXChange et 20% de la
                                    trésorerie de Camelot sera utilisée pour acheter et stacker le token
                                    $JEX. Toutes les récompenses seront redistribuées aux détenteurs de
                                    NFT.{" "}
                                </li>
                                <li>
                                    La principale source de revenus du projet se fait à travers un bag
                                    d'investissement qui représente 60% de la trésorerie. Ces 60%
                                    seront investis dans divers projets de l'écosystème Elrond. Les
                                    projets seront choisis par un vote du conseil royal. De cette
                                    façon, VOUS, chevaliers de la table ronde, avez le pouvoir de
                                    choisir où va l'argent. 50% des bénéfices de ces investissements
                                    iront aux détenteurs de NFT, 35% retourneront dans le bag d’investissment pour le
                                    faire grandir, 5% iront à l'équipe.
                                </li>
                                <li>
                                    Enfin, pour sécuriser une partie de la trésorerie, 10% seront stackés sur
                                    Maiar. Toutes les récompenses seront utilisées pour augmenter la
                                    trésorerie.
                                </li>
                            </ul>
                            <p>
                                De plus, 10% du montant collecté lors du mint servira à
                                rémunérer l'équipe et à couvrir les frais de fonctionnement.
                            </p>
                            <img className="w-full max-w-4xl" src="/assets/img/s2.png"></img>
                            <p>
                                Les détenteurs de NFT pourront réclamer leurs récompenses
                                périodiquement une fois que le montant sera suffisamment élevé.
                            </p>
                        </div>
                    </div>
                    <div className="text-black mb-16">
                        <div className=" text-center md:text-left">
                            <div className="text-3xl font-bold mb-12">
                                <span className="text-primary-500">Les NFT</span> The Round Table
                            </div>
                        </div>
                        <div className="mb-12">
                            <p className="mb-6">
                                Les avantages et les récompenses seront répartis équitablement entre
                                les détenteurs de NFT. Cependant, au sein de la Table Ronde, Sa
                                Majesté le roi Arthur obtiendra 5 fois plus de récompenses car il
                                est le roi. De plus, le roi Arthur aime avoir un cercle de
                                conseillers très proches, et ces 9 chevaliers spéciaux obtiendront 3X
                                plus de récompenses que les autres chevaliers.
                            </p>
                            <p className="mb-6">
                                Cela signifie que les récompenses seront divisées en 490 (500 - 10
                                NFT spéciaux) + 5 (5 parts pour le Roi) + 9* 3 (9 fois 3 parts pour
                                les chevaliers spéciaux) = 522 parts égales.
                            </p>
                            <ul className="list-disc list-inside mb-4 flex flex-col gap-6">
                                <li>Le roi Arthur recevra 5/522 des récompenses</li>
                                <li>Les chevaliers spéciaux recevront 3/522 des récompenses</li>
                                <li>Les chevaliers normaux recevront 1/522 des récompenses</li>
                            </ul>
                            <p>
                                Imaginons que vous détenez 3 NFT de chevaliers « normaux », vous obtiendrez 3
                                parts, soit 3/522 des récompenses.
                            </p>
                        </div>
                        <div>
                            <p className="mb-6">
                                Le prix du mint de chaque NFT sera décidé en accord avec les personnes
                                les plus impliquées dans le projet. Ceci, afin de déterminer le
                                juste équilibre entre le prix d'entrée et le bag d'investissement
                                dont nous disposerons. Évidemment, plus le prix est élevé, plus nous pouvons
                                investir et donc, plus les récompenses augmenteront rapidement.
                            </p>
                            <p className="mb-6">
                                Les royalties pour la revente des NFT seront fixés à 5% et seront
                                entièrement redistribués aux holders !
                            </p>
                            <p className="mb-6">
                                En tant que communauté de la Table Ronde, nous nous assurerons de prendre
                                les meilleures décisions pour faire croître la trésorerie et ainsi
                                récompenser nos holders.
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
                                    Le Conseil <span className="text-primary-500">Royal</span>
                                </div>
                            </div>
                            <p className="mb-6">
                                En tant que Chevalier de la Table Ronde, vous siégerez au Conseil
                                Royal. Vous serez habilité à voter sur un grand nombre de
                                décisions. Par exemple, lorsqu'un nouveau projet démarre sur la
                                blockchain Elrond, qu'il s'agisse d'un projet NFT ou d'un projet lié
                                a un token, les détenteurs pourront voter pour déterminer si nous
                                devons ou non y investir. Si c'est le cas, nous investirons au
                                maximum 1/20e de la trésorerie.
                            </p>
                            <p className="mb-6">
                                Bien que vous puissiez détenir plusieurs NFT, vous n'obtiendrez
                                qu'un seul vote par adresse car nous ne voulons pas que
                                les baleines influencent trop la direction du projet.
                            </p>
                            <p className="mb-6">
                                Le conseil aura également une voix sur la prise de bénéfices pour
                                les différents projets dans lesquels nous avons investi. Cependant,
                                ces décisions peuvent nécessiter une certaine rapidité d'exécution
                                en fonction des conditions de marché. Dans ce cas, l'équipe gérera
                                ces mouvements rapides pour éviter les manques à gagner.
                            </p>
                            <p className="mb-6">
                                Les holders pourront également proposer des projets dans lesquels
                                investir. Ces projets seront examinés par l'équipe, et soumis au
                                vote du conseil royal s'ils sont jugés intéressants.
                            </p>
                        </div>
                        <div className="text-black pb-8">
                            <div className=" text-center md:text-left">
                                <div className="text-3xl font-bold mb-12">
                                    Autres <span className="text-primary-500">avantages</span>
                                </div>
                            </div>
                            <p className="mb-6">
                                En plus des récompenses des investissements, vous aurez accès à des
                                cadeaux sur notre discord. En tant que projet, nous obtiendrons des
                                WL pour les ventes de NFT ou de tokens. Ces WL seront en partie
                                utilisées par The Round Table pour acheter ces NFT ou tokens, à un
                                prix moins cher. L'autre partie sera offerte à nos détenteurs de
                                NFT. Nous avons l'ambition d'établir des partenariats avec d'autres
                                projets sur Elrond et, pourquoi pas, sur d'autres blockchains. Nous
                                participerons bien sûr aux launchpads d'Elrond. Pour ces launchpads, les bénéfices réalisés seront redistribués aux holders.
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
                                The Round Table a une vision claire et simple. Nous n'avons pas
                                besoin de créer une mécanique très compliquée. Le projet consiste à
                                investir en tant que communauté et à offrir des récompenses
                                récurrentes. Nous n'avons pas non plus besoin d'une feuille de
                                route qui promet des choses irréalisables. Tout est là, prêt. Le
                                projet évoluera en fonction de l'évolution de son budget et en
                                adéquation avec les envies des holders. Nous ne promettons rien
                                d'inatteignable, mais nous n'avons aucune limite. Notre devise :
                                Communauté, Argent {"&"} Fun !
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
