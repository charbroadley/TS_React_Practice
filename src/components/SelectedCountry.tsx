import Country from "../models/Country"

interface SelectedCountryProps {
    selectedCountry: Country;
}

function SelectedCountry ({selectedCountry}: SelectedCountryProps): JSX.Element {

    console.log(selectedCountry.name.common)

    return (
        <h1>{selectedCountry.flag} {selectedCountry.name.common}!!!!! {selectedCountry.flag}</h1>
    )
}

export default SelectedCountry