import { field, group } from '@nuxthq/studio/theme'

export default defineNuxtSchema({
  appConfig: {
    
      title: field({
        type: 'string',
        title: 'Header',
      }),
      nav: Array({
        title: 'Nav',
        description: 'Nav configuration',
        fields: {
          text: field({
            type: 'string',
            title: 'Text',
            description: 'Hide or display the footer',
          }),
          path: field({
            type: 'string',
            title: 'Link',
            description: 'Hide or display the footer',
          })
        }
      }),
    }
})
