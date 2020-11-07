import zIndex from '@material-ui/core/styles/zIndex'
import React from 'react'
import './Posts.css'

function Posts() {
  let inboundPosts = {
    success: true,
    error: null,
    data: {
      posts: [
        {
          location: '[On Request]',
          willDeliver: false,
          messages: [],
          active: true,
          _id: '5fa34972d08e6b001770f41b',
          author: {
            _id: '5fa34972d08e6b001770f418',
            username: 'joe1234',
          },
          cohort: '5fa34972d08e6b001770f417',
          title: 'Practically new Stradivarius',
          description:
            "I've really only used this three or four times.  I thought it would be a good purchase, shows what I know.",
          price: '$14.3 million',
          createdAt: '2020-11-05T00:38:10.489Z',
          updatedAt: '2020-11-05T00:38:10.522Z',
          __v: 0,
          isAuthor: false,
        },
        {
          location: '[On Request]',
          willDeliver: true,
          messages: [],
          active: true,
          _id: '5fa34972d08e6b001770f41c',
          author: {
            _id: '5fa34972d08e6b001770f419',
            username: 'jane1234',
          },
          cohort: '5fa34972d08e6b001770f417',
          title: 'Golden Retriever puppies',
          description:
            'Not looking for any money, just want to find a good home for these four beautiful pups.',
          price: 'free',
          createdAt: '2020-11-05T00:38:10.489Z',
          updatedAt: '2020-11-05T00:38:10.525Z',
          __v: 0,
          isAuthor: false,
        },
        {
          location: 'Ames, IA',
          willDeliver: true,
          messages: [],
          active: true,
          _id: '5fa34972d08e6b001770f41d',
          author: {
            _id: '5fa34972d08e6b001770f41a',
            username: 'caesar1234',
          },
          cohort: '5fa34972d08e6b001770f417',
          title: 'NordicTrack Freestrider Elliptical Trainer',
          description: 'To be honest, it is more amazing than my resolve.',
          price: '$1400, OBO',
          createdAt: '2020-11-05T00:38:10.491Z',
          updatedAt: '2020-11-05T00:38:10.528Z',
          __v: 0,
          isAuthor: false,
        },
      ],
    },
  }

  let posts = inboundPosts.data.posts

  return (
    <div id="posts">
      {posts.map((post, index) => {
        // Things to add:
        // only active posts show
        // message seller
        // edit post- owner
        // delete post- owner
        // retrieve posts from api
        return (
          <div id="post-card" key={index}>
            <div className="card-title">
              <h1>{post.title}</h1>
              <h1>{post.price}</h1>
            </div>
            <h3>Description: {post.description}</h3>
            <div>
              <p>MESSAGE SELLER</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Posts
