class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isShown: false,
    }
  }

  handleToggle = () => {
    this.setState((prevState) => ({
      isShown: !prevState.isShown,
    }))
  }

  render() {
    return (
      <div>
        <button className="button-big" onClick={this.handleToggle}>
          {this.state.isShown ? 'Hide' : 'Show'}
        </button>
      </div>
    )
  }
}

const container = document.getElementById('App')
const root = ReactDOM.createRoot(container)
root.render(<App />)
