import { defineField, defineType } from 'sanity';

export const chargingStation = defineType({
  name: 'chargingStation',
  title: 'chargingStation',
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
