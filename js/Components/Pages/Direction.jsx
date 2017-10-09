import React from 'react';


class Direction extends React.Component {
    render() {
        return (
            <div>
                <div className="direction">
                    <div className="container">
                        <div className="direction-box">
                            <img className="down" src="images/down_arrow.png" alt="down_arrow"/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export {Direction}
