import { Component, OnInit } from '@angular/core';
declare var google: any;
import $ from "jquery";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'contextMenu';

  arr = [1, 2, 3];

  rightClickmenu = false;
  menuPositionX = 0;
  menuPositionY = 0;
  directionsService: any;
  pointA: any;
  pointB: any;

  ngOnInit() {
    document.addEventListener("click", (e: any) => {
      let inside = e.target.closest("#contextMenu");
      console.log(inside);
      if (!inside) {
        this.rightClickmenu = false;
      }
    });
    //this.initMap()
  }

  //activates the menu with the coordinates
  onrightClick(e) {
    this.menuPositionX = e.clientX + $(document).scrollLeft();
    this.menuPositionY = e.clientY + $(document).scrollTop();
    this.rightClickmenu = true;
  }

  //disables the menu
  disableContextMenu() {
    this.rightClickmenu = false;
  }


  /* initMap() {
    const directionsService = new google.maps.DirectionsService();
    const directionsRenderer = new google.maps.DirectionsRenderer();
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 7,
      center: { lat: 41.85, lng: -87.65 },
    });
    directionsRenderer.setMap(map);
  
    const onChangeHandler = function () {
      this.calculateAndDisplayRoute(directionsService, directionsRenderer);
    };
    document.getElementById("start").addEventListener("change", onChangeHandler);
    document.getElementById("end").addEventListener("change", onChangeHandler);
    this.pointA = new google.maps.LatLng(51.7519, -1.2578)
    this.pointB = new google.maps.LatLng(50.8429, -0.1313);
  }
  
  calculateAndDisplayRoute(directionsService, directionsRenderer) {
    directionsService.route(
      {
        origin: {
          query: this.pointA,
        },
        destination: {
          query: this.pointB,
        },
        travelMode: google.maps.TravelMode.DRIVING,
      },
      (response, status) => {
        if (status === "OK") {
          directionsRenderer.setDirections(response);
        } else {
          window.alert("Directions request failed due to " + status);
        }
      }
    );
  } */
}
