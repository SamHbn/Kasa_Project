import { useRef, useState } from 'react'
import vector from '../../Assets/Vector.png'
import './Index.scss'

export default function Collapse({
  title,
  content,
  className,
  titleTag = 'h2',
}) {
  const [isOpen, setIsOpen] = useState(false)
  const contentRef = useRef(null)

  const HeadingTag = titleTag

  return (
    <div className={`collapse ${className || ''}`}>
      <div className="collapse-bar">
        <HeadingTag>{title}</HeadingTag>
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
