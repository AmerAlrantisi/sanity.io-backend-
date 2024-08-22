import { defineField, defineType } from 'sanity';

export const services = defineType({
  name: 'services',
  title: 'services',
  type: 'object',
  fields: [


    defineField({
      name: 'components',
      title: 'components',
      type: 'array',
      of: [{ type: 'components' }],
    }),


  ],
});
