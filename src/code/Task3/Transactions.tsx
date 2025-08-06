import React from "react";
import { Dropdown, H1, P, Input, Section } from "@dnb/eufemia";
import { TransactionTable } from "./DetailsTable";
import { filterTable } from "../../ignore/codeDump";

export enum Parameter {
  FROM_NAME = "Sender's name",
  FROM_COUNTRY = "Sender's country",
  TO_NAME = "Recipient's name",
  TO_COUNTRY = "Recipient's country",
  AMOUNT = "Amount",
  RISK = "Risk",
}

export interface TransactionsProps {
  setCurrentSubTab: Function;
}

/* Transactions returns the code that visualises the details page. 
Go to the tab "Transactions" and "Details" to see this page. */

export default function Transactions(props: TransactionsProps) {
  const { setCurrentSubTab } = props;
  setCurrentSubTab("Details");

  const [inputText, setInputText] = React.useState("");
  const handleInputText = (event) => {
    setInputText(event.target.value);
  };
  const [inputParameter, setInputParameter] = React.useState(undefined);

  return (
    <Section spacing="small" left right style_type="white">
      <div className="TransactionsTab">
        <H1>Overview over all transactions in DNB</H1>
        {/* TASK 3A: Add a paragraph here! */}
        <Section style_type="white">
          <Section spacing>
            <Dropdown
              data={[
                Parameter.FROM_NAME,
                Parameter.FROM_COUNTRY,
                Parameter.TO_NAME,
                Parameter.AMOUNT,
                Parameter.RISK,
              ]}
              label="Parameter to filter on:"
              title="Choose parameter"
              on_change={({ data }) => setInputParameter(data)}
            />
            <Input
              space
              type="text"
              onChange={handleInputText}
              value={inputText}
              placeholder="Parameter"
            />
          </Section>{" "}
          <TransactionTable
            listOfTransactions={filterTable(inputParameter, inputText)}
          />
        </Section>
      </div>
    </Section>
  );
}
