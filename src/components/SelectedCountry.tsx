import Country from "../models/Country"

interface SelectedCountryProps {
    selectedCountry: Country;
}

function SelectedCountry ({selectedCountry}: SelectedCountryProps): JSX.Element {

    console.log(selectedCountry.name.common)

    return (
        <p>{selectedCountry.flag} {selectedCountry.name.common}!!!!! {selectedCountry.flag}</p>
    )
}

export default SelectedCountry