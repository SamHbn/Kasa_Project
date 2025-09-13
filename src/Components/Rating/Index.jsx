import { FaStar } from 'react-icons/fa'
import './Index.scss'

export default function Rating({ value }) {
  return (
    <div className="rating">
      {[...Array(5)].map((_, i) => (
        <FaStar key={i} color={i < value ? '#ff6060' : '#E3E3E3'} />
      ))}
    </div>
  )
}
