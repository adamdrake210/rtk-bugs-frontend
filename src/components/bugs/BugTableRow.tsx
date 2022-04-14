// import { Link } from 'react-router-dom';
import { TableCell, TableRow } from "@mui/material";

import { Bug } from "types/types";

type Props = {
  bug: Bug;
};

const BugTableRow = ({ bug }: Props) => {
  return (
    <TableRow hover tabIndex={-1}>
      <TableCell>
        {/* <Link className={classes.link} to={getExperimentDetailPath(experiment.id)}> */}
        {bug.title}
        {/* </Link> */}
      </TableCell>
      <TableCell>{bug.description}</TableCell>
      <TableCell>{bug.user.id}</TableCell>
      <TableCell>
        {/* <EditExperimentButton experiment={experiment} /> */}
      </TableCell>
      <TableCell>
        {/* <DeleteExperimentButton experiment={experiment} /> */}
      </TableCell>
    </TableRow>
  );
};

export default BugTableRow;
