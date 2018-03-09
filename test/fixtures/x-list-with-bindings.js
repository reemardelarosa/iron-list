import '../../../polymer/polymer.js';
import '../../../iron-flex-layout/iron-flex-layout.js';
import '../../iron-list.js';
import { Polymer } from '../../../polymer/lib/legacy/polymer-fn.js';
import { html } from '../../../polymer/lib/utils/html-tag.js';
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE
The complete set of authors may be found at http://polymer.github.io/AUTHORS
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS
*/
Polymer({
  _template: html`
    <style>
      :host {
        @apply --layout-fit;
        @apply --layout-vertical;

        display: block;
      }

      .item {
        color: white;
        height: 100px;
      }

      iron-list {
        overflow: hidden;
        background-color: black;
        height: 300px;
      }
    </style>

    <iron-list items="[[data]]" as="item" id="list">
      <template>
        <div class="item">
          <div item-scope-binding="">[[item.index]]</div>
          <div host-scope-property-binding="">[[propertyForReassignmentForwarding]]</div>
          <div host-scope-subproperty-binding="">[[propertyForPathChangeForwarding.text]]</div>
        </div>
      </template>
    </iron-list>
`,

  is: 'x-list-with-bindings',

  properties: {
    data: {
      type: Array
    },
    propertyForReassignmentForwarding: {
      type: String,
      value:"somePropertyText"
    },
    propertyForPathChangeForwarding: {
      type: Object,
      value: function(){
        return {text:"someSubPropertyText"}
      }
    }
  },

  get list() {
    return this.$.list;
  }
});
