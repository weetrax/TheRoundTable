import * as React from "react";
import Container from "../Container";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faDiscord } from "@fortawesome/free-brands-svg-icons";

type FooterProps = {
  //
};

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="backdrop-filter backdrop-blur bg-opacity-70">
      <Container>
        <div className="py-12 text-center">
          <div>
            <p>
              &copy; {new Date().getFullYear()}{" "}
              <span className="font-bold text-primary-500">
                The Round Table{" "}
              </span>{" "}
              - An{" "}
              <a
                href="https://elrond.com/"
                target={"_blank"}
                rel="noreferrer"
                className="hover:text-primary-500 duration-200 transition-colors ease-in-out"
              >
                Elrond
              </a>{" "}
              Community App
            </p>
            <div className="flex gap-4 justify-center items-center mt-4">
              <a
                href="https://twitter.com/TheRound_Table_"
                rel="noreferrer"
                className="flex justify-center hover:text-primary-500 ease-in-out transition-colors duration-200"
                target={"_blank"}
              >
                <i>
                  <FontAwesomeIcon className="w-5 h-5" icon={faTwitter} />
                </i>
              </a>
              <a
                href="https://dsc.gg/TheRoundTable"
                rel="noreferrer"
                className="flex justify-center hover:text-primary-500 ease-in-out transition-colors duration-200"
                target={"_blank"}
              >
                <i>
                  <FontAwesomeIcon className="w-5 h-5" icon={faDiscord} />
                </i>
              </a>
            </div>
          </div>
          <div></div>
        </div>
      </Container>
    </footer>
  );
};

Footer.propTypes = {
  //
};

export default Footer;
