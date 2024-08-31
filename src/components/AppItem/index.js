// Write your code here
import './index.css'

const AppItem = props => {
  const {appDetails} = props
  const {appName, imageUrl} = appDetails

  return (
    <li className="item">
      <img src={imageUrl} className="img" alt={appName} />
      <p className="name">{appName}</p>
    </li>
  )
}

export default AppItem
