class App extends React.Component {

    constructor(props) {
        super(props);
        this.add = this.add.bind(this)
        this.todo = this.todo.bind(this)

        this.state = {
            options: []

        };
    }

    add(text) {
        this.setState((prevState) => {
            let st = prevState.options
            st.push(text)
            return {
                options: st

            }
        })
    }

    todo() {
        let ra = Math.round(Math.random() * this.state.options.length)

        console.log(ra)

        alert(this.state.options[ra])
    }



    render() {




        return (

            <div>
                <Header />
                <Action
                    isempty={this.state.options.length == 0 ? true : false}
                    todo={this.todo}
                />
                <Options optionsArr={this.state.options} />
                <AddOption ad={this.add} />


            </div>




        );
    }
}



class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>Indecision</h1>
                <h2>Put your life in the hands of a computer</h2>
            </div>
        );
    }
}

class Action extends React.Component {



    render() {
        return (
            <div>
                <button disabled={this.props.isempty} onClick={this.props.todo}>What should I do?</button>
            </div>
        );
    }
}

class RemoveAll extends React.Component {
    render() {
        return (
            <button>Remove All </button>
        )
    }
}




class Options extends React.Component {
    render() {
        let i = 0
        let op = this.props.optionsArr.map((o) => {
            return <Option text={o} key={i++} />
        })


        return (
            <ol>
                {op}
            </ol>
        );
    }
}

class Option extends React.Component {
    render() {



        return (
            <li >
                {this.props.text}
                <button > remove</button>
            </li>
        )

    }
}

class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.handleAdd = this.handleAdd.bind(this)
    }




    handleAdd(e) {
        e.preventDefault();
        let text = e.target.elements.text.value.trim();
        if (text) {

            this.props.ad(text)
            e.target.elements.text.value = ""
        }


    }




    render() {
        return (
            <form onSubmit={this.handleAdd}>
                <input name="text" ></input>
                <button>Add</button>
            </form>
        );
    }
}


ReactDOM.render(<App />, document.getElementById('root'));