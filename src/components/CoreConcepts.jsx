//In this function props are destructured as the same object key names in the core object
export default function CoreConcepts({ image, title, description }) {
    return (
      <>
        <li>
          <img src={image} />
          <h2>{title}</h2>
          <p>{description}</p>
        </li>
      </>
    )
  }