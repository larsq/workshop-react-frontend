import {Country} from "../model/country";

export interface NarrativeCountriesElementProps {
  country: Country
}

function generateUrl(country: Country) {
  return `https://flagcdn.com/64x48/${country.countryCode}.png`
}

export function NarrativeCountriesElement(props: NarrativeCountriesElementProps) {
  return <div className="narrative__country"><img src={generateUrl(props.country)}
                                                  alt={props.country.countryCode}></img>
  </div>
}
