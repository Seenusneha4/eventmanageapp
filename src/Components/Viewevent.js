import React from 'react'
import Header from './Header'

const Viewevent = () => {
    var eventlist=[{"name":"Wedding","date":"30-05-2022","venue":"TVM","organiser":"Ammu","contactno":"1234567890"},
         {"name":"Baptism","date":"31-05-2022","venue":"PTA","organiser":"Revathy","contactno":"0987654321"},
         {"name":"Naming","date":"01-06-2022","venue":"KZY","organiser":"Sachin","contactno":"5432167890"},
         {"name":"Birthday","date":"02-06-2022","venue":"KONNI","organiser":"Kiran","contactno":"0987612345"},
         {"name":"Funeral","date":"03-06-2022","venue":"RANNY","organiser":"Amal","contactno":"9283745610"}
]

  return (
    <div>
    <Header/>
    <div className="container">
    <div className="row div col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
        <div className="row g-3">
        <table class="table">
  <thead>
    <tr>
      <th scope="col">NAME</th>
      <th scope="col">DATE</th>
      <th scope="col">VENUE</th>
      <th scope="col">ORGANISER</th>
      <th scope="col">CONTACT NO</th>
    </tr>
  </thead>
  <tbody>
      {eventlist.map((value,key)=>{return<tr>
    
      <td>{value.name}</td>
      <td>{value.date}</td>
      <td>{value.venue}</td>
      <td>{value.organiser}</td> 
      <td>{value.contactno}</td>
    </tr>
  })}
  </tbody>
</table>
        </div>
    </div>
</div>
    </div>
  )
}

export default Viewevent