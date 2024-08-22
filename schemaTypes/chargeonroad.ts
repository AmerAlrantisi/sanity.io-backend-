import { defineField, defineType } from 'sanity';

export const chargeonroad = defineType({
  name: 'chargeonroad',
  title: 'charge on road',
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
