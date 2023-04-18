import {Component} from 'react'
import './index.css'

class TextFile extends Component {
  state = {isEdit: false, text: ''}

  onChangeButton = () => {
    this.setState(prevState => ({
      isEdit: !prevState.isEdit,
    }))
  }

  onChangeText = event => {
    this.setState({text: event.target.value})
  }

  render() {
    const {isEdit, text} = this.state
    const styleName = isEdit ? 'card1' : ''
    const styleName1 = isEdit ? '' : 'card1'

    return (
      <div className="bg-container">
        <div className="bg-card">
          <h1 className="heading">Editable Text Input</h1>
          <div className={`card ${styleName}`}>
            <input
              type="text"
              value={text}
              className="input"
              onChange={this.onChangeText}
            />
            <button
              type="button"
              className="button"
              onClick={this.onChangeButton}
            >
              Save
            </button>
          </div>
          <div className={`card ${styleName1}`}>
            <p className="paragrph">{text}</p>
            <button
              type="button"
              className="button"
              onClick={this.onChangeButton}
            >
              Edit
            </button>
          </div>
        </div>
      </div>
    )
  }
}
export default TextFile