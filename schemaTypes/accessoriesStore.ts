import { defineField, defineType } from 'sanity';

export const accessoriesStore = defineType({
  name: 'accessoriesStore',
  title: 'accessoriesStore',
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
