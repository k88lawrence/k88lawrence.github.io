/* eslint-disable */
import React, { useState } from 'react'
import PropTypes from 'prop-types'

import Flex from './styledComponents/Flex'
import Text from './styledComponents/Text'

const ExpandableComponent = ({ isOpenByDefault, input }) => {
  const [isExpanded, setIsExpanded] = useState(isOpenByDefault)

  const ArrowButton = ({ children }) => (
    <button onClick={() => setIsExpanded(!isExpanded)} >
      {children}
    </button>
  )


  const braces = (typeof input === 'object') ? ['{', '}'] : ['[', ']']

  if (!isExpanded) {
    return (
      <Flex display="flex">
        <ArrowButton>▶</ArrowButton>
        <Text>{braces[0]}</Text>
        <Text>...</Text>
        <Text>{braces[1]}</Text>
      </Flex>
    )
  }

  return (
    <>
      <Flex display="flex">
        <ArrowButton>▼</ArrowButton>
        <Text>{braces[0]}</Text>
      </Flex>

      <Flex display="flex" flexDirection="column" ml="24px">
        {Object.entries(input).map(([key, value]) => {
          return <Text key={key}>{key}: {value.toString()}</Text>
        })}
      </Flex>
      <Text>{braces[1]}</Text>
    </>

  )
}

ExpandableComponent.propTypes = {
  isOpenByDefault: PropTypes.bool,
  // input: PropTypes.oneOf([PropTypes.array, PropTypes.object])
  input: PropTypes.object
}

export default ExpandableComponent