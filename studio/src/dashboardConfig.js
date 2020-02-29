export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5e5a4b1f777f24330c1ec7ec',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby1-blog-studio',
                  apiId: '173fb3d5-f20b-4c1d-97ee-d25d35fdfac9'
                },
                {
                  buildHookId: '5e5a4b1f2eb5822e25c1e3ca',
                  title: 'Blog Website',
                  name: 'sanity-gatsby1-blog',
                  apiId: '664f79bc-a9c6-41eb-a162-0d98f81f3db0'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Varun200390/sanity-gatsby1-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby1-blog.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
