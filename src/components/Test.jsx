// rafce

import React from 'react'

const Test = (props) => {
  return (
    // リアクトの場合はリターン複数使うときはタグで囲まないといけない、タグを<>にすることも。リアクトフラグメントを入れたタグもある
    <div>
      <div>{props.gs}</div>
      <p>{props.age}</p>
      <p>{props.zz}</p>
      <p>{props.bb}</p>

    </div>
  )
}

export default Test