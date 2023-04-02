import { Component } from '@angular/core';
import { SsrProxyOptions } from '../ssr-proxy/ssr-proxy.component';

@Component({
  selector: 'app-island',
  templateUrl: './island.component.html',
  styleUrls: ['./island.component.css']
})
export class IslandComponent {
  optionsAngular: SsrProxyOptions = {
    remote: 'mfe1',
    url: 'flights-search',
    tag: 'app-flights-search',

    lazy: true,

    client: {
      threshold: 0.66,
      exposedModule: './Component',
      export: 'FlightsSearchComponent',
    }
  };

  optionsReact: SsrProxyOptions = {
    remote: 'react',
    url: 'flights-search',
    tag: 'react-element',

    lazy: true,

    client: {
      threshold: 0.33,
      type: 'CustomElement',
      exposedModule: './web-components',
    }
  };
}
