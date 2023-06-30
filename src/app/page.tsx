export default async function Home() {
  const res = await fetch(
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000/api/hello"
      : "https://qa-major-project-next.vercel.app/api/hello",
    {}
  );
  const data = await res.text();
  return (
    <div>
      <h1>Hello</h1>
      <h2>Fetch data from the api:</h2>
      <p>{data}</p>

      <h2>Collecting Form Data</h2>

      <ul className="nhsuk-grid-row nhsuk-card-group">
        <li className="nhsuk-grid-column-one-half nhsuk-card-group__item">
          <div className="nhsuk-card nhsuk-card--clickable">
            <div className="nhsuk-card__content">
              <h2 className="nhsuk-card__heading nhsuk-heading-m">
                <a className="nhsuk-card__link" href="/single-page-form">
                  Single Page Form
                </a>
              </h2>
              <p className="nhsuk-card__description">
                Multiple form fields on a single page
              </p>
            </div>
          </div>
        </li>
        <li className="nhsuk-grid-column-one-half nhsuk-card-group__item">
          <div className="nhsuk-card nhsuk-card--clickable">
            <div className="nhsuk-card__content">
              <h2 className="nhsuk-card__heading nhsuk-heading-m">
                <a
                  className="nhsuk-card__link"
                  href="/multi-page-form/nhs-number"
                >
                  Multiple Page Form
                </a>
              </h2>
              <p className="nhsuk-card__description">
                Transactional form split across multiple pages
              </p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}
