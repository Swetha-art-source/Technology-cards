// Write your code here.
import './index.css'

const CardItem = props => {
  const {cardDetails} = props
  const {title, description, className, imgUrl} = cardDetails
  return (
    <li className={`${className} card-item`}>
      <div className="card-heading">
        <h1 className="title">{title}</h1>
        <p className="description">{description}</p>
        <div className="imageUrl">
          <img src={imgUrl} className="image" alt={title} />
        </div>
      </div>
    </li>
  )
}
export default CardItem
