import { Button } from "@mui/material";

import { useOpen } from "hooks/useOpen";
import ModalContainer from "common/modals/ModalContainer";
import BugForm from "../forms/BugForm";

export default function CreateBugButton() {
  const { open, handleClose, handleOpen } = useOpen();

  return (
    <>
      <ModalContainer handleClose={handleClose} open={open}>
        <BugForm handleClose={handleClose} />
      </ModalContainer>
      <Button
        onClick={handleOpen}
        fullWidth
        variant="contained"
        color="primary"
        sx={{ width: "auto", maxWidth: 250 }}
      >
        Create New Bug
      </Button>
    </>
  );
}
