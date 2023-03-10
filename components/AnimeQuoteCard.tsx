import React from 'react';
import { Card, CardHeader, Box, CardMedia, CardContent, Typography } from '@mui/material';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { useRouter } from 'next/router';

type Props = {
    name : string,
    src: string,
    resume: string,
    apiname: string
}
const AnimeQuoteCard: React.FC<Props> = ({name, src, apiname, resume}) => {
    const router = useRouter();

    return (
        <Card sx={{
            backgroundColor: '#424242',
            height: '100%'

            }}>
            <CardMedia >
                <Box 
                component={'button'}
                onClick={()=> router.push(`/anime-quotes/${apiname}`)}
                sx={{
                    border: 'none',
                    cursor: 'pointer',
                    backgroundImage: `url(${src})`,
                    backgroundSize: '650px',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    height: '250px',
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'background-size 720ms ease',
                    fontSize: {
                        xs: '5rem'
                    },
                    '&:hover': {
                        'background-size': '700px'
                    },
                    '&:focus': {
                        'background-size': '700px'
                    },

                }}>
                    
                    <Typography component={'p'} variant='h2'>
                        {name}
                    </Typography>
                </Box>
            </CardMedia>
        </Card>
    )
}

export default AnimeQuoteCard