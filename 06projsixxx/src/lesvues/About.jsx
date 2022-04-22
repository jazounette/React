import React, { Component } from 'react';

class About extends Component {
    render() {
        return (
            <div className='col-9 centre'>
                <p>
                React (also known as React.js or ReactJS) is a free and open-source front-end JavaScript library
                for building user interfaces based on UI components. It is maintained by Meta (formerly Facebook)
                and a community of individual developers and companies.React can be used as a base in the development
                of single-page, mobile, or server-rendered applications with frameworks like Next.js. However,
                React is only concerned with state management and rendering that state to the DOM, so creating React
                applications usually requires the use of additional libraries for routing, as well as certain client-side functionality.
                </p>
                <h4>Virtual DOM</h4>
                <p>
                Another notable feature is the use of a virtual Document Object Model, or virtual DOM. React creates
                an in-memory data-structure cache, computes the resulting differences, and then updates the browser's
                displayed DOM efficiently. This process is called reconciliation. This allows the programmer to write
                code as if the entire page is rendered on each change, while the React libraries only render subcomponents
                that actually change. This selective rendering provides a major performance boost. It saves the effort
                of recalculating the CSS style, layout for the page and rendering for the entire page.
                </p>
                <h4>Lifecycle methods</h4>
                <p>Lifecycle methods for class-based components use a form of hooking that allows the execution of code at set points during a component's lifetime.</p>
                <ul>
                    <li>shouldComponentUpdate allows the developer to prevent unnecessary re-rendering of a component by returning false if a render is not required.</li>
                    <li>componentDidMount is called once the component has "mounted" (the component has been created in the user interface, often by associating it with a DOM node). This is commonly used to trigger data loading from a remote source via an API.</li>
                    <li>componentWillUnmount is called immediately before the component is torn down or "unmounted". This is commonly used to clear resource-demanding dependencies to the component that will not simply be removed with the unmounting of the component (e.g., removing any setInterval() instances that are related to the component, or an "eventListener" set on the "document" because of the presence of the component)</li>
                    <li>render is the most important lifecycle method and the only required one in any component. It is usually called every time the component's state is updated, which should be reflected in the user interface.</li>
                </ul>
            </div>
        );
    }
}

export default About;