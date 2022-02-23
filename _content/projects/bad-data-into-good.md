---
tags:
- silly tings
- typescript
project_title: Turning bad data into good data
project_sub_head: The adage maintains that numbers don't lie, but sometimes liars
  get access to numbers and then we enter murky territory
featured_image: "/uploads/2022_02_23_greasy_boys4.jpeg"
project_web_link: https://www.wweek.com/
project_repo_link: ''
additional_images: []
highlighted_project: false

---
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 

Pharetra massa massa ultricies mi quis hendrerit dolor. Diam donec adipiscing tristique risus nec feugiat in. Rhoncus aenean vel elit scelerisque mauris. Pulvinar etiam non quam lacus suspendisse faucibus. Sed velit dignissim sodales ut eu sem. 

    
    export const getAllContentByType = (type = EContentTypes.POSTS, fields: string[] = []) => {
      const slugs = getSlugs(type)
      const posts = slugs
        .map((slug) => getContentBySlug(slug,
          fields,
          type))
        .sort((postA, postB) => (postA.date_created > postB.date_created ? -1 : 1))
      return posts
    }

Sed libero enim sed faucibus turpis in. Mauris vitae ultricies leo integer malesuada nunc vel. Nisl suscipit adipiscing bibendum est. At tempor commodo ullamcorper a lacus vestibulum sed arcu non. Ullamcorper morbi tincidunt ornare massa eget egestas purus viverra.

![Gummy worm data](/uploads/2022_02_22_gummi-worms.jpeg "Gummy data")

Viverra orci sagittis eu volutpat odio facilisis mauris sit amet. Diam in arcu cursus euismod quis viverra nibh. Id semper risus in hendrerit gravida. Suscipit tellus mauris a diam. Scelerisque purus semper eget duis at tellus at. 

Aliquet nec ullamcorper sit amet. A cras semper auctor neque vitae tempus quam pellentesque. 