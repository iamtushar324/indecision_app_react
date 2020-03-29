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
                { disabled: lists.length == 0 ? true : false, onClick: ran },
                "What should I do "
            ),
            React.createElement(
                "button",
                { onClick: to },
                Toggle
            ),
            bool ? "It is ON " : "Its OFF"
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

var bool = true;
var Toggle = "ON";
function to() {

    if (bool) {
        bool = false;
        Toggle = "OFF";
    } else {
        bool = true;
        Toggle = "ON";
    }
}

var root = document.getElementById('root');

rerender();
