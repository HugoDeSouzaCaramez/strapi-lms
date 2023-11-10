import type { Schema, Attribute } from '@strapi/strapi';

export interface InformationDeveloper extends Schema.Component {
  collectionName: 'components_information_developers';
  info: {
    displayName: 'developer';
    icon: 'alien';
  };
  attributes: {
    name: Attribute.String;
    github: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'information.developer': InformationDeveloper;
    }
  }
}
