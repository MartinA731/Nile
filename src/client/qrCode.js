import React, { Component } from 'react';
import QRCode from "qrcode.react";
import './Client.css';

class QrCode extends Component {
		render(){
		var qrValue = this.props.dataFromParentQR;
	return (
		<div id = 'qrCode'>
			<QRCode
				id = "qr-gen"
				value = {qrValue}
				size = {100}
				level = {"H"}
				includeMargin = {true}
			/>
		</div>
	)
	}
}

export default QrCode