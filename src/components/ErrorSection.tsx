import React, { useEffect, useState } from 'react'
import { FallbackProps } from "react-error-boundary";

interface ESProps extends FallbackProps {
  hide(): any;
}


const ErrorSection: React.FC<ESProps> = ({ error, resetErrorBoundary, hide }) => {

  return (
    <div role="alert">
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
      <button onClick={hide}>Hide for a while</button>
    </div>
  )
}

export default ErrorSection;