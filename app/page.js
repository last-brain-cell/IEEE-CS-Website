import Link from 'next/link';
import { IconButton } from '@mui/material';
import {Person, AccessAlarmRounded} from "@mui/icons-material";
import { Card, CardContent, Typography, Grid } from '@mui/material';

export default function Page() {
  return (
      <div>
        <div className={"home-button"}>
          <Link href="/team/">
            <IconButton aria-label="team" size="large">
              <Person />
            </IconButton>
          </Link>
          <Link href="/Events/">
            <IconButton aria-label="events" size="large">
              <AccessAlarmRounded />
            </IconButton>
          </Link>
        </div>

        <div className={"event-cards"}>
          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={6} className={"card"}>
              <Card>
                <CardContent>
                  <Typography variant="h5">Event 1</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={6} className={"card"}>
              <Card>
                <CardContent>
                  <Typography variant="h5">Event 2</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={6} className={"card"}>
              <Card>
                <CardContent>
                  <Typography variant="h5">Event 3</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={6} className={"card"}>
              <Card>
                <CardContent>
                  <Typography variant="h5">Event 4</Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </div>

      </div>
  )
}
