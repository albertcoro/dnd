import { Alert as AlertMui, AlertTitle } from "@mui/material";
import React from "react";
import './../../client/css/home.css';

export const Alert = (severity, title, info) => {
    return (
        <AlertMui severity={severity}>
            <AlertTitle>{title}</AlertTitle>
            {info}
        </AlertMui>
    );
}