import React, {Component} from 'react'
import styled from 'styled-components'

const CommentContainer = styled.div `
    display: flex;
    justify-content: center;
    padding: 5px;
`

const InputComentario = styled.input `
    width: 100%;
    margin-right: 5px;
`

export class SecaoComentario extends Component {
	state = {
		PostComentario: ''

	}

	onChangeComentario = (event) => {
		console.log(event.target.value)
		this.setState({
			PostComentario: event.target.value
		})

	}

	render() {
		return <div className = {
				CommentContainer
			} >
			<
			input
		className = {
			InputComentario
		}
		placeholder = {
			'Comentário'
		}
		value = {
			this.state.PostComentario
		}
		onChange = {
			this.onChangeComentario
		}
		/> 
		<button onClick = {this.props.aoEnviar}> Enviar </button> 
			
		</div>
	}
}