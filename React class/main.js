const parent = document.getElementById("root");

const node = React.createElement("p", { style: { color: "red" } }, "This is a red paragraph.");
const nodel = React.createElement("h1", {}, "Shopping Cart");

const item1 = React.createElement("li", {}, "item-1");
const item2 = React.createElement("li", {}, "item-2");
const list = React.createElement("ul", {}, [item1, item2]);

const branch = React.createElement(
    "ul",
    {},
    [
        React.createElement("li", {}, "CSE"),
        React.createElement("li", {}, "IT"),
        React.createElement("li", {}, "AIDS")
    ]
);

const root = ReactDOM.createRoot(parent);
root.render([node, nodel, list, branch]);
