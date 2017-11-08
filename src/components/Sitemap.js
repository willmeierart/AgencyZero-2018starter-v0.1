import Sitemap from 'react-router-sitemap'
import AppRouter from './Architecture/AppRouter'

(
  new Sitemap(AppRouter)
    .build('http://xxxxxxx.com')
    .save('./sitemap.xml')
)

// for more detailed configuration example: https://github.com/kuflash/react-router-sitemap/blob/master/example/sitemap-builder.js
