import React from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Notification = ({
  openNotification,
  setOpenNotification,
  notificationType,
  notificationMessage,
}) => {
  const handleNotificationClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenNotification(false);
  };

  return (
    <Snackbar
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      open={openNotification}
      autoHideDuration={3000}
      onClose={handleNotificationClose}
    >
      <Alert
        onClose={handleNotificationClose}
        severity={notificationType}
        sx={{ width: "100%" }}
      >
        {notificationMessage}
      </Alert>
    </Snackbar>
  );
};

export default Notification;
