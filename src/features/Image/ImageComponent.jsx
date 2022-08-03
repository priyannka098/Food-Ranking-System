import React from "react";
import '../Polling/Polling.css'
class ImageComponent extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="dish-image">
                <img className="dish-image" src={this.props.url} alt="display image" />
            </div>
        );
    }
}

export default ImageComponent;