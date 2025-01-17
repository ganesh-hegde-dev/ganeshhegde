import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

export default function Experience() {
    const companyUrl = "https://yt3.googleusercontent.com/VVcy8yZ3mfZqd6KLlgCGYXIiiO6a3GzCUMHrGHNu6NFf1dVoU27Hexd8oi9TPbMvhO9ozajnYQ=s900-c-k-c0x00ffffff-no-rj"
  return (
     
    <List  className='shadow'>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src={companyUrl} />
        </ListItemAvatar>
        <ListItemText
          primary="Solutions Engineer Level 1"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                sx={{ color: 'text.primary', display: 'inline' }}
              >
                Meltwater 
              </Typography>
              {" — Sep 2023 to Present"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src={companyUrl} />
        </ListItemAvatar>
        <ListItemText
          primary="Junior Solutions Engineer"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                sx={{ color: 'text.primary', display: 'inline' }}
              >
                Meltwater
              </Typography>
              {" — Sep 2022 to Sep 2023"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src={companyUrl} />
        </ListItemAvatar>
        <ListItemText
          primary="Intern"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                sx={{ color: 'text.primary', display: 'inline' }}
              >
                Meltwater
              </Typography>
              {" — March 2022 to Sep 2022"}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
  );
}
