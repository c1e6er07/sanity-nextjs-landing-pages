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
                  buildHookId: '5fb2831824607df2164a8eda',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-u8ehwf6z',
                  apiId: 'cd79fe9c-abd6-43a2-adc0-28aa80e88e97'
                },
                {
                  buildHookId: '5fb2831837c67bd06b5dece6',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-1ga1xsmw',
                  apiId: 'fe6945b3-190c-4d25-98aa-7d6b3ecc481b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/interturpb/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-1ga1xsmw.netlify.app', category: 'apps'}
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
