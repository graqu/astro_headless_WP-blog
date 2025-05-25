///TYPES BASED ON THE WORDPRESS REST API

export interface WPAuthor {
  ID: number;
  login: string;
  email: false | string;
  name: string;
  first_name: string;
  last_name: string;
  nice_name: string;
  URL: string;
  avatar_URL: string;
  profile_URL: string;
  site_ID: number;
}

export interface WPPostThumbnail {
  ID: number;
  URL: string;
  guid: string;
  mime_type: string;
  width: number;
  height: number;
}

export interface WP_Post {
  ID: number;
  site_ID: number;
  author: WPAuthor;
  date: string;
  modified: string;
  title: string;
  URL: string;
  short_URL: string;
  content: string;
  excerpt: string;
  slug: string;
  guid: string;
  status: string;
  sticky: boolean;
  password: string;
  parent: boolean | number;
  type: string;
  discussion: {
    comments_open: boolean;
    comment_status: string;
    pings_open: boolean;
    ping_status: string;
    comment_count: number;
  };
  likes_enabled: boolean;
  sharing_enabled: boolean;
  like_count: number;
  i_like: boolean;
  is_reblogged: boolean;
  is_following: boolean;
  global_ID: string;
  featured_image: string;
  post_thumbnail: WPPostThumbnail;
  format: string;
  geo: boolean;
  menu_order: number;
  page_template: string;
  publicize_URLs: string[];
  terms: any;
  tags: any;
  categories: any;
  attachments: any;
  attachment_count: number;
  metadata: any[];
  meta: { links: any };
  capabilities: {
    publish_post: boolean;
    delete_post: boolean;
    edit_post: boolean;
  };
  other_URLs: any;
}
