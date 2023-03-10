import React, {useState} from 'react';
import { Card, CardHeader, Collapse, Avatar, Grid, IconButton, CardActions, CardMedia, CardContent, Typography } from '@mui/material';
import { Favorite, ExpandMore } from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import dayjs from 'dayjs';
import 'dayjs/locale/ru';
import relativeTime from 'dayjs/plugin/relativeTime';
import s from './Post.module.css';

dayjs.locale('ru');
dayjs.extend(relativeTime);

const ExpandMoreStyled = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
}));
const Post= ({ image, title, author: {email, avatar}, text, created_at }) => {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
      <Grid container item xs={12} sm={6} md={4} lg={3}>
        <Card className={s.card}>
          <CardHeader
              avatar={
                  <Avatar aria-label="recipe">
                      {email?.slice(0, 1).toUpperCase()}
                  </Avatar>
              }
              title={email}
              subheader={dayjs(created_at).fromNow()}
          />
            <CardMedia
                component="img"
                height="194"
                image={image}
                alt={`Изображение_${title}`}
            />
                <CardContent>
                    <Typography variant="h5" component="h2" gutterBottom>{title}</Typography>
                    <Typography variant="body2" noWrap color="text.secondary">{text}</Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                        <Favorite />
                    </IconButton>
                    <ExpandMoreStyled
                        expand={expanded}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                    >
                        <ExpandMore />
                    </ExpandMoreStyled>
                </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography paragraph>
                        {text}
                    </Typography>
                </CardContent>
            </Collapse>
        </Card>
      </Grid>
  );
};

export default Post;