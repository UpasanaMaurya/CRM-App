import Chart from "chart.js/auto";
import {
  red,
  green,
  blue,
  pink,
  yellow,
  cyan,
  brown,
} from "@mui/material/colors";
import { Doughnut } from "react-chartjs-2";
import Dropdown from "../Dropdown";
import { useState } from "react";
import styled from "styled-components";
const SelectOwner = styled.div`
  width: 200px;
  position: absolute;
  right: 210px;
  margin-right: 40px;
`;
const users = [
  "@upmaurya",
  "@trnaidu",
  "@gyprakash",
  "@maurya",
  "@askumar",
  "@vimokashi",
];

// const labels = [];
// const transformData = function (data = []) {
//   const rowData = data.tableData || [];
//   const map = new Map([]);

//   // adding
//   rowData.forEach((row) => {
//     if (map.has(row.owner)) {
//       // owner is present
//       map.set(row.owner, map.get(row.owner) + 1);
//     } else {
//       // owner is not present
//       map.set(row.owner, 1);
//     }
//   });

//   return labels.map((owner) => map.get(owner));
// };

const filterData = function (data = [], owner) {
  const rowData = data.tableData || [];
  return rowData
    .filter((row) => row.owner === owner)
    .map((row) => ({ labels: row.taskId, data: row.loggedHours }));
};
export const AreaChart = function ({ data }) {
  const [owner, setOwner] = useState(users[0]);
  const filteredData = filterData(data, owner) || [{ labels: [], data: [] }];
  return (
    <div>
      <SelectOwner>
        <Dropdown
          items={users}
          label="Owners"
          handler={setOwner}
          value={owner}
        />
      </SelectOwner>
      <Doughnut
        datasetIdKey="id"
        data={{
          labels: filteredData.map((item) => item.labels),
          datasets: [
            {
              label: "Task owned by Owners",
              data: filteredData.map((item) =>
                Number(item.data.replace("h", " "))
              ),
              borderColor: [
                red[400],
                green[400],
                yellow[400],
                blue[400],
                pink[400],
                cyan[400],
              ],
              backgroundColor: [
                `${red[400]}55`,
                `${green[400]}55`,
                `${yellow[400]}55`,
                `${blue[400]}55`,
                `${pink[400]}55`,
                `${cyan[400]}55`,
              ],
              // borderWidth: 1,
              // borderRadius: 5,
              // borderSkipped: false,
              // barThickness: 40,
              //fill: true,
            },
          ],
        }}
        // options={{
        //   scales: {
        //     yAxes: [
        //       {
        //         ticks: {
        //           beginAtZero: true,
        //         },
        //       },
        //     ],
        //   },
        // }}
      />
    </div>
  );
};
