import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    // Only update state for fatal errors (optional)
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error caught by boundary:", error, errorInfo);
  }

  resetError = () => {
    this.setState({ hasError: false, error: null });
  };

  render() {
    // 🛠️ Only show the fallback UI if it's a fatal error
    if (this.state.hasError && this.state.error instanceof TypeError) {
      return (
        <div>
          <h2>Something went wrong.</h2>
          <button onClick={this.resetError}>Try Again</button>
        </div>
      );
    }

    // ✅ Always render the original component unless it's completely broken
    return this.props.children;
  }
}

export default ErrorBoundary;
