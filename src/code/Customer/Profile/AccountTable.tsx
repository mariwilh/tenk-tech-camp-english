import React from "react";
import Provider from "@dnb/eufemia/shared/Provider";
import { Account } from "../../../ignore/Models";
import { NumberFormat, Table, Td, Th, Tr } from "@dnb/eufemia";
import { findBalance } from "../Account/AccountPage";

export interface AccountTableProps {
  accountList: Account[];
  setAccountClicked: Function;
}

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
              <Th>Navn</Th>
              <Th>Kontonummer</Th>
              <Th>Saldo</Th>
            </Tr>
          </thead>
          <tbody>
            {accountList.map((account) => (
              <Tr key={account.id}>
                <Td>
                    {getTransactionLink(account.name)}
                </Td>
                <Td>
                    {/** OPPGAVE Y*/}
                  <NumberFormat ban>{account.accountNumber}</NumberFormat>
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
    {/** En funksjon som returnerer ett knappelement med link til transaksjonslisten til en konto.
     Tar kontoattributtet som skal være klikkbart som argument */}
    function getTransactionLink(attribute) {
        return  (<button
            className="dnb-anchor"
            onClick={() => {
                setAccountClicked(attribute);
            }}
        >
            {attribute}
        </button>);
    }
}

