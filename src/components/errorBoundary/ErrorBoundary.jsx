import { Component } from "react";
import ErrorMessague from "../errorMessageWindow/ErrorMessageWindow";

class ErrorBoundary extends Component {
    state = {
        error: false,
    };

    componentDidCatch(error, errorInfo) {
        console.log(error, errorInfo);
        this.setState({
            error: true,
        });
    }

    render() {
        if (this.state.error) {
            return <ErrorMessague />;
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
