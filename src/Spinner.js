import React from "react";
import {Eco} from "@material-ui/icons";

const Spinner = (props) => {
    return (
        <div style={{
            background: "#cacaff",
            width: "100vw",
            height: "100vh",
            position: "fixed",
            top: 0,
            left: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
        }}>
            <Eco style={{
                color: "#8b8be8", fontSize: "150px",
            }} />
        </div>
        )
}

export default Spinner;