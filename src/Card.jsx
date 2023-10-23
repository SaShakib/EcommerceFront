import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 300,
    '&:hover' : {

    }
  },
  media: {
    height: '200px'
  },
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <Card 
    elevation={0}
    className={classes.root}>
      <CardActionArea style={{justifyContent: 'center'}}>
        <CardMedia
          className={classes.media}
          image="https://waliey.com/wp-content/uploads/2019/01/p1.png"
        />
        <CardContent>
          <Typography gutterBottom 
          variant="h6" 
          component="h3"
          align='center'
          color='primary'
          >
            Lizard
          </Typography>
          <Typography 
          align='center'
          variant='body1' 
          gutterBottom
          color='secondary' component="p">
            $ 20.99
          </Typography>
          <Button fullWidth
         variant='outlined' color="secondary">
          Add To Cart
        </Button>
        </CardContent>
      </CardActionArea>
      
    </Card>
  );
}
