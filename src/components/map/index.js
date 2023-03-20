import "./styles.css"

function Map() {
    return (
        <div className="map">
          <iframe
            className="frame"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.5462203586885!2d-48.49526138472239!3d-1.4468823989447832!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x92a48e96656b9d15%3A0x91d0b0e7e7ab3782!2sTv.%20Benjamin%20Constant%2C%20441%20-%20Reduto%2C%20Bel%C3%A9m%20-%20PA%2C%2066053-040!5e0!3m2!1spt-BR!2sbr!4v1678630409377!5m2!1spt-BR!2sbr"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
    )
}

export default Map;