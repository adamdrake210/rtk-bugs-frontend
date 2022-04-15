import Loading from "common/Loading";
import { useGetAllBugsQuery } from "services/bugsapi";
import CreateBugButton from "./buttons/CreateBugButton";
import BugsListTable from "./BugsListTable";
import { Box, Typography } from "@mui/material";

export const Bugs = () => {
  const { data, isLoading, isError, error, isFetching } = useGetAllBugsQuery();

  return (
    <Loading isLoading={isLoading} error={error} isError={isError}>
      <Box
        sx={{ width: "100%", display: "flex", justifyContent: "center", mb: 2 }}
      >
        <Typography variant="h3" component="h1">
          Bugs
        </Typography>
      </Box>
      <CreateBugButton />
      {isFetching ? "...refetching" : ""}
      {data && <BugsListTable data={data} />}
    </Loading>
  );
};
