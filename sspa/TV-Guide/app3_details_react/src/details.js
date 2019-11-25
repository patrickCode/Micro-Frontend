import React from "react";
import { connect } from "react-redux";

class Details extends React.Component {
  render() {
    return (
      <div>
        <h1>Details</h1>
        <span>Program Name: {this.props.program}</span>
        <span>Released On: {this.props.releasedOn}</span>
        <span>Director: {this.props.director}</span>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
    return {
        program: state.selectedProgram.name,
        releasedOn: state.selectedProgram.releasedOn,
        director: state.selectedProgram.director
    }
}

export const ProgramDetails = connect(mapStateToProps, null)(Details);