export function cardTmpCountrySearch({
  name,
  capital,
  population,
  languages,
  flags,
}) {
  return `<h2>Country: ${name.official}</h2>
  <p>Capital: ${capital}</p>
  <p>Population: ${population}</p>
  <p>languages: ${Object.values(languages)}</p>
  <img src="${flags.svg}" alt="${flags.alt}" width = 200>`;
}

export function cardTmpCountriesList({ name, flags }) {
  return ` <li style = "display: flex; margin-bottom: 30px ">
  <img style ="margin-right: 30px " width = 60, src="${flags.svg}" alt="${flags.alt}"> 
  <h2>
    Country:${name.official}
  </h2>
       </li>
  `;
}
