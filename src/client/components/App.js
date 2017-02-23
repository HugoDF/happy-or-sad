import React, { PropTypes } from 'react';

import { connect } from 'react-redux';

import {
  updateText,
  fetchMoodAnalysis
} from '../actions';

import 'reset-css';
import './App.css';

import StatusOverlay from './StatusOverlay';

export class App extends React.Component {
  handleTextChange(e) {
    e.preventDefault();
    const { value } = e.target;
    this.props.updateText(value);
  }
  submitForm() {
    const { text } = this.props;
    this.props.analyseMood(text);
  }
  handleSubmit(e) {
    e.preventDefault();
    this.submitForm()
  }
  handleKeyDown(e) {
    if(!(e.keyCode == 13 && e.metaKey)) {
      return null;
    }
    this.submitForm();
  }
  render() {
    const { mood, text, isLoading, error } = this.props;
    const className = 'App ' + mood;
    return (
      <div className={className}>
        <StatusOverlay isLoading={isLoading} error={error} />
        <h1>Happy or Sad?<br/>{mood}</h1>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <textarea
            placeholder="Put some text here to see if it's happy or sad"
            onKeyDown={this.handleKeyDown.bind(this)}
            onChange={this.handleTextChange.bind(this)}
            className="text-input"
            value={text} />
          <div>
            <button
              className="submit-button"
              type="submit">
              Find My Mood
            </button>
          </div>
        </form>
      </div>
    );
  }
}

App.propTypes = {
  mood: PropTypes.string,
  text: PropTypes.string,
  updateText: PropTypes.func.isRequired,
  analyseMood: PropTypes.func.isRequired,
};

const mapStateToProps = (state, ownProps) => {
  const { mood, text, isLoading, error } = state;
  return {
    mood,
    text,
    isLoading,
    error
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    updateText: (text) => {
      dispatch(updateText(text));
    },
    analyseMood: (text) => {
      dispatch(fetchMoodAnalysis(text));
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
