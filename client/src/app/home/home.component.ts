import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, Renderer2, ViewEncapsulation } from '@angular/core';
import Map from '@arcgis/core/Map';
import MapView from '@arcgis/core/views/MapView';
import BasemapGallery from '@arcgis/core/widgets/BasemapGallery';
import Expand from '@arcgis/core/widgets/Expand';
import * as reactiveUtils from '@arcgis/core/core/reactiveUtils';
import Zoom from '@arcgis/core/widgets/Zoom.js';
import { MatMenuTrigger } from '@angular/material/menu';
import { ServiceNameService } from '../crisservice.service';
import TileLayer from '@arcgis/core/layers/TileLayer';
import MapImageLayer from "@arcgis/core/layers/MapImageLayer";

declare let $: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class HomeComponent implements OnInit {
  housingLayer: any;
  mapServiceUrl: any;
  mapImageLayer: any;
  item: any;
  constructor(private service: ServiceNameService) { }

  isHighlighted: boolean = true;
  currentHighlighted: string = '';
  sidePanelExpanded: boolean = true;
  selectedvalueForRailway: any = [];
  selectedvalueForDivision: any = [];
  selectedvalueForSection: any = [];
  selectedvalueForLine: any = [];
  selectedvalueForBridgeInsight: any = [];
  selectedvalueForTrackInsight: any = [];
  selectedCheckboxes: any = [];
  screens: any[] = [{ id: '1', title: '' }];
  screenCount = 1;
  selectedMap: any;
  buttonText: any = 'Enable';
  isBtnEnable: boolean = false;
  view: any;
  FilterSelectedSC: any;
  isDisableGapAnalysisApply = true;

  checkboxesDataListForRailway = [
    {
      id: 'C001',
      label: 'PMKVY',
      value: 'PMKK',
      icon: 'PMKK_TP.svg',
      checked: false,
      alt: 'PMKK',
      disable: false
    },
    {
      id: 'C002',
      label: 'JSS',
      icon: 'JSS_TC.svg',
      checked: false,
      value: 'JSS',
      alt: 'JSS',
      disable: false
    },
    {
      id: 'C003',
      label: 'ITI',
      icon: 'ITI_TC.svg',
      checked: false,
      value: 'ITI',
      alt: 'ITI',
      disable: false
    },
  ];

  checkboxesForDivision = [
    {
      id: 'C001',
      label: 'Division-I',
      value: 'DIV-1',
      checked: false,
      disable: false,
    },
    {
      label: 'Division-II',
      value: 'DIV-2',
      checked: false,
      disable: false,
    },
    {
      label: 'Division-III',
      value: 'DIV-3',
      checked: false,
      disable: false,
    },
  ];

  checkboxesForSection = [
    {
      id: 'C001',
      label: 'Section-I',
      value: 'sec-1',
      checked: false,
      disable: false,
    },
    {
      label: 'Section-II',
      value: 'sec-2',
      checked: false,
      disable: false,
    },
    {
      label: 'Section-III',
      value: 'sec-3',
      checked: false,
      disable: false,
    },
  ];

  checkboxesForLine = [
    {
      id: 'C001',
      label: 'Line-I',
      value: 'Line-I',
      checked: false,
      disable: false,
    },
    {
      label: 'Line-II',
      value: 'Line-II',
      checked: false,
      disable: false,
    },
    {
      label: 'Line-III',
      value: 'Line-III',
      checked: false,
      disable: false,
    },
  ];

  checkboxesForTrackInsight = [
    {
      id: '2',
      label: 'Rail Section Analysis',
      value: 'Rail Section Analysis',
      checked: false,
      disable: false,
    },
    {
      id: '3',
      label: 'Rail Exceeding Its Service Life',
      value: 'Rail Exceeding Its Service Life',
      checked: false,
      disable: false,
    },
    {
      id: '4',
      label: 'Accumulated GMT',
      value: 'Accumulated GMT',
      checked: false,
      disable: false,
    },
    {
      id: '5',
      label: 'Weld Fracture',
      value: 'Weld Fracture',
      checked: false,
      disable: false,
    },
    {
      id: '6',
      label: 'NBML PML Locations',
      value: 'NBML PML Locations',
      checked: false,
      disable: false,
    },
    {
      id: '7',
      label: 'Noth Railways',
      value: 'Noth Railways',
      checked: false,
      disable: false,
    },
    {
      id: '8',
      label: 'South Railways',
      value: 'South Railways',
      checked: false,
      disable: false,
    },
    {
      id: '9',
      label: 'Northen Railways DIV-I',
      value: 'Northen Railways DIV-I',
      checked: false,
      disable: false,
    },
    {
      id: '10',
      label: 'Northen DIV-I',
      value: 'Northen DIV-I',
      checked: false,
      disable: false,
    },
    {
      id: '11',
      label: 'Last Node Division',
      value: 'Last Node Division',
      checked: false,
      disable: false,
    },
  ];

  checkboxesForBridgeInsight = [
    {
      id: 'C001',
      label: 'Rail Fracture',
      value: 'Rail Fracture',
      checked: false,
      disable: false,
    },
    {
      label: 'OMS Peaks',
      value: 'OMS Peaks',
      checked: false,
      disable: false,
    },
    {
      label: 'TRC Peaks',
      value: 'TRC Peaks',
      checked: false,
      disable: false,
    },
  ];

  isDropdownOpen = false;

  ngOnInit(): void {
    $('.HomeButton').css('outline', '3px solid #B31312');

  }

  ngAfterViewInit(): void {
    this.initMap(this.screens[0].id);
  }

  finalMapObj: any = [];
  globalLayers: any = []

  defineLayers = () => {
    this.housingLayer = new TileLayer({
      url: 'https://tiles.arcgis.com/tiles/nGt4QxSblgDfeJn9/arcgis/rest/services/New_York_Housing_Density/MapServer',
      id: 'ny-housing',
      opacity: 0.9
    });

    this.mapServiceUrl = "https://mlinfomap.com/server/rest/services/CRIS/Track1/MapServer";
    this.mapImageLayer = new MapImageLayer({
      url: this.mapServiceUrl
    });
  }

  initMap = (id: any) => {
    try {
      this.defineLayers();
      const map = new Map({
        basemap: 'dark-gray', //streets, topo, oceans, gray, dark-gray, satellite, hybrid, terrain
        layers: [this.mapImageLayer]
      });
      this.view = new MapView({
        container: 'viewDiv' + id,
        map: map,
        zoom: 4,
        center: [77.21991492557393, 28.632708300410687],
      });
      //map.add(mapImageLayer);
      const basemapGallery = new BasemapGallery({
        view: this.view,
        container: document.createElement('div'),
      });
      let zoom = new Zoom({
        view: this.view,
      });
      const bgExpand = new Expand({
        view: this.view,
        content: basemapGallery,
      });

      reactiveUtils.watch(() => basemapGallery.activeBasemap, () => {
        const mobileSize =
          this.view.heightBreakpoint === 'xsmall' ||
          this.view.widthBreakpoint === 'xsmall';
        if (mobileSize) {
          bgExpand.collapse();
        }
      }
      );
      this.view.ui.remove('zoom');
      this.view.ui.add(bgExpand, 'top-right');
      this.view.ui.add(zoom, 'bottom-right');

      this.view.when(() => {
        this.mapImageLayer.when(() => {
          this.view.goTo(this.mapImageLayer.fullExtent)
            .catch((error: any) => {
              console.error('Error during map initialization:', error);
            });
        });
      });
      const newMapObj = { id, map };
      this.finalMapObj.push(newMapObj);
    }
    catch (error) {
      console.error('Error in initMap:', error);
    }
  };

  handleIconClick = (name: string) => {
    $('.iconButton').css('outline', 'none');
    if (this.isHighlighted && this.currentHighlighted === name) {
      this.isHighlighted = false;
      this.currentHighlighted = '';
    } else {
      this.isHighlighted = true;
      this.currentHighlighted = name;
      $(`.${name}Button`).css('outline', '3px solid #B31312');
    }
    this.displaySidePanelContent(name);
  };

  displaySidePanelContent = (options: any) => {
    if (options == 'Home') {
      $('#homeSection').css('display', 'block');
      $('#layersSection').css('display', 'none');
      $('#searchQuerySection').css('display', 'none');
      $('#analyticsSection').css('display', 'none');
      $('#toolsSection').css('display', 'none');
      $('#searchSection').css('display', 'none');
      $('#legendSection').css('display', 'none');
    }
    else if (options == 'legend') {
      $('#legendSection').css('display', 'block');
      $('#layersSection').css('display', 'none');
      $('#searchQuerySection').css('display', 'none');
      $('#analyticsSection').css('display', 'none');
      $('#toolsSection').css('display', 'none');
      $('#searchSection').css('display', 'none');
      $('#homeSection').css('display', 'none');
    }
    else if (options == 'Search') {
      $('#searchSection').css('display', 'block');
      $('#legendSection').css('display', 'none');
      $('#layersSection').css('display', 'none');
      $('#searchQuerySection').css('display', 'none');
      $('#analyticsSection').css('display', 'none');
      $('#toolsSection').css('display', 'none');
      $('#homeSection').css('display', 'none');
    }
    else if (options == 'Tool') {
      $('#toolsSection').css('display', 'block');
      $('#searchSection').css('display', 'none');
      $('#legendSection').css('display', 'none');
      $('#layersSection').css('display', 'none');
      $('#searchQuerySection').css('display', 'none');
      $('#analyticsSection').css('display', 'none');
      $('#homeSection').css('display', 'none');
    }
    else if (options == 'Analytics') {
      $('#analyticsSection').css('display', 'block');
      $('#toolsSection').css('display', 'none');
      $('#searchSection').css('display', 'none');
      $('#legendSection').css('display', 'none');
      $('#layersSection').css('display', 'none');
      $('#searchQuerySection').css('display', 'none');
      $('#homeSection').css('display', 'none');
    }
    else if (options == 'SearchQuery') {
      $('#searchQuerySection').css('display', 'block');
      $('#toolsSection').css('display', 'none');
      $('#searchSection').css('display', 'none');
      $('#legendSection').css('display', 'none');
      $('#layersSection').css('display', 'none');
      $('#analyticsSection').css('display', 'none');
      $('#homeSection').css('display', 'none');
    }
    else if (options == 'LayerGroup') {
      $('#layersSection').css('display', 'block');
      $('#searchQuerySection').css('display', 'none');
      $('#analyticsSection').css('display', 'none');
      $('#toolsSection').css('display', 'none');
      $('#searchSection').css('display', 'none');
      $('#homeSection').css('display', 'none');
      $('#legendSection').css('display', 'none');
    }
  }

  toggleSidePanel() {
    $('.collapseButton').css('cursor', 'pointer');
    $('.expandButton').css('cursor', 'pointer');
    if (this.sidePanelExpanded) {
      $('.collapseButton').css('display', 'block');
      $('.expandButton').css('display', 'none');
    } else {
      $('.collapseButton').css('display', 'none');
      $('.expandButton').css('display', 'block');
    }
    this.sidePanelExpanded = !this.sidePanelExpanded;
  }
  //#handle dropdown chnages and capturing values when home icon selected form menu
  handleCheckboxChangeForRailway = (value: string, isChecked: boolean) => {
    if (isChecked) {
      this.selectedvalueForRailway.push(value);
    } else {
      this.selectedvalueForRailway = this.selectedvalueForRailway.filter(
        (item: string) => item !== value
      );
    }
  };
  onChangeSkillCenterFilter = (dataArr: any) => {
    this.FilterSelectedSC = dataArr;
    if (this.FilterSelectedSC.length != 0) {
      this.isDisableGapAnalysisApply = false;
    }
    else {
      this.isDisableGapAnalysisApply = true;
    }
  }
  handleCheckboxChangeForDivision = (value: string, isChecked: boolean) => {
    if (isChecked) {
      this.selectedvalueForDivision.push(value);
    } else {
      this.selectedvalueForDivision = this.selectedvalueForDivision.filter(
        (item: string) => item !== value
      );
    }
    //console.log('Selected Values:', this.selectedvalueForDivision);
  };
  handleCheckboxChangeForSection = (value: string, isChecked: boolean) => {
    if (isChecked) {
      this.selectedvalueForSection.push(value);
    } else {
      this.selectedvalueForSection = this.selectedvalueForSection.filter(
        (item: string) => item !== value
      );
    }
    //console.log('Selected Values:', this.selectedvalueForSection);
  };
  handleCheckboxChangeForLine = (value: string, isChecked: boolean) => {
    if (isChecked) {
      this.selectedvalueForLine.push(value);
    } else {
      this.selectedvalueForLine = this.selectedvalueForLine.filter(
        (item: string) => item !== value
      );
    }
    //console.log('Selected Values:', this.selectedvalueForLine);
  };
  handleCheckboxChangeForBridgeInsight = (value: string, isChecked: boolean) => {
    if (isChecked) {
      this.selectedvalueForBridgeInsight.push(value);
    } else {
      this.selectedvalueForBridgeInsight = this.selectedvalueForBridgeInsight.filter(
        (item: string) => item !== value
      );
    }
    //console.log('Selected Values:', this.selectedvalueForBridgeInsight);
  };
  handleCheckboxChangeForTrackInsight1(event: any): void {

    this.selectedvalueForTrackInsight.forEach((element: any) => {
      this.removeScreen(element.value, element.id);
    });
    this.selectedvalueForTrackInsight = [];

    event.forEach((element: any) => {
      this.selectedvalueForTrackInsight.push({
        value: element.value,
        id: element.id,
        isChecked: element.isChecked
      });
      this.addScreen(element.value, element.id, element.isChecked);
    });
  }


  handleCheckboxChangeForTrackInsight2(event: any): void {
    this.selectedvalueForTrackInsight.forEach((element: any) => {
      if (!event.map((item: any) => item.id).includes(element.id)) {
        this.removeScreen(element.value, element.id);
      }
    });
    // this.selectedvalueForTrackInsight = [];
    console.log(event);
    event.forEach((element: any) => {
      if (!this.selectedvalueForTrackInsight.map((item: any) => item.id).includes(element.id)) {
        if (this.selectedvalueForTrackInsight.length > 1) {
          this.addScreen(element.value, element.id, element.isChecked);
        }
      }

    });
    if (event.length === 1)
      this.screens[0].title = this.selectedvalueForTrackInsight.value;
    this.selectedvalueForTrackInsight = event

  }
  handleCheckboxChangeForTrackInsight(event: any): void {
    if (event.length < 10) {
       
      //remove 1st screen id=1
      if (event.length > 0 && this.finalMapObj.map((item: any) => item.id).includes(1))
        this.removeScreen("", "1");

      this.finalMapObj.forEach((element: any) => {
        if (event.length > 0) {
          if (!event.map((item: any) => item.id).includes(element.id)) {
            this.removeScreen(element.value, element.id);
          }
        }
        else
          this.removeScreen(element.value, element.id);
      });

      if (event.length > 0) {
        event.forEach((element: any) => {
          if (!this.finalMapObj.map((item: any) => item.id).includes(element.id)) {
            this.addScreen(element.value, element.id, element.isChecked);
          }
        });
      } else {
        this.addScreen("", 1, true);
      }
    }
    else {
      alert("You can't add more than 9 screens!");
      
    }
  }

  addScreen = (value: any, id: any, isChecked: any) => {
    this.selectedMap = value;
    if (this.screenCount < 9) {
      this.screenCount++;
      this.screens.push({ id: id, title: value });
      setTimeout(() => {
        this.initMap(id);
        console.log(this.finalMapObj);
      });
    } else {
      alert("You can't add more than 9 screens!");
      isChecked = false;
    }
  };
  removeScreen = (value: string, id: string) => {
    if (value == 'Rail Section Analysis') {
      this.screens[0].title = '';
    }
    const mapObjIndex = this.finalMapObj.findIndex((mapObj: any) => mapObj.id === id);
    if (mapObjIndex !== -1) {
      const mapObj = this.finalMapObj[mapObjIndex];
      mapObj.map.destroy(); // Destroy the MapView
      this.finalMapObj.splice(mapObjIndex, 1);
    }
    const screenId = 'viewDiv' + id;
    const screenToRemove = document.getElementById(screenId);
    if (screenToRemove && screenToRemove.parentNode) {
      screenToRemove.parentNode.removeChild(screenToRemove);
      this.screens = this.screens.filter(screen => screen !== -id);
      this.screenCount--;
    }
  };
  handleMapDiv = (screenID: any, title: any) => {
    const button = $(`#btn-${screenID}`);
    if (!this.isBtnEnable) {
      this.isBtnEnable = true;
      button.css('background-color', 'green');
      button.prop('disabled', false).html('Enabled');

    } else {
      this.isBtnEnable = false;
      button.css('background-color', '#0174BE');
      button.prop('disabled', false).html('Enable');
    }
  };

  addDistinctDataOnMap = (button: any) => {
    alert(button);
  }
  //#End region
}
