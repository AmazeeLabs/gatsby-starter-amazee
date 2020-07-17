import React, { ReactNode } from 'react';
import { useTranslation } from 'react-i18next';

export interface LoadingProps<TData> {
  data?: TData | null;
  loading: boolean;
  error?: string;
  children: (data: TData) => ReactNode;
}

export function Loading<TData>(props: LoadingProps<TData>) {
  const { t } = useTranslation();
  return (
    <>
      {props.error && <p>{props.error}</p>}
      {props.loading && <p>{t('Loading ...')}</p>}
      {props.data && props.children(props.data)}
    </>
  );
}
