import { defineField, defineType } from 'sanity';
import { cars } from './cars'; // import the product type

export const home = defineType({
  name: 'home',
  title: 'Home',
  type: 'document',
  fields: [

    {
      name: 'name',
      type: 'string',
    },

    {
      name: 'title',
      title: 'Title',
        type: 'string',
      },
      {
        name: 'images',
        title: 'Images',
        type: 'array',
        of: [{ type: 'image' }],
        options: {
          layout: 'grid', 
        },
      },


      {
        name: 'phoneNumber',
        title: 'phoneNumber',
          type: 'string',
        },


        {
          name: 'mainImage',
          title: 'Main Image',
          type: 'image',
          options: {
            hotspot: true, 
          },
        },


    defineField({
      name: 'cars',
      title: 'cars',
      type: 'array',
      of: [{ type: 'cars' }], 
    }),
  ],
});