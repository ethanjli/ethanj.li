import React, { Component } from 'react'

export default class Comments extends Component {

  constructor(props){ 
    super(props)
    this.commentBox = React.createRef() // Creates a reference to inject the <script> element
  }

  componentDidMount () {
    const utteranceTheme = 'github-light'
    const scriptEl = document.createElement('script')
    scriptEl.setAttribute('src', 'https://utteranc.es/client.js')
    scriptEl.setAttribute('crossorigin','anonymous')
    scriptEl.setAttribute('async', true)
    scriptEl.setAttribute('repo', 'ethanjli/ethanj.li')
    scriptEl.setAttribute('issue-term', 'pathname')
    scriptEl.setAttribute( 'theme', utteranceTheme)
    this.commentBox.current.appendChild(scriptEl)
  }

  render() {
    return (
      <div className='comment-box-wrapper'>
        <div ref={this.commentBox} className='comment-box' />
        {/* Above element is where the comments are injected */}
      </div>
    )
  }
}
