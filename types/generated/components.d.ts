import type { Schema, Attribute } from '@strapi/strapi';

export interface CategoriaSeccion extends Schema.Component {
  collectionName: 'components_categoria_seccions';
  info: {
    displayName: 'Seccion';
    icon: 'alien';
  };
  attributes: {
    name: Attribute.String;
    type: Attribute.Enumeration<['type 1', 'type 2']>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'categoria.seccion': CategoriaSeccion;
    }
  }
}
