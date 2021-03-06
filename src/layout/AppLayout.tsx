import React from "react";
import { Box, Container } from "@mui/material";
import BugsAppBar from "components/navigation/BugsAppBar";

type AppLayoutProps = {
  children: React.ReactNode;
};

const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <Box sx={{ display: "flex", width: "100%", flexDirection: "column" }}>
      <Box component="main" sx={{ flexGrow: 1 }}>
        <BugsAppBar />
        <Container maxWidth="lg" sx={{ py: 4, px: 2, width: "100%" }}>
          {children}
        </Container>
      </Box>
    </Box>
  );
};

export default AppLayout;
