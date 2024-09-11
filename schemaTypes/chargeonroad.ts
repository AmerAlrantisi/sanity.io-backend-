import { defineField, defineType } from 'sanity';

export const chargeonroad = defineType({
  name: 'chargeonroad',
  title: 'charge on road',
  type: 'object',
  fields: [
    {
        name: 'SName',
        title: 'service name',
        type: 'string',
      },
      {
        name: 'ServiceStoreFullName',
        title: 'Store Full Name',
        type: 'string',
      },
  
  
      {
        name: 'ServicePhoneNumber',
        title: 'phone Number',
        type: 'string',
      },
  
  
      {
        name: 'ServiceLocation',
        title: 'location',
        type: 'string',
      },
      {
        name: 'servicelocation',
        title: 'service city location',
        type: 'string',
      },

   

      {
        name: 'time',
        title: 'time',
        type: 'string',
      },
   


   


  ],
});
