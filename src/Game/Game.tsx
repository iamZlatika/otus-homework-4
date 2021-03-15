import React, { Component } from "react";
import Field from "../components/Field";
import GameOfLife from "./game-of-life";
import { generateField, resizeField } from "./game-service";

interface GameProps {
  height: number;
  width: number;
  dencity?: number;
  isActive?: boolean;
  updateInterval?: number;
}

interface GameState {
  field: boolean[][];
}

export default class Game extends Component<GameProps, GameState> {
  intervalID: any;

  constructor(props: GameProps) {
    super(props);

    this.state = { field: [] };

    this.onClick = this.onClick.bind(this);
    this.nextGeneration = this.nextGeneration.bind(this);
  }

  componentDidMount() {
    const field = generateField(this.props.height, this.props.width, this.props.dencity);
    this.setState({ field });
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

  componentDidUpdate(prevProps: GameProps) {
    if (prevProps.height !== this.props.height || prevProps.width !== this.props.width) {
      const field = resizeField(this.props.height, this.props.width, this.state.field);
      this.setState({ field });
    }
    if (prevProps.dencity !== this.props.dencity) {
      const field = generateField(this.props.height, this.props.width, this.props.dencity);
      this.setState({ field });
    }

    if (!prevProps.isActive && this.props.isActive) {
      this.intervalID = setInterval(this.nextGeneration, this.props.updateInterval);
    } else if (prevProps.isActive && !this.props.isActive) {
      clearInterval(this.intervalID);
    }
    if (prevProps.updateInterval !== this.props.updateInterval && this.props.isActive) {
      clearInterval(this.intervalID);
      this.intervalID = setInterval(this.nextGeneration, this.props.updateInterval);
    }
  }

  render() {
    return (
      <>
        <Field field={this.state.field} onClick={this.onClick} />
      </>
    );
  }
}
