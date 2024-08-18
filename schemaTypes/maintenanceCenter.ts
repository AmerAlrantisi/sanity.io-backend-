import { defineField, defineType } from 'sanity';

export const maintenanceCenter = defineType({
  name: 'maintenanceCenter',
  title: 'maintenanceCenter',
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
