import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'

const ComponentName: React.FC = () => {
	return (
		<Card sx={{ maxWidth: 400 }}>
			<CardMedia
				component='img'
				alt='green iguana'
				height='100'
				image='https://www.zdnet.com/a/img/resize/bbe666ef137aa0d1dffa9b5802566076611f62cf/2022/08/23/5db1fdfe-6fd5-4676-84cf-a8bb5ba753ce/erepublic-brightspotcdn.jpg?auto=webp&width=1280'
			/>
			<CardContent>
				<Typography gutterBottom variant='h5' component='div'>
					Lizard
				</Typography>
				<Typography variant='body2' sx={{ color: 'text.secondary' }}>
					Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents
					except Antarctica
				</Typography>
			</CardContent>
			<CardActions>
				<Button size='small'>Share</Button>
				<Button size='small'>Learn More</Button>
			</CardActions>
		</Card>
	)
}

export default ComponentName
