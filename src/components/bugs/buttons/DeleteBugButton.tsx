import { Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

import { useOpen } from "hooks/useOpen";
import ModalContainer from "common/modals/ModalContainer";
import { Bug } from "types/types";
import DeleteModal from "common/modals/DeleteModal";
import { useRemoveBugMutation } from "services/bugsapi";

type DeleteBugButtonProps = {
  bug: Bug;
};

export default function DeleteBugButton({ bug }: DeleteBugButtonProps) {
  const { open, handleClose, handleOpen } = useOpen();

  const [removeBug, { isLoading }] = useRemoveBugMutation();

  const handleDelete = async () => {
    if (!bug.id) {
      throw new Error("Bugs without id cannot be handled!");
    }
    try {
      await removeBug(bug.id);
      handleClose();
    } catch (error) {
      console.error("Delete bug error: ", error);
    }
  };

  return (
    <>
      <ModalContainer handleClose={handleClose} open={open}>
        <DeleteModal
          handleDelete={handleDelete}
          handleClose={handleClose}
          isLoading={isLoading}
        />
      </ModalContainer>
      <Button
        onClick={handleOpen}
        fullWidth
        variant="contained"
        color="secondary"
        sx={{ width: "auto", maxWidth: 250 }}
      >
        <DeleteIcon />
      </Button>
    </>
  );
}
