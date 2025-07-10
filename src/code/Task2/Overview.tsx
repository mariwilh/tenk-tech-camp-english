import React from "react";
import PieChart from "../../ignore/PieChart";
import { H1, InfoCard } from "@dnb/eufemia";
import BarChart from "../../ignore/BarChart";
import "../../ignore/styles.css";
import { account_medium, card_in_medium } from "@dnb/eufemia/icons";
import colorPicker from "../../ignore/Colors";
import {
  getAllTransactions,
  countCrossBorderTransactions,
  countTargetCountries,
  sumTransactions,
} from "../../ignore/codeDump";
import Provider from "@dnb/eufemia/shared/Provider";

export interface DashboardProps {
  setCurrentSubTab: Function;
}

/* Dashboard is a function that returns the code for the "Overview page". This can be found in the "Transactions" tab */
export default function Dashboard(props: DashboardProps) {
  const { setCurrentSubTab } = props;
  setCurrentSubTab("Dashboard");

  return (
    <Provider locale="nb-NO" NumberFormat={{ currency: "NOK" }}>
      <div className="DashboardTab">
        {/* TASK 2A: The title of the page is here */}
        <H1 style={{ fontSize: "small" }}>Dashboard</H1>
        <div className="chart-container">
          <div>
            <PieChart
              title={"Domestic vs. foreign transaksjoner"}
              data={pieChartData}
            />
          </div>

          <div>
            <BarChart
              title={"Transactions to different countries"}
              data={barChartData}
            />
          </div>
        </div>

        <div className="DashboardBottom">
          <InfoCard
            title="Amount of transactions"
            text={getAllTransactions().length}
            icon={card_in_medium}
            space="x-small"
          />
          <InfoCard
            title="Money transferred"
            text={sumTransactions()}
            icon={account_medium}
            space="x-small"
          />
        </div>
      </div>
    </Provider>
  );
}

/* TASK 2C: Add Russia two places */
const barChartData = {
  labels: ["Norway", "Sweden", "Denmark", "USA", "Spain", "Italy"],
  datasets: [
    {
      /* TASK 2B: Add "Amount" here */
      label: "?????",
      data: [
        countTargetCountries("Norway"),
        countTargetCountries("Sweden"),
        countTargetCountries("Denmark"),
        countTargetCountries("USA"),
        countTargetCountries("Spain"),
        countTargetCountries("Italy"),
      ],
      backgroundColor: colorPicker.SuccessGreen,
    },
  ],
};

const pieChartData = {
  labels: ["Domestic", "Foreign"],
  datasets: [
    {
      label: "Amount",
      data: countCrossBorderTransactions(),

      backgroundColor: [
        colorPicker.Indigo,
        colorPicker.Violet,
        colorPicker.SeaGreen,
        colorPicker.SuccessGreen,
        colorPicker.SummerGreen,
        colorPicker.MintGreen,
      ],

      hoverColor: [
        colorPicker.Indigo,
        colorPicker.Violet,
        colorPicker.SeaGreen,
        colorPicker.SuccessGreen,
        colorPicker.SummerGreen,
        colorPicker.MintGreen,
      ],
    },
  ],
};