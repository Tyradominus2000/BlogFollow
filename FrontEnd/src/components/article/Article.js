import "./Article.scss";

/**
 *
 * @param {String} title Title of the Article
 * @param {Object} image Object of an Image
 ** @param {String} image.src Src of the image Object
 ** @param {String} image.alt Alt of the image Object
 * @param {String} description Description of the Article
 * @returns Article
 */
export default function Article({
  title = "Default Title",
  image = {
    src: "https://climate.onep.go.th/wp-content/uploads/2020/01/default-image.jpg",
    alt: "default image",
  },
  description = "Default description",
}) {
  return (
    <div className="container d-flex flex-column">
      <div className="d-flex title">
        <h2>{title}</h2>
      </div>
      <div className="image">
        <img src={image.src} alt={image.alt} />
      </div>
      <div className="description">
        <p>{description}</p>
      </div>
    </div>
  );
}
