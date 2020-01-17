import { Component, h, Prop } from "@stencil/core";

@Component({
  tag: "my-alert",
  styleUrl: "my-alert.scss",
  scoped: true
})
export class MyAlert {
  @Prop() message: string = "This is an important alert";
  @Prop() kind: "info" | "success" | "error" | "warning" = "info";
  render() {
    return <p class={this.kind}>{ this.message }</p>;
  }
}
