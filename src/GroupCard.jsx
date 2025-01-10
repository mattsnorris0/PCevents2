/* eslint-disable react/prop-types */

import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function GroupCard({ group }) {
    return (
        <Card
            sx={{ maxWidth: 400 }}
            raised="true">
            <CardActionArea
                // ref={group.attributes.public_church_center_web_url}
                sx={{ textAlign: 'left', '&:hover': { color: 'transparent' } }}>
                <CardMedia
                    component="img"
                    height="100%"
                    image={group.attributes.header_image.medium}
                    sx={{ objectFit: 'contain' }}
                    alt="group graphic"
                />
                <Button
                    size="medium"
                    color="primary"
                    sx={{ marginLeft: 2, marginBottom: 1, '&:hover': { backgroundColor: 'transparent' } }}>
                    {group.attributes.name}
                    <ArrowForwardIcon sx={{ marginLeft: 1 }} />
                </Button>
            </CardActionArea>
        </Card>
    );
}
