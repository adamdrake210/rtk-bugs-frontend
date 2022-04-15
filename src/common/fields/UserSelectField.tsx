import React from "react";
import { InputLabel, MenuItem, Select } from "@mui/material";
import { Control, Controller } from "react-hook-form";
import { useGetAllUsersQuery } from "services/usersapi";
import Loading from "common/Loading";

type Props = {
  control: Control<any>;
};

export default function UserSelectField({ control }: Props) {
  const {
    data: users,
    isLoading,
    isError,
    error: errorGetUsers,
  } = useGetAllUsersQuery();

  return (
    <>
      <InputLabel id="action-type-select-label">Assign a User</InputLabel>
      <Controller
        name="userid"
        control={control}
        defaultValue="nouser"
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <Loading
            isLoading={isLoading}
            error={errorGetUsers}
            isError={isError}
          >
            <Select
              labelId="action-type-select-label"
              id="action-type-select"
              value={value}
              error={!!error}
              onChange={onChange}
            >
              <MenuItem value="nouser">No User</MenuItem>

              {users?.length &&
                users.map((user) => (
                  <MenuItem key={user.id} value={user.id}>
                    {user.firstname} {user.lastname}
                  </MenuItem>
                ))}
            </Select>
          </Loading>
        )}
      />
    </>
  );
}
