console.log('App.js is running!');

let lists = [];
let count = 0;
let todo = "";


function formSubmit(e) {
    e.preventDefault();

    let value = e.target.elements.input.value

    if (value) {
        lists.push(value)
    }

    e.target.elements.input.value = "";
    rerender();


}


function rerender() {
    let Xlists = lists.map((li) => {
        return (<li key={count++}>  {li} </li>)
    })


    const App = (
        <div>
            <ul>
                {Xlists}
            </ul>

            <form onSubmit={formSubmit}>
                <input id="input"></input>
                <button type="submit">Add</button>
                <button onClick={rem}>Remove All</button>
                <button onClick={ran}>What should I do </button>

            </form>

            {todo}

        </div>



    );

    ReactDOM.render(App, root);
}



function ran() {

    const l = lists.length;
    let todoIndex = Math.round(Math.random() * l);

    todo = lists[todoIndex]

}



function rem() {

    lists = [];
    count = 0;
    // rerender()
}



var root = document.getElementById('root');

rerender();


