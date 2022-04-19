import React from "react";
import { InputLabel, MenuItem, Select } from "@mui/material";
import { Control, Controller } from "react-hook-form";
import { User } from "types/types";

type Props = {
  control: Control<any>;
  users: User[] | undefined;
};

export default function UserSelectField({ control, users }: Props) {
  return (
    <>
      <InputLabel id="action-type-select-label">Assign a User</InputLabel>
      <Controller
        name="userid"
        control={control}
        defaultValue="unassigned"
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <Select
            labelId="action-type-select-label"
            id="action-type-select"
            value={value}
            error={!!error}
            onChange={onChange}
          >
            <MenuItem value="unassigned">Unassigned</MenuItem>

            {users?.length &&
              users.map((user) => (
                <MenuItem key={user.id} value={user.id}>
                  {user.firstname} {user.lastname}
                </MenuItem>
              ))}
          </Select>
        )}
      />
    </>
  );
}
