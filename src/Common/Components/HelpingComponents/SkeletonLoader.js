import React from "react";
import Grid from "@material-ui/core/Grid";
import { Skeleton } from "@material-ui/lab";

export const SkeletonLoader = () => {
  return (
    <div>
      <Grid container spacing={5}>
        <Grid item xs={12} sm={4}>
          <Skeleton variant="rect" height={150} width={350} />
          <Skeleton variant="text" width={350} height={50} />
          <Skeleton variant="text" width={350} height={50} />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Skeleton variant="rect" height={150} width={350} />
          <Skeleton variant="text" width={350} height={50} />
          <Skeleton variant="text" width={350} height={50} />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Skeleton variant="rect" height={150} width={350} />
          <Skeleton variant="text" width={350} height={50} />
          <Skeleton variant="text" width={350} height={50} />
        </Grid>
      </Grid>
    </div>
  );
};
