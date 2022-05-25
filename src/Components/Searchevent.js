import React, { useState } from 'react'
import Header from './Header'

const Searchevent = () => {
    var[date,setdate]=useState("")
    const subdata=()=>{
        const data={"date":date}
        console.log(data)
    }
  return (
    <div>
        <Header/>
        <div className="container">
    <div className="row div col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
        <div className="row g-3">
            
            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label for="" className="form-label">Date</label>
                <input onChange={(b)=>{setdate(b.target.value)}} type="date" name="" id="" class="form-control"/>
            </div>
           
           
           
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <button onClick={subdata} className="btn btn-success">SEARCH</button>

            </div>
        </div>
    </div>
</div>
    </div>
  )
}

export default Searchevent