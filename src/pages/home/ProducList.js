import { React,  useState }from 'react';
import ReactPaginate from 'react-paginate';
import Product from './Product' 

export default function ProductList(props) {
// Example items, to simulate fetching from another resources.
const items =props.items;
const [modalData,setModalStatus] = useState({
    showModal:false,
    data:{}
})

//shows popus
function toggleModal(item){
    setModalStatus((prevStatus)=> {
        return {
            showModal: !prevStatus.showModal,
            data:{
                ...item,modal:!prevStatus.showModal
            }
        }
    }); 
}

function Modal(){
    return(
        <>
        {
            modalData.showModal && 
            <div id="staticModal" data-modal-backdrop="static" tabindex="-1" aria-hidden="true" class="bg-gray-900 bg-opacity-50 fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full justify-center items-center flex">
                <div class="relative w-full h-full max-w-2xl md:h-auto">
                    <div class="relative bg-white rounded-lg shadow">
                        <div class="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                            <h3 class="text-xl font-semibold text-black">
                            {modalData.data.capsule_serial}
                            </h3>
                            <button type="button" onClick={(e)=>toggleModal({})} class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white">
                                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>  
                            </button>
                        </div>
                    
                        <div class="pace-y-6">
                            <Product item={modalData.data} modal="true"/>
                        </div>
                    </div>
                </div>
            </div>
        }
        </>
        
      
    )
}

function Items({ currentItems }) {
  return (
    <div className='product--lists flex flex-wrap -mx-1 lg:-mx-4'>
      {currentItems &&
        currentItems.map((item,i) => (
            <div key={i} className='bg-white my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3' onClick={(e)=> toggleModal(item)}>
            <Product  item={item}/>
            </div>
        ))}
    </div>
  );
}

function PaginatedItems({ itemsPerPage }) {
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <Modal/>
      <Items currentItems={currentItems} />
      <ReactPaginate
        className="isolate inline-flex -space-x-px rounded-md  pagination"
        activeLinkClassName="relative z-10 inline-flex items-center border border-indigo-500 bg-indigo-50 px-4 py-2 text-sm font-bold"
        pageLinkClassName="relative z-10 inline-flex items-center border px-4 py-2 text-sm font-medium"
        previousClassName='relative inline-flex items-center rounded-l-md border bg-white px-2 py-2 text-sm font-medium'
        nextClassName='relative inline-flex items-center rounded-r-md border bg-white px-2 py-2 text-sm font-medium'
        previousLinkClassName='previousLinkClassName'
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={6}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      />
    </>
  );
}

return  <PaginatedItems itemsPerPage={6} />
}