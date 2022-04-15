import { Button } from "@mui/material";
import { Edit } from "@mui/icons-material";

import { useOpen } from "hooks/useOpen";
import ModalContainer from "common/modals/ModalContainer";
import BugForm from "../forms/BugForm";
import { Bug } from "types/types";

type EditBugButtonProps = {
  bug: Bug;
};

export default function EditBugButton({ bug }: EditBugButtonProps) {
  const { open, handleClose, handleOpen } = useOpen();

  return (
    <>
      <ModalContainer handleClose={handleClose} open={open}>
        <BugForm handleClose={handleClose} editBug={bug} />
      </ModalContainer>
      <Button
        onClick={handleOpen}
        fullWidth
        variant="contained"
        color="primary"
        sx={{ width: "auto", maxWidth: 250 }}
      >
        <Edit />
      </Button>
    </>
  );
}
