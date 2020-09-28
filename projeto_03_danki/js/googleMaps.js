function initMap() {
    map = new google.maps.Map(document.getElementById('mapa'), {
        center: { lat: -23.67482, lng: -46.58459 },
        zoom: 15
    })

    let marker = new google.maps.Marker({
        position: { lat: -23.67482, lng: -46.58459 },
        map: map,
        title: 'Nome da empresa...'
    })

    contentString = '<h2 style="padding: 4px; font-size: 16px; font-weight: 300; text-align: center; color: #000;">Meu endereço personalizado!</h2>'
    let infowindow = new google.maps.InfoWindow({
        content: contentString,
        maxWidth: 200,
        pixelOffSet: new google.maps.Size(0, 20)
    })

    marker.addListener('click', function() {
        infowindow.open(map, marker)
    })
}



// window.onload = function() {
//     function initMap() {
//         let mapProp = {
//             center: { lat: -23.67482, lng: -46.58459 },
//             zoom: 15
//         }

//         map = new google.maps.Map(document.getElementById("mapa"), mapProp)
//     }

//     function addMarker(lat, lng, icon, content) {

//     }

//     initMap()
// }