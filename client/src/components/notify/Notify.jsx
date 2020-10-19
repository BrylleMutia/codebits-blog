import React from "react";

import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";

import { useSelector, useDispatch } from "react-redux";
import { showToast } from "../../actions/controlActions";

const Notify = () => {
    const dispatch = useDispatch();
    const { isAlertShown, alertVariant, alertMsg } = useSelector((state) => state.controls.alert);

    // close then reset alert settings
    const handleCloseAlert = () => {
        dispatch(showToast("", "", false));
    };

    return (
        <React.Fragment>
            <Snackbar open={isAlertShown} autoHideDuration={5000} onClose={handleCloseAlert}>
                <Alert elevation={6} variant="filled" onClose={handleCloseAlert} severity={alertVariant}>
                    {alertMsg}
                </Alert>
            </Snackbar>
        </React.Fragment>
    );
};

export default Notify;
