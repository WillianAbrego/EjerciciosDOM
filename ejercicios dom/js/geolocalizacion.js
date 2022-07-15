const d = document,
  n = navigator;
export default function getGeoLocation(id) {
  const $id = d.getElementById(id),
    options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    };
  const success = (position) => {
    let coords = position.coords;
    console.log(position);
    $id.innerHTML = `
    <p>Tu posicion actual es: </p>
    <ul>
        <li>Latitud<b>${coords.latitude}</b></li>
        <li>Longitud<b>${coords.longitude}</b></li>
        <li>Presicion<b>${coords.accuracy}</b> metros</li>
    </ul>
    <a href="https://www.google.com/maps/@${coords.latitude},${coords.longitude},10z" target="_blank" rel="noopener">Ver en google Maps</a>`;
  };
  const error = (error) => {
    console.log(error);
  };
  n.geolocation.getCurrentPosition(success, error, options);
}
