import React from "react";

const PageError = ({ error }) => {
	return <div className="PageError">{error.message}</div>;
};

export default PageError;
