import { Component } from 'react'

class ImageComponent extends Component {
    render() {
        return <img  src={this.props.imageSource} alt={this.props.altContent}></img>
    }
}

export default ImageComponent