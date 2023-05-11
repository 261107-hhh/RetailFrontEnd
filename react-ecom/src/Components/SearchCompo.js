import React from 'react'

const SearchCompo = ({par}) => {
    console.log("This is compo: "+{par});
    console.log("This is compo: "+par);
    console.log("This is compo: "+JSON.stringify(par));
    return (
        <div>
            <h1>
                New Component
            </h1>
            <div className='resultList'>
                {/* {par.map((res, id) => { */}
                    
                        <>
                            {/* <a key={id} href={proLink + `${res.productId}`}> */}
                            <div>
                                {/* {res.productName} */}
                                hello
                            </div>
                            {/* </a> */}
                        </>
                    
                {/* })} */}
            </div >
        </div>
    )
}

export default SearchCompo
