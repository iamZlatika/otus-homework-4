import React, { Component } from "react";
import Field from "components/Field";
import { nextGeneration, resizeField } from "services/game-service";

interface GameProps {
  height: number;
  width: number;
  isActive?: boolean;
  updateInterval?: number;
  initialField: boolean[][];
}

interface GameState {
  field: boolean[][];
}

export default class Game extends Component<GameProps, GameState> {
  intervalID: ReturnType<typeof setInterval>;

  constructor(props: GameProps) {
    super(props);

    this.state = { field: [] };

    this.onClick = this.onClick.bind(this);
    this.nextGeneration = this.nextGeneration.bind(this);
  }

  componentDidMount() {
    const field = this.props.initialField;
    this.setState({ field });
  }

  onClick(x: number, y: number): void {
    const newField = this.state.field.map((row, i) => (i === x ? [...row] : row));
    newField[x][y] = !newField[x][y];
    this.setState({ field: newField });
  }

  nextGeneration(): void {
    this.setState({ field: nextGeneration(this.state.field) });
  }

  componentDidUpdate(prevProps: GameProps) {
    if (prevProps.height !== this.props.height || prevProps.width !== this.props.width) {
      const field = resizeField(this.props.height, this.props.width, this.state.field);
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
    if (prevProps.initialField !== this.props.initialField) {
      this.setState({ field: this.props.initialField });
    }
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  render() {
    return (
      <>
        <Field field={this.state.field} onClick={this.onClick} />
      </>
    );
  }
}
