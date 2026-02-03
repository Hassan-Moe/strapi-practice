import type { Schema, Struct } from '@strapi/strapi';

export interface BlocksFeatureItems extends Struct.ComponentSchema {
  collectionName: 'components_blocks_feature_items';
  info: {
    displayName: 'FeatureItems';
    icon: 'stack';
  };
  attributes: {
    items: Schema.Attribute.Component<'items.feature-item', true>;
  };
}

export interface BlocksHero extends Struct.ComponentSchema {
  collectionName: 'components_blocks_heroes';
  info: {
    displayName: 'Hero';
  };
  attributes: {
    content: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface ItemsFeatureItem extends Struct.ComponentSchema {
  collectionName: 'components_items_feature_items';
  info: {
    displayName: 'featureItem';
  };
  attributes: {
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface TestCategoryTest extends Struct.ComponentSchema {
  collectionName: 'components_test_category_tests';
  info: {
    displayName: 'Test';
    icon: 'dashboard';
  };
  attributes: {
    title: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'default value test'>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'blocks.feature-items': BlocksFeatureItems;
      'blocks.hero': BlocksHero;
      'items.feature-item': ItemsFeatureItem;
      'test-category.test': TestCategoryTest;
    }
  }
}
