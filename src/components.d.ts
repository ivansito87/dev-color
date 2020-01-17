/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';


export namespace Components {
  interface MyAlert {
    'kind': "info" | "success" | "error" | "warning";
    'message': string;
  }
}

declare global {


  interface HTMLMyAlertElement extends Components.MyAlert, HTMLStencilElement {}
  var HTMLMyAlertElement: {
    prototype: HTMLMyAlertElement;
    new (): HTMLMyAlertElement;
  };
  interface HTMLElementTagNameMap {
    'my-alert': HTMLMyAlertElement;
  }
}

declare namespace LocalJSX {
  interface MyAlert {
    'kind'?: "info" | "success" | "error" | "warning";
    'message'?: string;
  }

  interface IntrinsicElements {
    'my-alert': MyAlert;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      'my-alert': LocalJSX.MyAlert & JSXBase.HTMLAttributes<HTMLMyAlertElement>;
    }
  }
}

