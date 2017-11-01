import axios from 'axios'

export const FETCH_WP_PAGES = 'fetch_wp_pages'
export const FETCH_WP_POSTS = 'fetch_wp_posts'

const BASE_URL = '/'

const PAGES_URL = `${BASE_URL}/wp-json/wp/v2/pages`
const POSTS_URL = `${BASE_URL}/wp-json/wp/v2/posts`

export function fetchWPpages(){
  const request = axios.get(PAGES_URL).then(res=>res)
  return {
    type: FETCH_WP_PAGES,
    payload: request
  }
}
export function fetchWPposts(){
  const request = axios.get(POSTS_URL).then(res=>res)
  return {
    type: FETCH_WP_POSTS,
    payload: request
  }
}
