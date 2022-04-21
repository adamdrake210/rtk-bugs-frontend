import React, { ReactNode } from "react";
import makeStyles from "@mui/styles/makeStyles";
import Paper from "@mui/material/Paper";
import { Theme } from "@mui/material";
import Table from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";
import TablePagination from "@mui/material/TablePagination";

import { RESULTS_PER_PAGE } from "constants/constants";

const useStyles = makeStyles<Theme>((theme) => ({
  root: {
    width: "100%",
    marginTop: theme.spacing(2),
  },
}));

type Props = {
  showPagination?: boolean;
  onChangePage?: (event: any, newPage: number) => any;
  children: ReactNode;
  page?: number;
  count: number;
};

export default function TableContainerBugs({
  children,
  showPagination,
  onChangePage,
  page,
  count,
}: Props) {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <TableContainer>
        <Table stickyHeader aria-label="sticky table">
          {children}
        </Table>
      </TableContainer>
      {showPagination && onChangePage && (
        <TablePagination
          rowsPerPageOptions={[RESULTS_PER_PAGE]}
          component="div"
          count={count}
          rowsPerPage={RESULTS_PER_PAGE}
          page={page || 0}
          onPageChange={onChangePage}
        />
      )}
    </Paper>
  );
}
