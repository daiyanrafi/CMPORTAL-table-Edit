import React = require("react");
import { IInputs } from "./generated/ManifestTypes";
import App from "./modules/case-form/App";

export default class HelloWorld extends React.Component<
  ComponentFramework.Context<IInputs>,
  {}
> {
  private _props: ComponentFramework.Context<IInputs>;
  constructor(props: ComponentFramework.Context<IInputs>) {
    super(props);

    this._props = props;
  }

  public render() {
    return (
      <div>
        {/* <h1>Hello world-</h1> */}
        <App/>
      </div>
    );
  }
}
