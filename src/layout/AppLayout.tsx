import React from "react";
import { Box, Container } from "@mui/material";

type AppLayoutProps = {
  children: React.ReactNode;
};

const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <Box sx={{ display: "flex" }}>
      <Box component="main" sx={{ flexGrow: 1 }}>
        <Container maxWidth="lg" sx={{ py: 12, px: 4 }}>
          {children}
        </Container>
      </Box>
    </Box>
  );
};

export default AppLayout;
