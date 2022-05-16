import React from 'react'

export default function CountryList(props) {
  return (
    <div>
       {props.countryListData && props.countryListData.map((ele,index)=>{return <p key={ele.name.common}>{ele.name.common}</p>} )}
    </div>
  )
}
