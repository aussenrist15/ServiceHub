import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

export default function URLfield(props){

    const [urlValue, setUrlValue] = useState("")

    const handleUrlChange = (e) => {
        setUrlValue(e.target.value);
    };

    return(
        <>
        <td colSpan="3">
        <TextField
            id="filled-full-width"
            value={urlValue}
            onChange={(e) => handleUrlChange(e)}
            style={{ margin: 8 }}
            placeholder="URL"
            fullWidth
            margin="normal"
            InputLabelProps={{
            shrink: true,
            }}
            variant="outlined"
        />
        </td>
        <td>
        <Button
            variant="contained"
            color="primary"
            onClick={() => props.handleUrlSend(props.id, urlValue)}
        >
            Send
        </Button>
        </td>
        </>
    )
}