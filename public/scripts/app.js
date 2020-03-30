"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
    _inherits(App, _React$Component);

    function App(props) {
        _classCallCheck(this, App);

        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

        _this.add = _this.add.bind(_this);
        _this.todo = _this.todo.bind(_this);

        _this.state = {
            options: []

        };
        return _this;
    }

    _createClass(App, [{
        key: "add",
        value: function add(text) {
            this.setState(function (prevState) {
                var st = prevState.options;
                st.push(text);
                return {
                    options: st

                };
            });
        }
    }, {
        key: "todo",
        value: function todo() {
            var ra = Math.round(Math.random() * this.state.options.length);

            console.log(ra);

            alert(this.state.options[ra]);
        }
    }, {
        key: "render",
        value: function render() {

            return React.createElement(
                "div",
                null,
                React.createElement(Header, null),
                React.createElement(Action, {
                    isempty: this.state.options.length == 0 ? true : false,
                    todo: this.todo
                }),
                React.createElement(Options, { optionsArr: this.state.options }),
                React.createElement(AddOption, { ad: this.add })
            );
        }
    }]);

    return App;
}(React.Component);

var Header = function (_React$Component2) {
    _inherits(Header, _React$Component2);

    function Header() {
        _classCallCheck(this, Header);

        return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
    }

    _createClass(Header, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "h1",
                    null,
                    "Indecision"
                ),
                React.createElement(
                    "h2",
                    null,
                    "Put your life in the hands of a computer"
                )
            );
        }
    }]);

    return Header;
}(React.Component);

var Action = function (_React$Component3) {
    _inherits(Action, _React$Component3);

    function Action() {
        _classCallCheck(this, Action);

        return _possibleConstructorReturn(this, (Action.__proto__ || Object.getPrototypeOf(Action)).apply(this, arguments));
    }

    _createClass(Action, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "button",
                    { disabled: this.props.isempty, onClick: this.props.todo },
                    "What should I do?"
                )
            );
        }
    }]);

    return Action;
}(React.Component);

var RemoveAll = function (_React$Component4) {
    _inherits(RemoveAll, _React$Component4);

    function RemoveAll() {
        _classCallCheck(this, RemoveAll);

        return _possibleConstructorReturn(this, (RemoveAll.__proto__ || Object.getPrototypeOf(RemoveAll)).apply(this, arguments));
    }

    _createClass(RemoveAll, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "button",
                null,
                "Remove All "
            );
        }
    }]);

    return RemoveAll;
}(React.Component);

var Options = function (_React$Component5) {
    _inherits(Options, _React$Component5);

    function Options() {
        _classCallCheck(this, Options);

        return _possibleConstructorReturn(this, (Options.__proto__ || Object.getPrototypeOf(Options)).apply(this, arguments));
    }

    _createClass(Options, [{
        key: "render",
        value: function render() {
            var i = 0;
            var op = this.props.optionsArr.map(function (o) {
                return React.createElement(Option, { text: o, key: i++ });
            });

            return React.createElement(
                "ol",
                null,
                op
            );
        }
    }]);

    return Options;
}(React.Component);

var Option = function (_React$Component6) {
    _inherits(Option, _React$Component6);

    function Option() {
        _classCallCheck(this, Option);

        return _possibleConstructorReturn(this, (Option.__proto__ || Object.getPrototypeOf(Option)).apply(this, arguments));
    }

    _createClass(Option, [{
        key: "render",
        value: function render() {

            return React.createElement(
                "li",
                null,
                this.props.text,
                React.createElement(
                    "button",
                    null,
                    " remove"
                )
            );
        }
    }]);

    return Option;
}(React.Component);

var AddOption = function (_React$Component7) {
    _inherits(AddOption, _React$Component7);

    function AddOption(props) {
        _classCallCheck(this, AddOption);

        var _this7 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

        _this7.handleAdd = _this7.handleAdd.bind(_this7);
        return _this7;
    }

    _createClass(AddOption, [{
        key: "handleAdd",
        value: function handleAdd(e) {
            e.preventDefault();
            var text = e.target.elements.text.value.trim();
            if (text) {

                this.props.ad(text);
                e.target.elements.text.value = "";
            }
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "form",
                { onSubmit: this.handleAdd },
                React.createElement("input", { name: "text" }),
                React.createElement(
                    "button",
                    null,
                    "Add"
                )
            );
        }
    }]);

    return AddOption;
}(React.Component);

ReactDOM.render(React.createElement(App, null), document.getElementById('root'));
