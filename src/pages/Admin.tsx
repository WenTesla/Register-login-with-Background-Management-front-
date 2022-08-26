import {PageHeaderWrapper} from '@ant-design/pro-components';
import React from 'react';

const Admin: React.FC = (props) => {
  const {children} = props;
  return (
    <PageHeaderWrapper content={'这个页面只有admin权限才能看'}>
      {children}
    </PageHeaderWrapper>
  );
};

export default Admin;
