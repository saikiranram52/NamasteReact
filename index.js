{/* <div id="parent">
        <div id="child">
            <h1>I'm h1 tag</h1>
        </div>
    </div> */}
{/* <div id="parent">
        <div id="child">
            <h1>I'm h1 tag</h1>
            <h2>I'm h2 tag</h2>
        </div>
        <div id="child2">
            <h1>I'm h1 tag</h1>
            <h2>I'm h1 tag</h2>
        </div>
    </div> */}

const heading=React.createElement("h1",{id:"heading",abc:"xyz"},"Hello world1 from react")
// const root=ReactDOM.createRoot(document.getElementById("root"))
// // root.render(heading)

// To create nested structure as shown in above 1 -5 lines 
const parent=React.createElement("div",{id:"parent"},
    /* parent is type Object 
    ReactElement(Object)=>HTML(Browser understands) */
React.createElement("div",{id:"child"},
React.createElement("h1",{},"Hello world1 from nested")))

//To created sibling structure as shown in above 6-10 lines 
const sibling=React.createElement("div",{id:"parent"},
    React.createElement("div",{id:"child"},
    [React.createElement("h1",{},"I'm h1 tag"),React.createElement("h2",{},"I'm h2 tag")]))

//To create multiple sibling structure as shown in above 6-15 lines 
const multiple_sibling=React.createElement("div",{id:"parent"},
[React.createElement("div",{id:"child"},[React.createElement("h1",{},"I'm h1 tag"),React.createElement("h2",{},"I'm h2 tag")]),
React.createElement("div",{id:"child1"},[React.createElement("h1",{},"I'm h1 tag"),React.createElement("h2",{},"I'm h2 tag")])
])
ReactDOM.render(multiple_sibling,document.getElementById("root"))

// JSX makes easier to create above 