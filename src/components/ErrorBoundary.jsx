import { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.log("Error",error, info);
  }

  static getDerivedStateFromError(error) {
    return { hasError:true, error: error};
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something Went Wrong</h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
