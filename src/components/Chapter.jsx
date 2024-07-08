import React from 'react';
import { Container, Row, Col } from 'react-grid-system';

const styles = {
	title: { 
		color:'#39f'
	},
}

export default function Chapter(props) {
	
const { data, title} = props;

return(
	<Container>
	    	<Row className="moi">
				<Col>
					<h1 style={ styles.title }>{ title }</h1>
				</Col>
			</Row>
			{
			Array.isArray(data) ? data.map((row, indexRow)=> {
					 
					 return(
						<Row key={ 'row' + indexRow }>
								{
									row.map((col, indexCol, el)=> <Col md={ 12 / el.length } key={ 'col' + indexCol }>{col}</Col>)
								}
						</Row>
						)
					
				}) : null
			}
	</Container>
	)
}