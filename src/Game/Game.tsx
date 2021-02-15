import React, { Component } from "react";
import Field from "../components/Field/Field";
import GameOfLife from "./game-of-life";
import { fetchField } from "./game-service";

interface GameProps {
  height: number;
  width: number;
}

interface GameState {
  field: boolean[][];
}

export default class Game extends Component<GameProps, GameState> {
  constructor(props: GameProps) {
    super(props);

    this.state = { field: [] };

    this.onClick = this.onClick.bind(this);
    this.nextGeneration = this.nextGeneration.bind(this);
  }

  async componentDidMount() {
    const field = await fetchField(this.props.height, this.props.width);
    this.setState({ field });
  }

  shouldComponentUpdate(nextProps: GameProps, nextState: GameState): boolean {
    return (
      nextProps.height !== this.props.height ||
      nextProps.width !== this.props.width ||
      JSON.stringify(this.state.field) !== JSON.stringify(nextState.field)
    );
  }

  onClick(x: number, y: number): void {
    const newField = this.state.field.map((row, i) => (i === x ? [...row] : row));
    newField[x][y] = !newField[x][y];
    this.setState({ field: newField });
  }

  nextGeneration(): void {
    const newField = new GameOfLife(this.state.field).nextGeneration().field;
    this.setState({ field: newField });
  }

  async componentDidUpdate(prevProps: GameProps) {
    if (prevProps.height !== this.props.height || prevProps.width !== this.props.width) {
      const field = await fetchField(this.props.height, this.props.width);
      this.setState({ field });
    }
  }

  render() {
    return (
      <>
        <Field field={this.state.field} onClick={this.onClick} />
        <button className="btn generation" onClick={this.nextGeneration}>
          Next Generation
        </button>
      </>
    );
  }
}
