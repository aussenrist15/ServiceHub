import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

export const GigCard = (props) => {
  const history = useHistory();
  function gotoID(id) {
    history.push(`/user/service/${id}`);
  }

  const classes = useStyles();
  const { id, img, title, desc, price } = props;
  return (
    <Card
      className={classes.root}
      onClick={() => {
        gotoID(id);
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image={img}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {desc}
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
            Price: {price}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Button 1
        </Button>
        <Button size="small" color="primary">
          Button 2
        </Button>
      </CardActions>
    </Card>
  );
};
