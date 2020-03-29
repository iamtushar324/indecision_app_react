"use strict";

console.log('App.js is running!');

var lists = [];
var count = 0;
var todo = "";

function formSubmit(e) {
    e.preventDefault();

    var value = e.target.elements.input.value;

    if (value) {
        lists.push(value);
    }

    e.target.elements.input.value = "";
    rerender();
}

function rerender() {
    var Xlists = lists.map(function (li) {
        return React.createElement(
            "li",
            { key: count++ },
            "  ",
            li,
            " "
        );
    });

    var App = React.createElement(
        "div",
        null,
        React.createElement(
            "ul",
            null,
            Xlists
        ),
        React.createElement(
            "form",
            { onSubmit: formSubmit },
            React.createElement("input", { id: "input" }),
            React.createElement(
                "button",
                { type: "submit" },
                "Add"
            ),
            React.createElement(
                "button",
                { onClick: rem },
                "Remove All"
            ),
            React.createElement(
                "button",
                { onClick: ran },
                "What should I do "
            )
        ),
        todo
    );

    ReactDOM.render(App, root);
}

function ran() {

    var l = lists.length;
    var todoIndex = Math.round(Math.random() * l);

    todo = lists[todoIndex];
}

function rem() {

    lists = [];
    count = 0;
    // rerender()
}

var root = document.getElementById('root');

rerender();
