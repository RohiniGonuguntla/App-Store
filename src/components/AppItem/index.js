// Write your code here
import './index.css'

const AppItem = ({app}) => (
  <button type="button" className="app-item">
    <li className="app-style">
      <img src={app.imageUrl} alt={app.appName} className="app-image" />
      <p className="app-name">{app.appName}</p>
    </li>
  </button>
)

export default AppItem
