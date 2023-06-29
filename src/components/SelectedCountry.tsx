import Country from "../models/Country"

interface SelectedCountryProps {
    selectedCountry: Country;
}

function SelectedCountry({ selectedCountry }: SelectedCountryProps): JSX.Element {
    return (
        <p data-testid="randomCountry" >{selectedCountry.flag} {selectedCountry.name.common}!!!!! {selectedCountry.flag}</p>
    )
}

export default SelectedCountry