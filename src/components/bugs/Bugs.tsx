import { Box, Typography } from "@mui/material";
import { ResolvedBugs } from "./ResolvedBugs";
import { UnResolvedBugs } from "./UnResolvedBugs";

export const Bugs = () => {
  return (
    <>
      <Box
        sx={{ width: "100%", display: "flex", justifyContent: "center", mb: 4 }}
      >
        <Typography variant="h3" component="h1">
          Current Bugs
        </Typography>
      </Box>
      <UnResolvedBugs />
      <ResolvedBugs />
    </>
  );
};
