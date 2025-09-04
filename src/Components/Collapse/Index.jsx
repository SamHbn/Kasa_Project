import { useRef, useState } from 'react'
import vector from '../../Assets/Vector.png'
import './Index.scss'

export default function Collapse({ title, content }) {
  const [isOpen, setIsOpen] = useState(false)
  const contentRef = useRef(null)

  return (
    <div className="collapse">
      <div className="collapse-bar">
        <h2>{title}</h2>
        <button
          className={isOpen ? 'open' : ''}
          onClick={() => setIsOpen(!isOpen)}
        >
          <img src={vector} />
        </button>
      </div>
      <div
        ref={contentRef}
        className="collapse-content"
        style={{
          height: isOpen ? contentRef.current?.scrollHeight : 0,
        }}
      >
        <p>{content}</p>
      </div>
    </div>
  )
}
