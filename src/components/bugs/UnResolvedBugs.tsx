import { useGetAllBugsQuery } from "services/bugsapi";
import CreateBugButton from "./buttons/CreateBugButton";
import BugsListTable from "./BugsListTable";
import { Box, Typography } from "@mui/material";
import { Bug } from "types/types";

export const UnResolvedBugs = () => {
  const emptyArray: Bug[] = [];

  const { bugs } = useGetAllBugsQuery(undefined, {
    selectFromResult: ({ data }) => ({
      bugs: data?.filter((bug) => !bug.resolved) || emptyArray,
    }),
  });

  return (
    <Box
      sx={{ width: "100%", display: "flex", flexDirection: "column", my: 4 }}
    >
      <Typography variant="h4" component="h2" gutterBottom>
        UnResolved Bugs
      </Typography>
      <CreateBugButton />
      {bugs && <BugsListTable data={bugs} />}
    </Box>
  );
};
