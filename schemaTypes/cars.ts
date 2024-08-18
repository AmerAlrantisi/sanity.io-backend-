import { defineField, defineType } from 'sanity';
import { location } from './location';

export const cars = defineType({
  name: 'cars',
  title: 'Cars',
  type: 'object',
  fields: [
    {
      name: 'carname',
      title: 'Car Name',
      type: 'string',
    },
    defineField({
      name: 'logoImage',
      title: 'Logo Image',
      type: 'image',
      options: {
        hotspot: true, // Allows the user to select the most important part of the image
      },
    }),
    
    defineField({
      name: 'locations',
      title: 'Locations',
      type: 'array',
      of: [{ type: 'location' }],
    }),
  ],
});
