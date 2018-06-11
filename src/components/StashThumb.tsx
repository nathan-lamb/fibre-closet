import * as React from 'react'

const StashThumb = (props: any) => {
  return (
      <a>
        <div className="thumbnail all-20">
          <p>Yarn Id: {props.id}</p>
        </div>
      </a>
  )
};

export default StashThumb