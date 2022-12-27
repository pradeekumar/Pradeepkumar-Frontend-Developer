import useFetch from "../../hooks/UseFetch";
import {useState} from "react";
import ProductList from "./ProducList";


export default function ProductSaction() {
    let formFields = {status: '', capsuleID: '', type: ''}
    const [search, setSearchData] = useState(formFields)

    let apiURL = `https://api.spacexdata.com/v3/capsules?status=${search.status}&capsule_id=${search.capsuleID.toLowerCase()}&type=${search.type}`;
    const {isLoading, apiData, apiError} = useFetch('get', apiURL);

    function handleOnChangeEvent(event) {
        setSearchData(preState => {
            return {
                ...preState,
                [event.target.name]: event.target.value
            }
        })
    }

    function clearSearch() {
        setSearchData(preState => {
            return {
                ...formFields
            }
        })
    }

    return (
        <section className="bg-white">
            <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16">
                <form className="search--form">
                    <div className="flex flex-wrap -mx-1 lg:-mx-4">
                        <div className="col p-4">
                            <label className="block mb-2 text-sm font-bold text-gray-700">Status</label>
                            <select name="status" className="rounded shadow border px-3 py-2" value={search.status}
                                    onChange={handleOnChangeEvent}>
                                <option value="">-Select Status-</option>
                                <option value="active">Active</option>
                                <option value="retired">Retired</option>
                                <option value="unknown">Unknown</option>
                            </select>
                        </div>
                        <div className="col p-4">
                            <label htmlFor="type"
                                   className="block mb-2 text-sm font-bold text-gray-700">Type</label>
                            <select name="type" className="rounded shadow border px-3 py-2" value={search.type}
                                    onChange={handleOnChangeEvent}>
                                <option value="">-Select Type-</option>
                                <option value="Dragon 1.0">Dragon 1.0</option>
                                <option value="Dragon 1.1">Dragon 1.1</option>
                                <option value="Dragon 2.0">Dragon 2.0</option>
                            </select>
                        </div>
                        <div className="col p-4">
                            <label className="block mb-2 text-sm font-bold text-gray-700">Capsule ID</label>
                            <input type="text" value={search.capsuleID} className="rounded shadow border px-3 py-2" name="capsuleID"
                                   onChange={handleOnChangeEvent}/>
                        </div>
                        <div className="col p-4">
                            <label className="opacity-0 block mb-2 text-sm font-bold text-gray-700">Clear</label>
                            <button type="button" onClick={clearSearch} className="inline-flex items-center justify-center px-5 py-2 mr-3 text-base font-medium text-center text-white rounded-lg bg-black">Clear Search</button>
                        </div>

                    </div>
                </form>
                {apiError && <div> Something went wrong,Please</div>}
                {isLoading && <div> Loading...</div>}
                {apiData.length === 0 && <div>No Data Found</div>}
                {apiData.length > 0 &&  <ProductList items={apiData} /> }
            
            </div>
        </section>
    )

}