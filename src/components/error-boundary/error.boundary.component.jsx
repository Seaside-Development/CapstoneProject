import React from 'react';
/*
A class component becomes an error boundary if it defines either (or both) of the
lifecycle methods static getDerivedStateFromError() or componentDidCatch().
Use static getDerivedStateFromError() to render a fallback UI after an error
has been thrown. Use componentDidCatch() to log error information.
class ErrorBoundary ext
 */

import {
    ErrorImageOverlay,
    ErrorImageContainer,
    ErrorImageText
} from './error-boundary.styles';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        // You can also log the error to an error reporting service
        console.log(error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            // You can render any custom fallback UI
            return (
                <ErrorImageOverlay>
                    <ErrorImageContainer imageUrl='https://i.imgur.com/WvEu0cO.png'/>
                    <ErrorImageText>
                        <span>
                            The Page is broke like you <br></br>
                            页面坏了
                        </span>
                    </ErrorImageText>
                </ErrorImageOverlay>
            )
        }

        return this.props.children;
    }
}


export default ErrorBoundary;
