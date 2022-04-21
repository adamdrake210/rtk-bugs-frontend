import { Button, Theme, Typography } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";

const useStyles = makeStyles<Theme>((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    maxWidth: 500,
  },
  buttonsContainer: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    maxWidth: 200,
    margin: theme.spacing(2, 0),
  },
}));

type Props = {
  handleDelete: () => void;
  handleClose: () => void;
  isLoading?: boolean;
};

export default function DeleteModal({
  handleClose,
  handleDelete,
  isLoading,
}: Props) {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Typography variant="h5" sx={{ mb: 2 }}>
        Are you sure you want to delete this?
      </Typography>
      <div className={classes.buttonsContainer}>
        <Button
          onClick={handleClose}
          type="button"
          variant="contained"
          disabled={isLoading}
        >
          Cancel
        </Button>
        <Button
          type="button"
          variant="contained"
          color="secondary"
          disabled={isLoading}
          onClick={handleDelete}
        >
          Delete
        </Button>
      </div>
    </div>
  );
}
