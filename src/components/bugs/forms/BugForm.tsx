import { Box, Button, Theme, Typography } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";
import ControlledTextField from "components/common/fields/ControlledTextField";
import UserSelectField from "components/common/fields/UserSelectField";
import Loading from "components/common/Loading";
import { IS_ONLY_ALPHABET_CHARACTERS } from "constants/form";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useAddNewBugMutation, useUpdateBugMutation } from "services/bugsapi";
import { useGetAllUsersQuery } from "services/usersapi";
import { Bug } from "types/types";

const useStyles = makeStyles<Theme>((theme) => ({
  formContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    maxWidth: 400,
    minWidth: 300,
    width: "100%",
  },
  buttonsContainer: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    maxWidth: 250,
    margin: theme.spacing(2, 0),
  },
}));

type CreateFormValues = {
  title: string;
  description: string;
  userid: string;
};

type FormProps = {
  handleClose: () => void;
  editBug?: Bug;
};

export const UNASSIGNED_USER_ID = "unassigned";

export default function BugForm({ handleClose, editBug }: FormProps) {
  const classes = useStyles();
  const [apiError, setApiError] = useState<string | undefined>();

  const { handleSubmit, control } = useForm<CreateFormValues>({
    defaultValues: {
      title: editBug?.title || "",
      description: editBug?.description || "",
      userid: editBug?.user ? String(editBug?.user.id) : UNASSIGNED_USER_ID,
    },
  });

  const [addBug, { isLoading, isError, error }] = useAddNewBugMutation();

  const {
    data: users,
    isLoading: isLoadingUsers,
    isError: isErrorUsers,
    error: errorGetUsers,
  } = useGetAllUsersQuery();

  const [
    updateBug,
    { isLoading: isLoadingEdit, isError: isErrorEdit, error: errorEdit },
  ] = useUpdateBugMutation();

  const onSubmit = (formData: CreateFormValues) => {
    const { title, description, userid } = formData;
    setApiError("");

    const finalFormData = {
      title,
      description,
      userId: userid === UNASSIGNED_USER_ID ? null : userid,
      resolved: false,
    };

    if (editBug) {
      updateBug({
        id: editBug.id,
        title,
        description,
        userId: userid === UNASSIGNED_USER_ID ? null : userid,
      })
        .unwrap()
        .then(() => {
          handleClose();
        })
        .catch((error) => {
          console.error("error", error);
        });
    } else {
      addBug(finalFormData)
        .unwrap()
        .then(() => {
          handleClose();
        })
        .catch((error) => {
          setApiError(error.data.message);
          console.error("addBugError: ", error.data.message);
        });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={classes.formContainer}>
      <Typography variant="h4">{editBug ? "Update" : "Create"} Bug</Typography>

      <Box
        sx={{ display: "flex", flexDirection: "column", my: 2, width: "100%" }}
      >
        <ControlledTextField
          control={control}
          name="title"
          label="Bug Title*"
          rules={{
            required: "A Bug Title is required",
            maxLength: {
              value: 54,
              message: "Max Length exceeded! Please make the title shorter.",
            },
            pattern: IS_ONLY_ALPHABET_CHARACTERS,
          }}
          disabled={isLoading || isLoadingEdit}
        />

        <ControlledTextField
          control={control}
          name="description"
          label="Bug Description*"
          rules={{
            required: "Bug Description is required",
            maxLength: {
              value: 256,
              message:
                "Max Length exceeded! Please make the description shorter.",
            },
          }}
          disabled={isLoading || isLoadingEdit}
        />
        <Loading
          isLoading={isLoadingUsers}
          loadingMessage="Loading Users..."
          isError={isErrorUsers}
          error={errorGetUsers}
        >
          <UserSelectField users={users} control={control} />
        </Loading>
      </Box>

      {isLoading && (
        <Loading
          isLoading={isLoading}
          loadingMessage="Creating Bug..."
          isError={isError}
          error={error}
        />
      )}

      {isLoadingEdit && (
        <Loading
          isLoading={isLoadingEdit}
          loadingMessage="Updating Bug..."
          isError={isErrorEdit}
          error={errorEdit}
        />
      )}

      {apiError && (
        <Typography variant="body1" color="error">
          Something went wrong - {apiError}
        </Typography>
      )}

      <div className={classes.buttonsContainer}>
        <Button
          onClick={handleClose}
          type="button"
          variant="outlined"
          disabled={isLoading || isLoadingEdit}
        >
          Cancel
        </Button>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          disabled={isLoading || isLoadingEdit}
        >
          {editBug ? "Update" : "Create"} Bug
        </Button>
      </div>
    </form>
  );
}
