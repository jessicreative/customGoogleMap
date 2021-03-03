function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 49.246221749006516, lng: -123.12047787621236 },
    zoom: 12,
    mapId: "ab3cc833f7432a0f",
    mapTypeControl: false,
    fullscreenControl: false,
    streetViewContro: false
  });

  const markers = [
    ["Little Llama", 49.2649325918039, -123.1942922619405, "llama.svg", 40, 40],
    ["Guava", 49.21579498294516, -122.97696328753129, "guava.svg", 40, 40],
    ["Coca Tea", 49.2349325918039, -123.1042922619405, "coca-tea.svg", 40, 40],
    ["Anchovy", 49.2149325918039, -123.2502922619405, "anchovy.svg", 40, 40]
  ];

  for (let i = 0; i < markers.length; i++) {
    const currMarker = markers[i];

    const marker = new google.maps.Marker({
      position: { lat: currMarker[1], lng: currMarker[2] },
      map,
      animation: google.maps.Animation.DROP,
      title: currMarker[0],
      icon: {
        url: currMarker[3],
        scaledSize: new google.maps.Size(currMarker[4], currMarker[5])
      }
    });

    const infowindow = new google.maps.InfoWindow({
      content: currMarker[0]
    });

    marker.addListener("click", () => {
      infowindow.open(map, marker);
    });
  }
}
