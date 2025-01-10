/* eslint-disable react/prop-types */
import { Grid2, Box, Typography } from '@mui/material';
// import Item from '@mui/material/Item';
import GroupCard from './GroupCard';

export default function GroupGrid({ groups, loading }) {
    return (
        <Box>
            {!loading && groups.length === 0 && (
                <Typography
                    align="center"
                    variant="h6"
                    sx={{ margin: 'auto' }}>
                    Small groups are currently not in session
                </Typography>
            )}
            <Grid2
                container
                spacing={2}
                direction={{ xs: 'column', md: 'row' }}>
                {groups.map((g) => (
                    <Grid2
                        key={g.id}
                        size={{ xs: 12, md: 4 }}>
                        <GroupCard group={g} />
                    </Grid2>
                ))}
            </Grid2>
        </Box>
    );
}
