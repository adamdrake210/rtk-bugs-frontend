import Loading from "common/Loading";
import { useGetAllBugsQuery } from "services/bugsapi";
import CreateBugButton from "./buttons/CreateBugButton";
import BugsListTable from "./BugsListTable";

export const Bugs = () => {
  const { data, isLoading, isError, error, isFetching } = useGetAllBugsQuery();

  return (
    <Loading isLoading={isLoading} error={error} isError={isError}>
      <CreateBugButton />
      {isFetching ? "...refetching" : ""}
      {data && <BugsListTable data={data} />}
    </Loading>
  );
};
