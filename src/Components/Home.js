import React, { useState } from "react";
import {
  MDBIcon,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
} from "mdb-react-ui-kit";
import { FaChartBar } from "react-icons/fa";
import { BsGraphUpArrow } from "react-icons/bs";
import { BsFileBarGraph } from "react-icons/bs";
import CGPA from "./CGPA";
import NinePointer from "./NinePointer";
import GPA from "./GPA";

export default function App() {
  const [iconsActive, setIconsActive] = useState("tab2");

  const handleIconsClick = (value) => {
    if (value === iconsActive) {
      return;
    }

    setIconsActive(value);
  };

  return (
    <>
      <MDBTabs fill className="my-4 container">
        <MDBTabsItem>
          <MDBTabsLink
            className="d-flex justify-content-center align-items-center"
            onClick={() => handleIconsClick("tab1")}
            active={iconsActive === "tab1"}
          >
            <MDBIcon className="me-2" /> <FaChartBar />
            &nbsp; CGPA
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink
            className="d-flex justify-content-center align-items-center"
            onClick={() => handleIconsClick("tab2")}
            active={iconsActive === "tab2"}
          >
            <MDBIcon className="me-2" />
            <BsFileBarGraph />
            &nbsp; GPA
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink
            className="d-flex justify-content-center align-items-center"
            onClick={() => handleIconsClick("tab3")}
            active={iconsActive === "tab3"}
          >
            <MDBIcon className="me-2" />
            <BsGraphUpArrow />
            &nbsp; 9 Pointer
          </MDBTabsLink>
        </MDBTabsItem>
      </MDBTabs>

      <MDBTabsContent className="container">
        <MDBTabsPane open={iconsActive === "tab1"}>
          <CGPA />
        </MDBTabsPane>
        <MDBTabsPane open={iconsActive === "tab2"}>
          <GPA />
        </MDBTabsPane>
        <MDBTabsPane open={iconsActive === "tab3"}>
          <NinePointer />
        </MDBTabsPane>
      </MDBTabsContent>
    </>
  );
}
