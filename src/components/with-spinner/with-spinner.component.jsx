import React from 'react';
import { SpinnerOverlay, SpinnerContainer} from './with-spinner.styles';

const WithSpinner = WrappedCompoent => {
    const Spinner = ({ isLoading, ...otherProps }) => {
        return isLoading ? (
            <SpinnerOverlay>
                <SpinnerContainer />
            </SpinnerOverlay>
        ) : (
            <WrappedCompoent {...otherProps} />
        );
    };

    return Spinner;
};

export default WithSpinner;

