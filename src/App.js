import React from 'react'

import Box from './styledComponents/Box'
// import Text from './styledComponents/Text'
// import Link from './styledComponents/Link'
import ExpandableComponent from './ExpandableComponent'

const INPUT = { id: "8947b61f-4386-4ead-ab52-00200a446140", title: "Hello, world!", version: 4.0, public: true }

const App = () => (
  <Box>
    <ExpandableComponent isOpenByDefault input={INPUT} />
  </Box>
)

export default App;
