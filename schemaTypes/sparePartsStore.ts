import { defineField, defineType } from 'sanity';

export const sparePartsStore = defineType({
  name: 'sparePartsStore',
  title: 'sparePartsStore',
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
