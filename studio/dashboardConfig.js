export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f4b0d81281ab61a5d5f5bd4',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-f7rz3n3g',
                  apiId: '188823c4-ac1f-4dfe-874b-dcf32711f01b'
                },
                {
                  buildHookId: '5f4b0d82281ab611e55f5c41',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-bmc47gnx',
                  apiId: '4fe53a1c-81a7-4fea-bd9f-3f2442050232'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/kaisian97/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-bmc47gnx.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
