import { defineField, defineType } from 'sanity';

export const location = defineType({
  name: 'location',
  title: 'Location',
  type: 'object',
  fields: [
    {
      name: 'locationName',
      title: 'Location Name',
      type: 'string',
    },

    defineField({
      name: 'chargingStation',
      title: 'charging Station',
      type: 'array',
      of: [{ type: 'chargingStation' }],
    }),
    defineField({
      name: 'maintenanceCenter',
      title: 'maintenance Center',
      type: 'array',
      of: [{ type: 'maintenanceCenter' }],
    }),

    defineField({
      name: 'sparePartsStore',
      title: 'spare PartsS tore',
      type: 'array',
      of: [{ type: 'sparePartsStore' }],
    }),

    defineField({
      name: 'accessoriesStore',
      title: 'accessories Store',
      type: 'array',
      of: [{ type: 'accessoriesStore' }],
    }),
   
    defineField({
      name: 'chargerStore',
      title: 'charger Store',
      type: 'array',
      of: [{ type: 'chargerStore' }],
    }),

    defineField({
      name: 'carShowroom',
      title: 'car Showroom',
      type: 'array',
      of: [{ type: 'carShowroom' }],
    }),


    defineField({
      name: 'services',
      title: 'services',
      type: 'array',
      of: [{ type: 'services' }],
    }),




  ],
});
