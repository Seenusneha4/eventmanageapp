import React, { useState } from 'react'

const Addevent = () => {
    var[name,setname]=useState("")
    var[date,setdate]=useState("")
    var[venue,setvenue]=useState("")
    var[organiser,setorganiser]=useState("")
    var[contactno,setcontactno]=useState("")
    const subdata=()=>{
        const data={"name":name,"date":date,"venue":venue,"organiser":organiser,"contactno":contactno}
        console.log(data)
    }
  return (
    <div>
        <div className="container">
    <div className="row div col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
        <div className="row">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
              <label for="" className="form-label">Name</label>
              <input onChange={(b)=>{setname(b.target.value)}} type="text" className="form-control"/>
            </div>
            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label for="" className="form-label">Date</label>
                <input onChange={(b)=>{setdate(b.target.value)}} type="date" name="" id="" class="form-control"/>
            </div>
            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label for="" className="form-label">Venue</label>
                <input onChange={(b)=>{setvenue(b.target.value)}} type="text" className="form-control"/>
               
            </div>
            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label for="" className="form-label">Organiser</label>
                <input onChange={(b)=>{setorganiser(b.target.value)}} type="text" className="form-control"/>
            </div>
            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label for="" className="form-label">Contact No</label>
                <input onChange={(b)=>{setcontactno(b.target.value)}} type="text" className="form-control"/>
            </div>
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <button onClick={subdata} className="btn btn-success">SUBMIT</button>

            </div>
        </div>
    </div>
</div>
    </div>
  )
}

export default Addevent