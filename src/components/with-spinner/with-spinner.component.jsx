import React from 'react';
import Spinner from '../spinner/spinner.component';

const WithSpinner = WrappedCompoent => ({isLoading, ...otherProps }) => {
    return isLoading ? <Spinner /> : <WrappedCompoent {...otherProps} />;
};

export default WithSpinner;

