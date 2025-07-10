import React from "react";
import girl_coding from "../../ignore/girl_coding.jpg";
import { Section, H1, H2, P, InfoCard } from "@dnb/eufemia";
import "../../ignore/styles.css";

export interface WelcomeProps {
  setCurrentTab: Function;
}

export default function Welcome(props: WelcomeProps) {
  const { setCurrentTab } = props;
  setCurrentTab("Welcome");
  return (
    <Section spacing="small" left right="0.25" style_type="white">
      <div className="WelcomeTab">
        {/* INTRO TASK A: This is the title of the page :D */}
        <H1 style={{ margin: 20, color: "black" }}>Welcome to the DNB workshop!</H1>
        {/* INTO TASK C: Add the subtitle here! */}
        <Section
          style_type="sea-green"
          style={{
            padding: "2rem",
            minWidth: "40rem",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            columnGap: "1rem",
          }}
        >
          <img src={girl_coding} alt="GirlCoding" height="250" />
          <P
            style={{
              color: "white",
              fontSize: "large",
            }}
          >
            This is a website that contains an overview of all transactions in DNB.
            We are going to use it to find the person that has transferred money to Russia. 
            <br />
            <br />
            To avoid contributing to the war effort in Russia, the government has put in place 
            sanctions that halt money transfers to specific people and companies in Russia.
            <br />
            <br />
            For the sake of simplicity, we will pretend that all transactions to Russia are illegal, 
            even though this is not true.
            <br />
            <br />
            The goal of todays workshop is to find a person that has transferred money to Russia and 
            report them to the police using our report feature in the top right. But before we do that, 
            we will get used to coding with some introductory tasks!
          </P>
        </Section>
        <br />
        <InfoCard
          style={{ fontSize: "large", bottom: "0px" }}
          text="Got any questions or need help? Just ask us!"
        ></InfoCard>
      </div>
    </Section>
  );
}
