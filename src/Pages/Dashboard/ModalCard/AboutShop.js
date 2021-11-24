import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const AboutShop = ({ aboutShop }) => {
    return (
        <div>
            <Typography variant="h5" sx={{ textAlign: 'center', fontWeight: '500' }}>About Shop</Typography>
            <Card sx={{ my: 4, boxShadow: 5 }}>
                <CardMedia
                    component="img"
                    height="200"
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0Zm1bDNRTc0Ebe0lC3zIr9lKT4Vy81FGVZQ&usqp=CAU"
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {aboutShop.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Price: ${aboutShop.price}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small">Learn More</Button>
                </CardActions>
            </Card>
        </div>
    );
};

export default AboutShop;