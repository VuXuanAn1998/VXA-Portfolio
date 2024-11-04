import { Card, CardContent, CardMedia, Typography, Stack, Chip } from '@mui/material'
import React from 'react'

const CardItem: React.FC<{ cardValue: any }> = ({ cardValue }) => {
	return (
		<Card sx={{ maxWidth: 400 }} className='cursor-pointer'>
			<CardMedia component='img' alt={cardValue.name} height='100' image={cardValue.img} />
			<CardContent>
				<Typography gutterBottom variant='h5' component='div'>
					{cardValue.name}
				</Typography>
				<Typography variant='body2' sx={{ color: 'text.secondary' }}>
					{cardValue.desc}f
				</Typography>
				<div className='mt-3'>
					<Stack direction='row' className='w-full inline-block flex-wrap gap-2'>
						{cardValue &&
							cardValue.tags.map((item: string, index: number) => {
								return <Chip label={item} color='primary' key={index} />
							})}
					</Stack>
				</div>
			</CardContent>
		</Card>
	)
}

export default CardItem
