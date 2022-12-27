export default function Product(props) {
    const item = props.item;
    return (<>
       
            <div className="product  p-6 rounded-lg shadow-lg ">
                {!item.modal && <h2 className="mb-2 font-black">{item.capsule_serial}</h2>}
                {<p className="mb-4 text-grey-dark text-sm font-normal">{item.details}
                </p>}
                <table className="table-auto text-sm">
                    <tbody>
                    <tr className="">
                        <td className="item--title  text-left">ID</td>
                        <td className="font-semibold  text-left capitalize">{item.capsule_id}</td>
                    </tr>
                    <tr>
                        <td className="item--title  text-left"> Status</td>
                        <td className="font-semibold  text-left capitalize">{item.status}</td>
                    </tr>
                    {item.modal && 
                    <tr>
                        <td className="item--title  text-left">Launch</td>
                        <td className="font-semibold  text-left">{item.original_launch}</td>
                    </tr>
                    }
                    <tr>
                        <td className="item--title  text-left">Landings</td>
                        <td className="font-semibold  text-left">{item.landings}</td>
                    </tr>
                    <tr>
                        <td className="item--title  text-left">Type</td>
                        <td className="font-semibold  text-left">{item.type}</td>
                    </tr>
                    <tr>
                        <td className="item--title  text-left">Capsule Reuse Count</td>
                        <td className="font-semibold  text-left">{item.reuse_count}</td>
                    </tr>
                    { item.modal &&
                    <tr>
                        <td className="item--title  text-left">Missions</td>
                        <td className="font-semibold  text-left children">
                            <table className="table-auto text-sm border">
                                <thead className="border-b">
                                <tr>
                                  <th className="border-r">Name</th>
                                  <th className="border-r">Fight</th>
                    
                                </tr>
                            
                                </thead>
                                 {
                                    
                                    item.missions.map((itemM)=>(
                                        <tr className="border-b">
                                            <td className="border-r p-2">{itemM.name}</td>
                                            <td className="border-r p-2">{itemM.flight}</td>
                                        </tr>
                                    ))
                                 }
                                
                            </table>
                        </td>
                    </tr>
                    }
                    </tbody>
                </table>
            </div>
        
    </>)

}