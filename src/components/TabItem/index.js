// Write your code here
import {Component} from 'react'
import './index.css'

class TabItem extends Component {
  handleTabClick = () => {
    const {tabItem, handleTabChange} = this.props
    handleTabChange(tabItem.tabId)
  }

  render() {
    const {tabItem, isActive} = this.props

    return (
      <li
        className={`tab-item ${isActive ? 'active' : ''}`}
        onClick={this.handleTabClick}
      >
        <button>{tabItem.displayText}</button>
      </li>
    )
  }
}

export default TabItem
