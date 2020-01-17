#### What is Stencil

Stencil is a compiler for building fast web apps using Web Components.
which is great because it lets us use this components in any html page

    - allows us to use modern constructs like JSX and TypeScript to create the components easily that how we use the
      native dom api
    - another good thing about stencil is that it provides polyfills for browsers that dont support web components like
      Edge and IE

Stencil combines the best concepts of the most popular frontend frameworks into a compile-time rather than run-time tool.
Stencil takes TypeScript, JSX, a tiny virtual DOM layer, efficient one-way data binding, an asynchronous rendering pipeline (similar to React Fiber),
and lazy-loading out of the box, and generates 100% standards-based Web Components that run in any browser supporting the Custom Elements v1 spec.

Stencil components are just Web Components, so they work in any major framework or with no framework at all. - All this sounds really cool right, so lets try it out

#### Build The Project

    - in our terminal we run npm init stencil
    > select components because we are going to implement componets
    > select the name of the project

#### The Command creates a component and a dev server all that we need, for development

    - we can now start to be comfortable and we can imediately see what stencil has created for us
    - we see strognly typed TypeScript files along with TSX a cobination of TS and HTML
    TS files are plain old Typescript files and do not support adding JSX Elements.
    ( TSX allows for embedding JSX elements inside the file, and is largely used by React.
    - along with the set up we also get an HTML page where we can test our components

#### To run the project in the browser we simply run

```bash
npm start
    - we now se that our page opens
```

#### going back to our editor ( ws | vscode ) and create our own alert component

```bash
    - we can use stencil combined with other plugins like sass less or simply css
    - lets do sass
>  run
npm install @stencil/sass --save-dev
```

```javascript
// add this into the plugins
import { sass } from '@stencil/sass';
     plugins: [sass()],
// rename css for scss in my-component.tsx
```

    rename component to my-alert.tsx
    remove ts test and readme files
    remove tag in the html file
    our first component should be working now

The component will be rendered now

- lets remove all the code from the component so we are left with the bare minimum { file_one }
- the tag name for the component will be my-alert and we specify that in the Component decorator
- the magic happens on the render method which is what ultimately gets rendered to the page
- for now we are going to render some text like ' this is an important alert '
- lets go to the html page and consume that component
  - if our app is not running we can simply run npm start but if it is we should see the changes automatically without refreshing

#### Here we go we have created our very first component now but is very basic
#### so lets make our component a little more flexible
- we are going to use Props to allow the consumer to configure the message
- lets go back to our editor and import the Prop Decorator from Stencil
- we create a prop decorator called message and we default it to ' ', and then we simply add the prop to be rendered { file_two }
- if we look into the page we get ' ', because is defaulted to the same thing which means is working
    - but if we pass in the prop from the consumer we now see that the message has changed to 'this is a very important alert!' 
    
- Additionally we can interact with the component using simply javascript like so, 
- lets create a button inside of the html 
    - we create a button, 
    - get reference to the button 
    - add event listener f
    - inside we get a reference to the alert
    - and we change the text of the alert { file_tree } 
    - we go to the rendered page and we can see that the text has changed

#### one important thing to remember here is that when the props change the component is re rendered lets check that by adding a simple console.log to the render method 

- lets go to the scss file and give that component some style by adding some classes { file_four } i have the styles set  since the talk is not really about css. { file_five }
- we are going to change the component to render a p tag rather than a div tag to prep my self to the next topic
- since we have change the style we need to refresh the page to load the styles and now we see that our component has changed
- "THIS IS LOO KING FANTASTIC" since we are able to encapsulate behavior we can also encapsulate styles,
- which brings me to the next topic, 

#### encapsulate styles
- lets double check and make sure that our styles are indeed encapsulated,
- we are going to add another p tag to our html to make sure our styles are encapsulated. <p class="alert alert-info">More important stuff!</p> { file_six }
- we can now go to the render page and 'oh no ivan what is going on' we can see that our styles have leaked out
- so what is going on?
- lets inspect the element using dev tools and we can se our paragraph tag's styles are coming from a global style that has been injected that is obviously going to get picked up 
- at this moment the component isn't encapsulated so what can we do?
- Stencil simplifies this for us by providing the shadow dom to make sure we encapsulate the styles and we do that in the component decorator by turning th shadow dom to true
- lets see what it looks like, it looks like it worked so our styles are only been applied to the component itself by leveraging the use of the shadow dom
- Lets think about the consumers of the components what if they do want to change the style of the component in this example 
- what if they want to change the size of the font? at the moment they cant really do that
- lets prove that by trying to select the p tag inside of the console. document.querySelector( "p" ) returns only one
- you could say that we can try to select the class and then add styles on those classes but at the moment is kinda glitch and at the same time you are not using stencil properly
    - for this you could simply use scoped styles, so lets change that to scoped styles 
    - as you can see the styles are not leaked and we can simply query the p tag and add styles to it
- when architecture a component you need to keep this in mind do you want the consumer to be able to change and manipulate the style?
- this is a very important decision if you are going to use the shadow dome


#### More flexible with different kinds | types 
- we start by adding a prop to our component that is going to hold the types of the prop @Prop() kind: "info" | "success" | "error" | "warning" = "info";  { file_seven }
- we add the class to be more dynamic in the p tag 
- so now we can remove the colors from the main p and split them into other classes  { file_eight } 
- once we do that we can now go to the html page and consume this components { file_nine }
- we can see beautiful alerts now, before we move on to the next topic we need to clean our index.html so we are left with the alerts only





```bash
    - we can use stenci
npm install @stencil/sass --save-dev
```

To run the unit tests for the components, run:

```bash
npm test
```

Need help? Check out our docs [here](https://stenciljs.com/docs/my-first-component).

## Naming Components

When creating new component tags, we recommend _not_ using `stencil` in the component name (ex: `<stencil-datepicker>`). This is because the generated component has little to nothing to do with Stencil; it's just a web component!

Instead, use a prefix that fits your company or any name for a group of related components. For example, all of the Ionic generated web components use the prefix `ion`.

## Using this component

### Script tag

- [Publish to NPM](https://docs.npmjs.com/getting-started/publishing-npm-packages)
- Put a script tag similar to this `<script src='https://unpkg.com/my-component@0.0.1/dist/mycomponent.js'></script>` in the head of your index.html
- Then you can use the element anywhere in your template, JSX, html etc

### Node Modules

- Run `npm install my-component --save`
- Put a script tag similar to this `<script src='node_modules/my-component/dist/mycomponent.js'></script>` in the head of your index.html
- Then you can use the element anywhere in your template, JSX, html etc

### In a stencil-starter app

- Run `npm install my-component --save`
- Add an import to the npm packages `import my-component;`
- Then you can use the element anywhere in your template, JSX, html etc
