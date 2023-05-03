const express = require("express");
//const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const port = 4000;
const dataSet = {
  UpasanaMaurya: {
    isAdmin: true,
    password: "Gudiya123",
    isLoggedIn: false,
  },
  test: {
    isAdmin: false,
    password: "123456",
    isLoggedIn: false,
  },
};
let lastTaskIdCached = null;

let tableData = [
  {
    taskId: 6361,
    taskDesc: "Create an Admin Panel",
    owner: "@upmaurya",
    creater: "@upmaurya",
    status: 0,
    loggedHours: "2h",
    action: 1,
  },
  {
    taskDesc: "Learn JavaScript",
    owner: "@trnaidu",
    creater: "@askumar",
    status: 0,
    action: 1,
    taskId: 1348,
    loggedHours: "23h",
  },
  {
    taskDesc: "Learn Rootz JS",
    owner: "@maurya",
    creater: "@@maurya",
    status: 0,
    action: 1,
    taskId: 6162,
    loggedHours: "17h",
  },
  {
    taskDesc: "Learn Redux Js",
    owner: "@gyprakash",
    creater: "@askumar",
    status: 0,
    action: 1,
    taskId: 1346,
    loggedHours: "19h",
  },
  {
    taskDesc: "Learn React JS ",
    owner: "@vimokashi",
    creater: "@trnaidu",
    status: 0,
    action: 1,
    taskId: 1345,
    loggedHours: "24h",
  },
  {
    taskDesc: "Learn HTML - Part 2",
    owner: "@askumar",
    creater: "@upasana",
    status: 0,
    actions: 1,
    taskId: 1344,
    loggedHours: "9h",
  },
  {
    taskDesc: "Learn CSS",
    owner: "@vimokashi",
    creater: "@gyprakash",
    status: 0,
    actions: 1,
    taskId: 1343,
    loggedHours: "12h",
  },
  {
    taskDesc: "Learn HTML",
    owner: "@gyprakash",
    creater: "@vimokashi",
    status: 0,
    action: 1,
    taskId: 1342,
    loggedHours: "12h",
  },
];

function getStats() {
  return {
    backlog: tableData.filter((x) => x.status === 0).length,
    inProgress: tableData.filter((x) => x.status === 1).length,
    completed: tableData.filter((x) => x.status === 2).length,
    closed: tableData.filter((x) => x.status === 3).length,
  };
}
//app.use(express.json());
app.use(express.json(), express.urlencoded(), cors());

app.get("/getTableData", (req, res) => {
  res.send({ tableData, isError: false, statData: getStats() });
});
app.post("/updateDataToTable", (req, res) => {
  const row = req.body || {};
  //const userName = req.body.userName || "";
  //const isAdmin = dataSet[userName]?.isAdmin || false;
  const tableDataUpdated = [...tableData];
  // delete the row
  if (
    row.taskDesc === "" &&
    row.owner === "" &&
    row.creator === "" &&
    row.status === "4" &&
    row.loggedHours === ""
  ) {
    const allRowsExpectToBeDeleted = tableDataUpdated.filter(
      (x) => x.taskId !== row?.taskId
    );
    tableData = [...allRowsExpectToBeDeleted];
    res.send({ tableData, isError: false, statData: getStats() });
    return;
  }

  const rowToBeUpdated = tableDataUpdated.find((x) => x.taskId === row?.taskId);
  rowToBeUpdated.taskId = row.taskId;
  rowToBeUpdated.taskDesc = row.taskDesc;
  rowToBeUpdated.owner = row.owner;
  rowToBeUpdated.creater = row.creater;
  rowToBeUpdated.status = row.status;
  rowToBeUpdated.loggedHours = row.loggedHours;
  rowToBeUpdated.action = row.status < 3 ? Number(row.status) + 1 : row.action;

  tableData = [...tableData];
  res.send({ tableData, isError: false, statData: getStats() });
});
app.post("/addDataToTable", (req, res) => {
  const newRow = req.body || {};
  const newTaskId =
    lastTaskIdCached ||
    tableData.sort((a, b) => b.taskId - a.taskId)[0].taskId + 1;
  lastTaskIdCached = newTaskId + 1;
  newRow.status = 0;
  newRow.action = 1;
  newRow.taskId = newTaskId;
  newRow.loggedHours = "5h";

  tableData = [newRow, ...tableData];
  res.send({ tableData, isError: false, statData: getStats() });
});
app.post("/authenticateUser", (req, res) => {
  const req_UserName = req.body.userName || "";
  const req_Password = req.body.password || "";

  if (dataSet.hasOwnProperty(req_UserName)) {
    //Cheack for the User password
    if (dataSet[req_UserName].password === req_Password) {
      dataSet[req_UserName].isLoggedIn = true;
      res.send({
        isAuthenticated: true,
        message: "Ok",
        isAdmin: dataSet[req_UserName].isAdmin,
      });
    } else
      res.send({
        isAdmin: false,
        isAuthenticated: false,
        message: "Password is Not Match",
      });
  } else
    res.send({
      isAdmin: false,
      isAuthenticated: false,
      message: "the username does not exist",
    });
});
app.post("/registerUser", (req, res) => {
  const req_UserName = req.body.userName || "";
  const req_Password = req.body.password || "";

  // extending the dataSet
  dataSet[req_UserName] = {
    password: req_Password,
  };
  console.log(dataSet);
  res.send({ isRegistered: true });
});

app.post("/checkUserExists", (req, res) => {
  const req_UserName = req.body.userName || "";

  if (dataSet.hasOwnProperty(req_UserName)) {
    res.send({ isExistingUser: true });
  } else res.send({ isExistingUser: false });
});
app.get("/checkSession", (req, res) => {
  const req_UserName = req.query.usrn || "";
  if ((!!req_UserName && dataSet[req_UserName].isLoggedIn) === true) {
    res.send({ isAuthenticated: true, message: "Ok" });
  } else {
    res.send({ isAuthenticated: true, message: "Ok", redirectUrl: "/login" });
  }
});
app.listen(port, () => {
  console.log(`Server started ${port}`);
});
