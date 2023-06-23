window.initMap = function () {
    const map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: 48.85559, lng: 2.35457 },
      zoom: 10
    });
  
    const malls = [
      { label: "G", name: "바스티유광장", lat: 48.85328, lng: 2.36931 },
      { label: "D", name: "에펠탑", lat: 48.85868, lng: 2.29447 },
      { label: "F", name: "앙발리드", lat: 48.85683, lng: 2.31262 }
    ];
  
    const bounds = new google.maps.LatLngBounds();
    const infoWindow = new google.maps.InfoWindow();
  
    malls.forEach(({ label, name, lat, lng }) => {
      const marker = new google.maps.Marker({
        position: { lat, lng },
        label,
        map
      });
      bounds.extend(marker.position);
  
      marker.addListener("click", () => {
        map.panTo(marker.position);
        infoWindow.setContent(name);
        infoWindow.open({
          anchor: marker,
          map
        });
      });
    });
  
    map.fitBounds(bounds);
  };