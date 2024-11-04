import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import CssBaseline from '@mui/material/CssBaseline'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import List from '@mui/material/List'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'

import ListItemText from '@mui/material/ListItemText'
import { useState } from 'react'

const drawerWidth = 200

export default function PermanentDrawerLeft() {
	const [activeButton, setActiveButton] = useState<string>('')
	return (
		<Box sx={{ display: 'flex' }}>
			<CssBaseline />
			<AppBar position='fixed'>
				<Toolbar>
					<Typography variant='h6' noWrap component='div'>
						{activeButton}
					</Typography>
				</Toolbar>
			</AppBar>
			<Drawer variant='permanent' anchor='left'>
				<Toolbar />
				<Divider />
				<List>
					{['Basic Information', 'Projects', 'Education', 'Experiences'].map((text, index) => (
						<ListItem key={text} disablePadding onClick={() => setActiveButton(text)}>
							<ListItemButton>
								<ListItemText primary={text} />
							</ListItemButton>
						</ListItem>
					))}
				</List>
			</Drawer>
			<Box component='main' sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}>
				<Toolbar />
				<Typography sx={{ marginBottom: 2 }}>{activeButton}</Typography>
			</Box>
		</Box>
	)
}
