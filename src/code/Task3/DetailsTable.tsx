import React from "react";
import Provider from "@dnb/eufemia/shared/Provider";
import { Table, Th, Tr, Td, NumberFormat } from "@dnb/eufemia";
import { Transaction } from "../../ignore/Models";

export type TransactionTableProps = {
  listOfTransactions: Transaction[];
};

/* TASK 3C: */
export function detectRiskCountry(country: String): String | undefined {

  if (country === "country" ){
    return "Unknown";
  } else {
    return "Unknown";
  }
}

/* TASK 3D */
function setColorForHighRisk(risk: String): any {
  return "black";
}

/* TransactionsTable returns the code that visualises the table of transactions between all customers
  Open the tab "Transactions" and click on "Details" to see these transactions. */
export const TransactionTable = (props: TransactionTableProps) => {
  const { listOfTransactions } = props;

  return (
    <Provider locale="nb-NO" NumberFormat={{ currency: "NOK" }}>
      <Table.ScrollView
        style={{
          maxHeight: "60rem",
        }}
      >
        {/* Change the look and content of the transaction table here! */}
        <Table sticky="css-position">
          <thead>
            <Tr>
              <Th>Sender's name</Th>
              <Th>Sender's country</Th>
              <Th>Recipient's name</Th>
              {/*TASK 3B: Add the subtitle here */}
              <Th>Amount</Th>
              <Th>Risk</Th>
            </Tr>
          </thead>
          <tbody>
            {listOfTransactions.map((transaction) => (
              <Tr key={transaction.id.toString()}>
                <Td>{transaction.from.name}</Td>
                <Td>{transaction.from.country}</Td>
                <Td>{transaction.to.name}</Td>
                {/*TASK 3B: Add the content here */}
                <Td>
                  <NumberFormat>{transaction.amount}</NumberFormat>
                </Td>
                <Td
                  style={{
                    color: setColorForHighRisk(
                      detectRiskCountry(transaction.to.country)
                    ),
                  }}
                >
                  {detectRiskCountry(transaction.to.country)}
                </Td>
              </Tr>
            ))}
          </tbody>
        </Table>
      </Table.ScrollView>
    </Provider>
  );
};
