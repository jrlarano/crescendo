import React from 'react';
import {Link} from 'react-router-dom'

import {
  Anchor,
  Box,
  Grommet,
  Header,
  Nav,
  Menu,
  ResponsiveContext,
} from 'grommet';
import { grommet } from 'grommet/themes';

export default function Head() {
  return (
    <Grommet theme={grommet}>
      <Header background="dark-1" pad="medium">
        <Box direction="row" align="center" gap="small">
          Head
        </Box>
        <ResponsiveContext.Consumer>
          {responsive =>
            responsive === 'small' ? (
              <Menu
                label="Click me"
                items={[
                  { label: 'This is', onClick: () => {} },
                  { label: 'The Menu', onClick: () => {} },
                  { label: 'Component', onClick: () => {} },
                ]}
              />
            ) : (
              <Nav direction="row">
                <Link to="/test1">Test1</Link>
                <Link to="/test2">Test2</Link>
              </Nav>
            )
          }
        </ResponsiveContext.Consumer>
      </Header>
    </Grommet>
  );
}
