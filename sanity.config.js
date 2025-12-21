import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {singletonTools} from 'sanity-plugin-singleton-tools'
import {structure} from './structure'
import Logo from './components/Logo'

export default defineConfig({
  name: 'default',
  title: 'Junoon',
  icon: Logo,

  projectId: 'tvwtacpm',
  dataset: 'production',

  plugins: [structureTool({structure}), visionTool(), singletonTools()],

  schema: {
    types: schemaTypes,
  },
})
