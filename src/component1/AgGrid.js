import React from "react";
import { Button, IconButton } from "@mui/material";
import { Edit2, X } from "react-feather";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import styled from "styled-components";

const GridContainer = styled.div`
  width: 93vw;
  height: 300px;
  //min-width: 500px;
  & .ag-header {
    color: white;
    background: blue;
    border-bottom: solid 1px #cca1da;
  }
  & .ag-cell {
    color: white;
    background: #0000fc;
  }
  & .ag-row {
    color: #9d88b6;
    border-bottom: solid 1px #493650;
  }
  & .ag-header-cell {
    color: white;
    background: darkblue;
  }
  & .ag-root-wrapper {
    border: 2px solid wheat;
  }
  & .ag-center-cols-viewport {
    background: darkblue;
  }
`;
// const IconButton = styled.div`
//   color: darkblue;
//   margin-left: 4px;
// `;

const defaultColDef = {
  sortable: true,
};

const statusMap = {
  0: "Backlog",
  1: "In progress",
  2: "Completed",
  3: "Closed",
  4: "closed",
};

const Grid = styled(AgGridReact)``;
const AgGrid = ({ tableData, isError, onUpdate, setIsEdit }) => {
  //debugger;
  const cellRendererFn = function (params) {
    if (params.value === "content") {
      return <span contentEditable>{params.value}</span>;
    }
    return params.value;
  };
  const cellStatusRendererFn = function (params) {
    let color = "yellow";
    switch (params.value) {
      case 0: {
        color = "#fa021b";
        break;
      }
      case 1: {
        color = "#f5d902";
        break;
      }
      case 2: {
        color = "#00ff00";
        break;
      }
      case 3: {
        color = "brown";
        break;
      }
      default: {
        color = "yellowgreen";
      }
    }
    return (
      <span style={{ color, fontWeight: "bold" }}>
        {statusMap[params.value]}
      </span>
    );
  };
  const cellUserRendererFn = function (params) {
    //debugger
    return (
      <a style={{ color: "lightblue" }} href="#">
        {params.value}
      </a>
    );
  };
  const onChangeStatus = (params) => {
    let row = params.node.data;
    row.status = params.node.data.action;
    row.action = Number(params.node.data.action) + 1;
    onUpdate(row);
  };
  const onEdit = (params) => {
    setIsEdit({ isEdit: true, rowData: params.node.data });
  };
  const deleteRow = function (params) {
    let row = params.node.data;
    onUpdate({
      ...row,
      taskDesc: "",
      owner: "",
      creator: "",
      status: "4",
      loggedHours: "",
    });
  };
  const cellActionRendererFn = function (params) {
    return (
      <span style={{ display: "flex", justifyContent: "space-between" }}>
        <Button
          sx={{ color: "blue", background: "white", marginRight: "3px" }}
          size="small"
          variant={"outlined"}
          onClick={() => onChangeStatus(params)}
          disabled={params.value === 4}
        >
          {statusMap[params.value]}
        </Button>
        <span>
          <IconButton
            sx={{ marginLeft: "4px", color: "#e8eaf6" }}
            size="small"
            onClick={() => deleteRow(params)}
          >
            <X />
          </IconButton>
          <IconButton
            sx={{ marginLeft: "4px", color: "#e8eaf6" }}
            size="small"
            onClick={() => onEdit(params)}
          >
            <Edit2 />
          </IconButton>
        </span>
        {/* {params.value == 4 ? (
          <IconButton
            sx={{ marginLeft: "4px", color: "#e8eaf6" }}
            size="small"
            onClick={() => deleteRow(params)}
          >
            <X />
          </IconButton>
        ) : (
          <IconButton
            sx={{ marginLeft: "4px", color: "#e8eaf6" }}
            size="small"
            onClick={() => onEdit(params)}
          >
            <Edit2 />
          </IconButton>
        )} */}
      </span>
    );
  };

  const columnDefs = [
    {
      field: "taskId",
      width: 112,
      cellRenderer: cellRendererFn,
    },
    {
      field: "taskDesc",
      width: 180,
      cellRenderer: cellRendererFn,
    },
    {
      field: "owner",
      width: 160,
      cellRenderer: cellUserRendererFn,
    },
    {
      field: "creater",
      width: 180,
      cellRenderer: cellUserRendererFn,
    },
    {
      field: "status",
      width: 180,
      cellRenderer: cellStatusRendererFn,
    },
    {
      field: "loggedHours",
      width: 140,
      cellRenderer: cellRendererFn,
    },
    {
      field: "action",
      width: 260,
      cellRenderer: cellActionRendererFn,
    },
  ];

  return (
    <GridContainer className="ag-theme-alpine">
      <Grid
        rowData={tableData}
        isError={isError}
        columnDefs={columnDefs}
        defaultColDef={defaultColDef}
      />
    </GridContainer>
  );
};

export default AgGrid;
