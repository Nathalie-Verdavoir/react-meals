const AreaFlag = (country) => {
 const flagClassNamme = "flag f32 "+country.country;
  return (
      <div className={flagClassNamme} title={country.country}></div>
  )
}

export default AreaFlag;