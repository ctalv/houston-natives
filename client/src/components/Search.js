import React, { useState } from 'react'

import { Link } from 'react-router-dom'

function Search({ setSearchOpen, searchOpen }) {
    const {loading, data} = useQuery(QUERY_ALL_PRODUCTS)

    const [searchFilter, setSearchFilter] = useState()


    function handleSearch(e) {
        setSearchFilter(data?.products?.filter(product => {
            return product.name.toLowerCase().includes(e.target.value.toLowerCase())
        }))
    }

    if (loading) return <Loader/>

  return (
    <div className={searchOpen ? 'search-page open': 'search-page'}>
    <div className={searchOpen ? 'search-container open' : 'search-container close'}>
        <div className='search-close'>
            <div className='search'>
                <i className='bx bx-search bx-sm'></i>
                <input type='text' placeholder='Search' onChange={handleSearch}/>
            </div>
            <div className='close'>
                <i className='bx bx-x' onClick={() => setSearchOpen(false)}></i>
            </div>
        </div>
        <div className='search-data'>
            <p className='results'>{searchFilter?.length ? searchFilter?.length : 0} Result{searchFilter?.length === 1 ? '' : 's'}</p>
            <div className='data-wrapper'>
                {searchFilter?.length ? searchFilter?.map(item => {
                    return (
                    <Link to={`/${item._id}`}>
                        <div key={id} className='products' onClick={() => setSearchOpen(false)}>
                            <div className='products-image'>
                                <img src={item.image} alt={item.name}/>
                            </div>
                            <div className='products-info'>
                                <p>{item.name}</p>

                            </div>
                        </div>
                    </Link>
                )
                }) : <div className='no-display'><p>No species displayed</p></div>}
                
            </div>
        </div>
    </div>
    </div>
  )
}

export default Search