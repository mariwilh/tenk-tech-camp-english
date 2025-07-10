import React from "react";
import Provider from "@dnb/eufemia/shared/Provider";
import { Account } from "../../ignore/Models";
import { NumberFormat, Table, Td, Th, Tr } from "@dnb/eufemia";
import { findBalance } from "../../ignore/AccountPage";

export interface AccountTableProps {
  accountList: Account[] /* The list over all your accounts on "My profile" */;
  setAccountClicked: Function /* A function that checks if the account has been clicked earlier */;
}
/* AccountTable is a function that returns the code for the account table underneath your profile picture. */
export default function AccountTable(props: AccountTableProps) {
  const { accountList, setAccountClicked } = props;

  return (
    <Provider locale="nb-NO" NumberFormat={{ currency: "NOK" }}>
      <Table.ScrollView
        style={{
          maxHeight: "50rem",
          width: "40rem",
        }}
      >
        <Table sticky="css-position">
          <thead>
            <Tr>
              <Th>Name</Th>
              <Th>Account number</Th>
              <Th>Balance</Th>
            </Tr>
          </thead>
          <tbody>
            {accountList.map((account) => (
              <Tr key={account.id}>
                <Td>{getTransactionLink(account.name)}</Td>
                <Td>
                  <NumberFormat ban>{account.number}</NumberFormat>
                </Td>
                <Td>
                  <NumberFormat currency>
                    {findBalance(account.transactions)}
                  </NumberFormat>
                </Td>
              </Tr>
            ))}
          </tbody>
        </Table>
      </Table.ScrollView>
    </Provider>
  );
  
  /* 
    "getTransactionLink" is a function that returns a button element with a link to the transactionslist of an account.
    As an argument (the value inside the parenthesis), it takes the account attribute you want to be clickable 
  */
  function getTransactionLink(accountIdentifier: String) {
    return (
      <button
        className="dnb-anchor"
        onClick={() => {
          setAccountClicked(accountIdentifier);
        }}
      >
        {accountIdentifier}
      </button>
    );
  }
}
