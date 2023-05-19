import Blogimg1 from '../assets/images/Blog-template1.png'
import Blogimg3 from '../assets/images/Blog-template3.png'
import Blogimg2 from '../assets/images/image for mountain blog.png'

const Templates = [
    {
      name: 'Blog',
      templates: [
        {
          name: 'Template 1',
          imgSrc: Blogimg1,
          description: 'Blog1'
        },
        {
          name: 'Template 2',
          imgSrc: Blogimg3,
          description: 'Blog2'
        },
        {
          name: 'Template 3',
          imgSrc: Blogimg2,
          description: 'Blog3'
        }
      ]
    },
    {
        name: 'Finance',
        templates: [
          {
            name: 'Template 1',
            imgSrc: Blogimg3,
            description: 'Finance1'
          }
        ]
      },
      {
        name: 'Eccommerce',
        templates: [
          {
            name: 'Template 1',
            imgSrc: Blogimg1,
            description: 'Eccommerce1'
          },
          {
            name: 'Template 2',
            imgSrc: Blogimg3,
            description: 'Eccommerce2'
          },
        ]
      },
]
export default Templates