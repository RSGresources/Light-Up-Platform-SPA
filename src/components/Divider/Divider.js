import React from 'react';

const Divider = ({ height, backgroundColor, width }) => {

    return (
        <hr className="divider" style={{ height: height ? height : "1px", backgroundColor: backgroundColor ? backgroundColor : "#0000001f", width: width ? width : "100%" }} />
    )
}

export default Divider;