import { AfterViewInit, Component, OnInit } from '@angular/core';
import Map from "ol/Map";
import OSM from "ol/source/OSM";
import {Tile as TileLayer, Vector as VectorLayer} from "ol/layer.js";
import {Vector as VectorSource} from "ol/source.js";
import View from "ol/View";
import {Icon, Style } from "ol/style";
import { fromLonLat, useGeographic } from "ol/proj";
import { Feature } from 'ol';
import { Point } from 'ol/geom';
import {Overlay } from 'ol/index.js';
import { ActivatedRoute, Router } from '@angular/router';

useGeographic();
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit, AfterViewInit {
  constructor(private router: Router, private route: ActivatedRoute){}
  public map!: Map
  ngOnInit(): void {

  }
  ngAfterViewInit(){
    //https://openlayers.org/en/latest/examples/geographic.html
    const place = [2.353, 48.8566];

    const point = new Point(place);

    this.map = new Map({
      target: 'map',
      view: new View({
        center: [6.14569, 46.20222],
        zoom: 5,
      }),
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
        new VectorLayer({
          source: new VectorSource({
            features: [new Feature(point)],
          }),
          style: {
            'circle-radius': 15,
            'circle-fill-color': '#f4f1de',
            'circle-stroke-color': '#373d20',
            'circle-stroke-width': 3,
            'text-font': '20px sans-serif',
            'text-value': '3',
            'text-fill-color': '#373d20',
          },
        }),
      ],
    });
    this.map.on('click',  (event) => {
      const feature = this.map.getFeaturesAtPixel(event.pixel)[0];
      if (!feature) {
        return;
      }
      this.router.navigate(['/city']);
    });
    this.map.on('pointermove',  (event) => {
      const type = this.map.hasFeatureAtPixel(event.pixel) ? 'pointer' : 'inherit';
      this.map.getViewport().style.cursor = type;
    });
  }
}
