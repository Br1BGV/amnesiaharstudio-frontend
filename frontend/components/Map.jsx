import React from 'react'

const Map = () => {
  return (
    <div style={{ width: "100%", height: "400px", borderRadius: "10px", overflow: "hidden" }}>
      <iframe
        title="Ubicación Amnesia Hair Studio"
        src="https://www.google.com/maps?q=Juan+Paullier+1364,+11200+Montevideo,+Uruguay&output=embed"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  )
}

export default Map