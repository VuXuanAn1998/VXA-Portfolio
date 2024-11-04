import React from 'react'
import CardItem from '../../../../component/CardItem'
const ProjectList: React.FC<{ projectList: any }> = ({ projectList }) => {
	return (
		<>
			{projectList &&
				projectList.map((item: any, index: number) => {
					return <CardItem cardValue={item} key={index} />
				})}
		</>
	)
}

export default ProjectList
