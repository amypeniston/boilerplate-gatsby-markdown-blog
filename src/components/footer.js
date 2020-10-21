import React from "react"
import footerStyles from "./footer.module.scss"

const footer = () => {
  return (
    <div className={footerStyles.footer}>
      © Copyright Name {new Date().getFullYear()}
    </div>
  )
}

export default footer
