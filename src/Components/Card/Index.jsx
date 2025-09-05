import './Index.scss'

export default function Card({ title, cover }) {
  return (
    <div className="container-card">
      <img src={cover} alt={title} />
      <div className="overlay"></div>
      <h2>{title}</h2>
    </div>
  )
}
