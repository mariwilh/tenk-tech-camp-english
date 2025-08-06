import React, { useEffect, useState } from "react";
import AccountTable from "../Extra/AccountTable";
import { customer } from "../../data/customer";
import unknown from "./ProfilePictures/unknown.png";
import AnnikaMomrak from "./ProfilePictures/AnnikaMomrak.png";
import AstridS from "./ProfilePictures/AstridS.png";
import BTS from "./ProfilePictures/BTS.png";
import EmmaWatson from "./ProfilePictures/EmmaWatson.png";
import GirlInRed from "./ProfilePictures/GirlInRed.png";
import HeleneMoo from "./ProfilePictures/HeleneMoo.png";
import IngridEngen from "./ProfilePictures/IngridEngen.png";
import JennyHuse from "./ProfilePictures/JennyHuse.png";
import Marstein from "./ProfilePictures/Marstein.png";
import MillieBobbyBrown from "./ProfilePictures/MillieBobbyBrown.png";
import TaylorSwift from "./ProfilePictures/TaylorSwift.png";
import Zendaya from "./ProfilePictures/Zendaya.png";
import { H1, H2, Img, Section } from "@dnb/eufemia";
import "../../ignore/styles.css";
import AccountPage from "../../ignore/AccountPage";

export interface CustomerPageProps {
  setCurrentTab: Function;
}

/* CustomerPage is a function that returns the code on the "My profile" page */
export default function CustomerPage(props: CustomerPageProps) {
  const { setCurrentTab } = props;
  setCurrentTab("MyProfile");
  const [accountClicked, setAccountClicked] = useState("Customer");

  return (
    <Section spacing="small" left right style_type="white">
      <div className="CustomerTab">
        {accountClicked === "Customer" && (
          <>
            {/* TASK 1A: Edit this title */}
            <H1>Welcome unknown!</H1>
            <Img
              /* TASK 1B: You can edit the profile picture here */
              src={unknown}
              alt="User Picture"
              width="250rem"
              height="250rem"
              style={{ borderRadius: "50%" }}
              bottom
              top
            />
            <Section style_type="lavender" spacing>
              <H2 bottom>Accounts</H2>
              <AccountTable
                accountList={customer.accounts}
                setAccountClicked={setAccountClicked}
              />
            </Section>
          </>
        )}

        {accountClicked !== "Customer" && (
          <>
            <AccountPage
              account={customer.accounts.find(
                (account) =>
                  account.name === accountClicked ||
                  account.number === accountClicked
              )}
              setAccountClicked={setAccountClicked}
            />
          </>
        )}
      </div>
    </Section>
  );
}
