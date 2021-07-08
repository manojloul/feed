import React from 'react';

const ct = new Date().getHours();

let dm = "";

if (ct > 1 && ct < 11) {
    dm = "🌅 Good Morning 🌅";
}
else if (ct > 11 && ct < 19) {
    dm = "🌞 Good Afternoon 🌞";
}
else {
    dm = "🌟 Good Night 🌟";
}
const Head = () => {
    return (
        <>
            <h1 className="head">
                <span style={{ marginLeft: '300px' }}> Feedback Form <span style={{ marginLeft: "300px" }}>{dm}</span>  </span>
            </h1>
        </>
    );
};

export default Head;