import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid"; // Grid version 2
import { useGetPicsumsQuery } from "../Api/picsum.service";
import { Picsum } from "../types/Picsum";
import CardComponent from "./Card";

export default function PicsumList() {
  const { data, error, isLoading } = useGetPicsumsQuery("");

  if (error) return <p>An error occurred</p>;
  if (isLoading) return <p>Loading</p>;

  return (
    <Box
      sx={{
        flexGrow: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#313131",
      }}
    >
      <Grid container spacing={1}>
        {data?.map((picsum: Picsum) => (
          <Grid key={picsum.id} xs={8} sm={8} md={4} lg={4} xl={3}>
            <CardComponent picsum={picsum} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
