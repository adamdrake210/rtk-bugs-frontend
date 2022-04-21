import { TableBody, TableCell, TableHead, TableRow } from "@mui/material";

import TableContainerBugs from "components/common/tables/TableContainerBugs";
import { Bug } from "types/types";
import BugTableRow from "./BugTableRow";

interface Column {
  id: "id" | "title" | "description" | "user" | "resolved" | "edit" | "delete";
  label: string;
  minWidth?: number;
  maxWidth?: number;
  width?: number;
  align?: "right" | "center";
}

const columns: Column[] = [
  { id: "id", label: "ID", minWidth: 100 },
  { id: "title", label: "title", minWidth: 150 },
  { id: "description", label: "Environment", width: 350 },
  { id: "user", label: "User", minWidth: 100 },
  { id: "resolved", label: "Resolved", minWidth: 100 },
  {
    id: "edit",
    label: "Edit",
    width: 120,
  },
  {
    id: "delete",
    label: "Delete",
    width: 120,
  },
];

type Props = {
  data: Bug[];
  showPagination?: boolean;
  onChangePage?: (event: any, newPage: number) => any;
  page?: number;
  count?: number;
};

export default function BugsListTable({
  onChangePage,
  page,
  data,
  showPagination = true,
  count = 0,
}: Props) {
  return (
    <TableContainerBugs
      showPagination={showPagination}
      onChangePage={onChangePage}
      page={page}
      count={count}
    >
      <TableHead>
        <TableRow>
          {columns.map((column) => (
            <TableCell
              sx={{
                backgroundColor: "primary.dark",
                color: "white",
                width: column.width,
                minWidth: column.minWidth,
                maxWidth: column.maxWidth,
              }}
              key={column.id}
              align={column.align}
            >
              {column.label}
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map((bug: Bug) => (
          <BugTableRow key={bug.id} bug={bug} />
        ))}
      </TableBody>
    </TableContainerBugs>
  );
}
