import React from 'react';
import styled from 'styled-components';
import iconeCoracaoPreto from 'icone';
import iconeCoracaoBranco from 'iconeBranco';

const IconContainer = styled.div`
	display: flex;
`
const IconImage = styled.img`
	margin-right: 5px;
`

class IconeComContador extends React.Component{
	state = {
		curtido: false,
		numeroCurtidas: 0
	}
	onClickCurtida = () => {
		if(!this.state.curtido){
		this.setState({	
			curtido: true,
			numeroCurtidas: this.state.numeroCurtidas +1
		})
	} else{
		this.setState({
			curtido: false,
			numeroCurtidas: this.state.numeroCurtidas -1
		})
	}
	render(){
		let iconeCurtida

		
	}
	
