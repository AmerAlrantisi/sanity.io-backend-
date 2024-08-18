import { defineField, defineType } from 'sanity';

export const chargerStore = defineType({
  name: 'chargerStore',
  title: 'chargerStore',
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
