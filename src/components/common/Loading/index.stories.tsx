import React from 'react';
import { Loading } from '.';

export default {
  title: 'Components/Common/Loading',
};

export const IsLoading: React.FC = () => (
  <Loading loading={true} data={null}>
    {(data) => <p>{data}</p>}
  </Loading>
);

export const HasLoaded: React.FC = () => (
  <Loading loading={false} data="Loaded">
    {(data) => <p>{data}</p>}
  </Loading>
);

export const HasError: React.FC = () => (
  <Loading loading={false} data={null} error="An error occured.">
    {(data) => <p>{data}</p>}
  </Loading>
);
