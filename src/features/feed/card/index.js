import React from 'react';
import { Card, CardContent, CardMedia, Chip, Stack, Typography } from '@mui/material';

function FeedCard(props) {

  return (
    <div className="feed-card">

      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="260"
          image={props.data?.links?.[0]?.href}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.data?.data?.[0]?.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.data?.data?.[0]?.description?.substring(0, 120)}...
          </Typography>
          <div>
            <br />
            <Stack style={{ flexWrap: 'wrap' }} direction="row" spacing={1}>
              {props.data?.data?.[0]?.keywords?.map((tag, index) => {
                return index <= 2 && <Chip label={tag.substring(0, 10)} key={tag} />
              })}
            </Stack>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default FeedCard;