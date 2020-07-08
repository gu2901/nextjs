import React from 'react'

const Otime = ({paths}) => {

    return(
        <div>
            <div>{nomeTime}</div>
            <div>hehehe</div>
        </div>

    )
}

export async function getStaticPaths() {
    const res = await fetch('http://localhost:3001/times/')
    const posts = await res.json()
  console.log(posts)
  console.log("posts")
    // Get the paths we want to pre-render based on posts
    const paths = posts.map((post) => ({
      params: { id: post.id },
    }))
  
    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return { paths, fallback: false }
  }

export async function getStaticProps({paths}) {
    const res = await fetch(`http://localhost:3001/times/${paths.id}`)
    const uTime = await res.json()
  
    return {
      props: {
        nomeTime,
      },
    }
  }

export default Otime