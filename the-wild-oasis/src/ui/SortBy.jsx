import {useSearchParams} from "react-router-dom";
import Select from "./Select";

function SortBy({options}) {
    const [searchParams, setSearchParams] = useSearchParams();
    const sortBy = searchParams.get("sortBy") || "";
    function handleChange(e) {
        searchParams.set("sortBy", e.target.value);
        setSearchParams(searchParams);
    }

    return (
        <div>
            <Select type="white" value={sortBy} onChange={handleChange} options={options} />
        </div>
    );
}

export default SortBy;
