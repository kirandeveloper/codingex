import React, { Component } from "react";
import {QUESTIONS} from "./questions";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentQuestionIndex: 0,
      currentScore: 0,
      overallScore: 0,
      totalRuns: 0,
    };
  }

  handleAnswer = (answer) => {
    const { currentQuestionIndex, currentScore, overallScore, totalRuns } = this.state;
    const newScore = answer ? currentScore + 1 : currentScore;

    if (currentQuestionIndex < Object.keys(QUESTIONS).length - 1) {
      this.setState({
        currentQuestionIndex: currentQuestionIndex + 1,
        currentScore: newScore,
      });
    } else {
      this.setState({
        overallScore: overallScore + newScore + (answer ? 1 : 0),
        totalRuns: totalRuns + 1,
        currentQuestionIndex: 0,
        currentScore: 0,
      });
    }
  };

  render() {
    const { currentQuestionIndex, overallScore, totalRuns } = this.state;
    return (
      <div className="main__wrap">
        <main className="container">
          <div>
              <h1>Questions</h1>
              <p>{QUESTIONS[currentQuestionIndex + 1]}</p>
              <button onClick={() => this.handleAnswer(true)} className="btnyes">Yes</button>
              <button onClick={() => this.handleAnswer(false)} className="btnno">No</button>

              {currentQuestionIndex === 0 && totalRuns > 0 && (
                <>
                  <h2>Your score for this run: {overallScore / totalRuns}</h2>
                  <h3>Overall score across all runs: {overallScore}</h3>
                  <h4>Number of runs: {totalRuns}</h4>
                </>
              )}
          </div>
        </main>
      </div>
    );
  }
}

export default App;
