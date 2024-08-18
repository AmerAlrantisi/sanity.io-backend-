import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'electric cars',

  projectId: 'b69jv6q5',
  dataset: 'electriccars',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
