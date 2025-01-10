import './App.css';
import EventCard from './EventCard';
import { useState, useEffect } from 'react';
import { Container, CircularProgress } from '@mui/material';

function App() {
    const [events, setEvents] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const fetchEvents = async () => {
        try {
            const url = 'https://kind-earwig-live.ngrok-free.app/events';
            const res = await fetch(url, {
                method: 'GET',
                headers: {
                    'ngrok-skip-browser-warning': '1',
                },
            });
            const data = await res.json();
            setEvents(data);
        } catch (e) {
            console.error('Error fetching data: ', e);
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                await fetchEvents();
            } catch (e) {
                console.error('Error fetching data:', e);
            } finally {
                setIsLoading(false);
            }
        };
        fetchData();
    }, []);

    return (
        <>
            {isLoading && <CircularProgress sx={{ color: '#9fa9a3' }}></CircularProgress>}

            <Container>
                {events.map((e) => (
                    <EventCard
                        key={e.id}
                        event={e}
                    />
                ))}
            </Container>
        </>
    );
}

export default App;
