import { defineField, defineType } from 'sanity';

export const dryclean = defineType({
  name: 'dryclean',
  title: 'dry clean',
  type: 'object',
  fields: [
    {
      name: 'StoreFullName',
      title: 'Store Full Name',
      type: 'string',
    },
 

    {
      name: 'phoneNumber',
      title: 'phone Number',
      type: 'string',
    },


    {
      name: 'location',
      title: 'location',
      type: 'string',
    },

   


   


  ],
});
