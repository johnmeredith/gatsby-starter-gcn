import Disqus from 'disqus-react'

class DisqusPost extends Component {
  render() {
    const post = this.props.data.markdownRemark
    const disqusConfig = {
      url: `https://www.archetextur.es/${this.props.location.pathname}`,
      identifier: `${this.props.location.pathname}`,
      title: post.frontmatter.title,
    }

    // Below is the version that blew the comment section up...

    // const disqusConfig = {
    //   url: `https://www.xiaoru.li${this.props.location}`,
    //   identifier: this.props.location,
    //   title: post.frontmatter.title,
    // }

    return (
      <Layout>
        {/* blah blah blah */}
        <Disqus.DiscussionEmbed shortname="health-archetextures" config={disqusConfig} />
        {/* blah blah blah */}
      </Layout>
    )
  }
}