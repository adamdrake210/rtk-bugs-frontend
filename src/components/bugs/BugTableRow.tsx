// import { Link } from 'react-router-dom';
import { Checkbox, TableCell, TableRow } from "@mui/material";
import { useResolveBugMutation } from "services/bugsapi";

import { Bug } from "types/types";
import DeleteBugButton from "./buttons/DeleteBugButton";
import EditBugButton from "./buttons/EditBugButton";
import { UNASSIGNED_USER_ID } from "./forms/BugForm";

type Props = {
  bug: Bug;
};

const BugTableRow = ({ bug }: Props) => {
  const [resolveBug] = useResolveBugMutation();

  return (
    <TableRow hover tabIndex={-1}>
      <TableCell>{bug.id}</TableCell>
      <TableCell>
        {/* <Link className={classes.link} to={getExperimentDetailPath(experiment.id)}> */}
        {bug.title}
        {/* </Link> */}
      </TableCell>
      <TableCell>{bug.description}</TableCell>
      <TableCell sx={{ textTransform: "uppercase" }}>
        {bug.user !== null
          ? bug.user.firstname + " " + bug.user.lastname
          : UNASSIGNED_USER_ID}
      </TableCell>
      <TableCell>
        <Checkbox checked={bug.resolved} onClick={() => resolveBug(bug)} />
      </TableCell>
      <TableCell>
        <EditBugButton bug={bug} />
      </TableCell>
      <TableCell>
        <DeleteBugButton bug={bug} />
      </TableCell>
    </TableRow>
  );
};

export default BugTableRow;
