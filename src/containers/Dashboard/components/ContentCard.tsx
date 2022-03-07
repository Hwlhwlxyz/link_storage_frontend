import { Card, CardContent, Typography, CardActions, Button, CardMedia, Box, Link } from "@mui/material";
import { useState } from "react";
import logo from '../../../logo.svg';

function ContentCard(props: { title: any, url: string, description: string}) {
    const [title] = useState(props.title);
    
    // const imageLink = "https://filestore.community.support.microsoft.com/api/images/6fec6b8b-948b-4ef6-bfec-6369ee1b55f2";
    const imageLink = "logo.svg";
  return (
    <Card sx={{ display:'flex', minWidth: 275 }}>

<CardMedia
        component="img"
        sx={{ width: 50, height:50 }}
        image={logo}
        alt="Live from space album cover"
      />


<Box sx={{ display: 'flex', flexDirection: 'column'  }}>
<CardContent  sx={{ flex: '1 0 auto' }}>
        
        <Typography variant="h5" component="div" sx={{ float:'left', width:'100%', textAlign:'left' }}>
                <Link href={props.url} color="inherit">
                {title}
        </Link>
                  
        </Typography>
        <Typography variant="body2" sx={{ float:'left', width:'100%', textAlign:'left'  }}>
          {props.url}
        </Typography>
        <Typography variant="body2" sx={{ float:'left', width:'100%', textAlign:'left'  }}>
        {props.description}
        </Typography>
      </CardContent>
      {/* <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Box>




      
      
    </Card>
  );

}

export default ContentCard;
