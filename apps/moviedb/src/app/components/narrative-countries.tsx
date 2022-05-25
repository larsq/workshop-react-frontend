import '../styles/narrative-countries.scss'
import {Country} from "../model/country";
import {NarrativeCountriesElement} from "./narrative-countries-element";

export interface NarrativeCountriesProps {
  countries: Country[]
}

export function NarrativeCountries(props: NarrativeCountriesProps) {
  return <section className="narrative__countries">
    {props.countries.map(country => <NarrativeCountriesElement country={country} key={country.countryCode}/>)}
  </section>
}
