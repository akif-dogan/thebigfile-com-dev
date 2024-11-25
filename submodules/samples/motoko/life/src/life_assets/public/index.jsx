import * as React from 'react';
import { render } from 'react-dom';
import "nes.css/css/nes.min.css";
import "./styles.css";
import { life } from "../../../declarations/life";

class Life extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grid: 'Grid',
      running: false
    };
  }

  async componentDidMount() {
    const text = await life.current();
    this.setState({ ...this.state, grid: text });
  }

  async doStep() {
    const text = await life.next();
    this.setState({ ...this.state, grid: text });
  }

  async doRun() {
    this.state.running = true;
    while (this.state.running) {
      const text = await life.next();
      this.setState({ ...this.state, grid: text });
    }
  }

  async doPause() {
    this.state.running = false;
  }

  render() {
    return (
        <div className="nes-container with-title is-centered life-title" >
          <p className="title">Live... from BigFile!</p>
	  <p> <pre className="life-grid"> {this.state.grid} </pre> </p>
	  <p>
            <div style={{ "margin": "30px" }}>
              <button className="nes-btn" disabled={this.state.running}
		      onClick={() => this.doStep()}>Step</button>
              <button className="nes-btn" disabled={this.state.running}
		      onClick={() => this.doRun()}>Run</button>
              <button className="nes-btn" disabled={!this.state.running}
		      onClick={() => this.doPause()}>Pause</button>
            </div>
	  </p>
        </div>
    );
  }
}

render(<Life />, document.getElementById('app'));
