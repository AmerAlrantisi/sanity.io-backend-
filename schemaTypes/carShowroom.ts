import { defineField, defineType } from 'sanity';

export const carShowroom = defineType({
  name: 'carShowroom',
  title: 'carShowroom',
  type: 'object',
  fields: [
    {
      name: 'StoreName',
      title: 'StoreName',
      type: 'string',
    },

    defineField({
      name: 'storeInfo',
      title: 'store Info',
      type: 'array',
      of: [{ type: 'storeInfo' }],
    }),


  ],
});
