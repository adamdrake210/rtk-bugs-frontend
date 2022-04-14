import Loading from "common/Loading";
import { useGetAllBugsQuery } from "services/bugsapi";
import BugsListTable from "./BugsListTable";

export const Bugs = () => {
  const { data, isLoading, isError, error } = useGetAllBugsQuery({});

  return (
    <Loading isLoading={isLoading} error={error} isError={isError}>
      {data && <BugsListTable data={data} />}
    </Loading>
  );
};
