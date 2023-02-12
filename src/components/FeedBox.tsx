import React, { JSXElementConstructor, ReactElement, useState } from 'react'
import { Source } from "../interfaces";
import ErrorSection from "./ErrorSection";
import { ErrorBoundary } from "react-error-boundary";
import { useQueryClient } from "react-query";

type FeedBoxProps = {
  children?: ReactElement<any, string | JSXElementConstructor<any>>;
  source: Source;
};

const FeedBox = ({ children, source }: FeedBoxProps) => {
  const [isActive, setIsActive] = useState(true)
  const queryClient = useQueryClient();

  return (
    <div style={{width: '50%', height: '30%', textAlign: 'justify'}}>
      <h4>{source.name}</h4>
      {isActive && <ErrorBoundary
        FallbackComponent={({ error, resetErrorBoundary }) => (
          <ErrorSection error={error} hide={() => setIsActive(false)}  resetErrorBoundary={resetErrorBoundary}/>
        )}
        resetKeys={[isActive]} onReset={() => queryClient.invalidateQueries([source.ref])}>
        {!!children && React.cloneElement(children, {isActive})}
      </ErrorBoundary>}
    </div>
  )
}

export default FeedBox;