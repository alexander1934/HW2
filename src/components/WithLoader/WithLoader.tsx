import React from 'react';
import { Loader } from '../Loader/Loader';
import "./WithLoader.css";

export type WithLoaderProps = React.PropsWithChildren<{
  loading: boolean;
}>;

export const WithLoader: React.FC<WithLoaderProps> = ({
  loading,
  children,
}) => {
  return (
    <div className='flex-parent'>
      {children}
      {loading &&<Loader className={"WithLoader"}/>}
    </div>
  );
};
