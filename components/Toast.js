import React from 'react'

const key = 'CARBON_DAWN_TOAST'

class Toast extends React.Component {
  state = {
    open: false
  }

  close = () => {
    this.setState({ open: false })
    window.localStorage.setItem(key, true)
  }

  componentDidMount() {
    if (!window.localStorage.getItem(key)) {
      this.setState({ open: true })
    }
  }

  render() {
    if (!this.state.open) {
      return null
    }

    return (
      <div className="toast mb4">
        <div className="toast-content">
          <p>Working on a product or new idea? The team behind Carbon is here to help.</p>
          <a href="https://dawnlabs.io">Let&#39;s talk!</a>
          <a className="close-toast" href="#" onClick={this.close}>
            &times;
          </a>
        </div>
        <style jsx>
          {`
            .toast {
              width: 704px;
              padding: 8px 16px;
              color: #fff;
              border: 1px solid #fff;
              border-radius: 2px;
              margin-top: calc(var(--x4) * -1);
            }

            .toast-content {
              display: flex;
              align-items: center;
            }

            a {
              text-decoration: underline;
            }

            .close-toast {
              text-decoration: none;
              margin-left: auto;
            }

            p {
              margin: 0;
              margin-right: 12px;
            }
          `}
        </style>
      </div>
    )
  }
}

export default Toast