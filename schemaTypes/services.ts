import { defineField, defineType } from 'sanity';

export const services = defineType({
  name: 'services',
  title: 'services',
  type: 'object',
  fields: [

 


    defineField({
      name: 'winches',
      title: 'winches',
      type: 'array',
      of: [{ type: 'winches' }],
    }),
   

    defineField({
      name: 'chargeonroad',
      title: 'charge on road',
      type: 'array',
      of: [{ type: 'chargeonroad' }],
    }),

    defineField({
      name: 'dryclean',
      title: 'dry clean',
      type: 'array',
      of: [{ type: 'dryclean' }],
    }),
  ],
});
