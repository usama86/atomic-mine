/* eslint-disable import/no-anonymous-default-export */
import React from 'react';

export default ({ value, onChange,...props }) => (
	<input
        value={value}
        onChange={onChange}
        className="form-control"
		{...props}
	/>
);
