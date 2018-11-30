import Disqus from 'disqus-react'

class Disqus extends Component {
  render() {
    const post = this.props.data.markdownRemark
    const disqusConfig = {
      url: `https://www.archetextur.es/${this.props.location.pathname}`,
      identifier: `${this.props.location.pathname}`,
      title: post.frontmatter.title,
    }

    return (
      <Layout>
        <Disqus.DiscussionEmbed 
        shortname="health-archetextures" 
        config={disqusConfig} />
      </Layout>
    )
  }
}

export default Disqus;