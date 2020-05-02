import React, { Component } from "react";
import Link from "next/link";
import Router from "next/Router";
class indexPage extends Component {
  static async getInitialProps(context) {
    return { appName: "Super App" };
  }

  render() {
    return (
      <div>
        <h1>The Main Page of {this.props.appName}</h1>
        <p>
          Go to{" "}
          <Link href="/auth">
            <a>Auth</a>
          </Link>
        </p>

        <button onClick={() => Router.push("/auth")}>Go to Auth Page</button>
      </div>
    );
  }
}

export default indexPage;
