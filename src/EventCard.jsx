/* eslint-disable react/prop-types */
import { Box, Button, Stack, Typography } from '@mui/material';
import { getDate } from '../utils/getDate';
import './EventCard.css';

export default function EventCard({ event }) {
    return (
        <Box
            className="event-box"
            style={{
                backgroundColor: 'white',
                color: '#272727',
                borderRadius: '10px',
                overflow: 'hidden',
                // marginBottom: '40px',
                padding: 0,
            }}>
            <Stack
                direction={{ sm: 'column', md: 'row' }}
                sx={{ display: 'flex' }}>
                <Box sx={{ width: { md: 1 / 2 } }}>
                    <img
                        src={event.image}
                        alt="event graphic"
                        style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                    />
                </Box>
                <Stack sx={{ flex: 1, padding: '2rem 0 2rem 3rem' }}>
                    <Typography
                        variant="h4"
                        align="left"
                        gutterBottom>
                        <strong>
                            {event.name} | {getDate(event.start_time)}
                        </strong>
                    </Typography>
                    <Typography
                        variant="p"
                        align="left"
                        marginTop="1rem">
                        {event.description}
                    </Typography>
                    {event.registration !== null && (
                        <Button
                            className="btn"
                            variant="contained"
                            href={event.registration}
                            color="primary"
                            sx={{
                                marginTop: {
                                    sm: '1rem',
                                    md: '2rem',
                                    lg: 'auto',
                                },
                                marginLeft: 'auto',
                                marginRight: 'auto',
                                borderRadius: '.8rem',
                                color: '#fff',
                                '&:hover': {
                                    backgroundColor: '#9fa9a3',
                                    color: '#fff',
                                },
                            }}>
                            Register
                        </Button>
                    )}
                </Stack>
            </Stack>
        </Box>
    );
}
