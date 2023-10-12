/* eslint-disable no-console */
const fs = require('fs')

const COMPONENT_FOLDER_PATH = `${process.cwd()}/components`

const FIRST_PARAMETER = process.argv[2] || null
const SECOND_PARAMETER = process.argv[3] || null

if (!FIRST_PARAMETER) {
  console.log(
    '[Component Creator]: Please provide a component type and name or component name only. Check the README for more information.'
  )
  process.exit(1)
}

// for creating global components
if (FIRST_PARAMETER && !SECOND_PARAMETER) {
  const COMPONENT_NAME = FIRST_PARAMETER
  const COMPONENT_PATH = `${COMPONENT_FOLDER_PATH}/${COMPONENT_NAME}`

  // check if component already exists
  if (fs.existsSync(COMPONENT_PATH)) {
    console.log('[Component Creator]: Component already exists')
    process.exit(1)
  }

  // create component folder
  fs.mkdirSync(COMPONENT_PATH)

  // create component files from template folder
  const TEMPLATE_FOLDER_PATH = `${process.cwd()}/scripts/create-component/templates`

  // create component
  console.log(
    `[Component Creator]: Creating components/${COMPONENT_NAME}/${COMPONENT_NAME}.tsx`
  )

  const COMPONENT_TEMPLATE_FILE = fs.readFileSync(
    `${TEMPLATE_FOLDER_PATH}/ComponentName.tsx`,
    'utf8'
  )

  const COMPONENT = COMPONENT_TEMPLATE_FILE.replace(
    /ComponentName/g,
    COMPONENT_NAME
  )

  fs.writeFileSync(`${COMPONENT_PATH}/${COMPONENT_NAME}.tsx`, COMPONENT, 'utf8')

  // create component styles
  console.log(
    `[Component Creator]: Creating components/${COMPONENT_NAME}/${COMPONENT_NAME}.scss`
  )

  // write empty file
  fs.writeFileSync(
    `${COMPONENT_PATH}/${COMPONENT_NAME}.scss`,
    '// add styles here'
  )

  // append component styles to _components.scss
  console.log(
    `[Component Creator]: Appending components/${COMPONENT_NAME}.scss to components/_components.scss`
  )

  const COMPONENT_TYPE_STYLES_FILE = fs.readFileSync(
    `${COMPONENT_FOLDER_PATH}/_components.scss`,
    'utf8'
  )

  // append component styles
  const COMPONENT_TYPE_STYLES = `${COMPONENT_TYPE_STYLES_FILE.replace(
    /(\r\n|\n|\r)+$/,
    ''
  )}
@import "./${COMPONENT_NAME}/${COMPONENT_NAME}";`

  fs.writeFileSync(
    `${COMPONENT_FOLDER_PATH}/_components.scss`,
    COMPONENT_TYPE_STYLES
  )

  // create index file
  console.log(
    `[Component Creator]: Creating components/${COMPONENT_NAME}/index.ts`
  )

  const COMPONENT_INDEX_TEMPLATE_FILE = fs.readFileSync(
    `${TEMPLATE_FOLDER_PATH}/index.ts`,
    'utf8'
  )

  // replace ComponentName
  const COMPONENT_INDEX = COMPONENT_INDEX_TEMPLATE_FILE.replace(
    /ComponentName/g,
    COMPONENT_NAME
  )

  fs.writeFileSync(`${COMPONENT_PATH}/index.ts`, COMPONENT_INDEX)

  // finish
  console.log('[Component Creator]: Component created successfully')
}

// for creating element, low or high components
else if (FIRST_PARAMETER && SECOND_PARAMETER) {
  let COMPONENT_TYPE = FIRST_PARAMETER
  const COMPONENT_NAME = SECOND_PARAMETER

  // check if component type is valid
  if (
    COMPONENT_TYPE !== 'element' &&
    COMPONENT_TYPE !== 'low' &&
    COMPONENT_TYPE !== 'high'
  ) {
    console.error(
      "[Component Creator]: Invalid component type. Please use 'element', 'low' or 'high'"
    )
    process.exit(1)
  }

  // check if component name not null
  if (!COMPONENT_NAME) {
    console.log('[Component Creator]: Please provide a component name')
    process.exit(1)
  }

  // if element, change to elements
  if (COMPONENT_TYPE === 'element') {
    COMPONENT_TYPE = 'elements'
  }

  // create component type folder if it doesn't exist
  if (!fs.existsSync(`${COMPONENT_FOLDER_PATH}/_${COMPONENT_TYPE}`)) {
    fs.mkdirSync(`${COMPONENT_FOLDER_PATH}/_${COMPONENT_TYPE}`)
  }

  const COMPONENT_PATH = `${COMPONENT_FOLDER_PATH}/_${COMPONENT_TYPE}/${COMPONENT_NAME}`

  // check if component already exists
  if (fs.existsSync(COMPONENT_PATH)) {
    console.log('[Component Creator]: Component already exists')
    process.exit(1)
  }

  // create component folder
  fs.mkdirSync(COMPONENT_PATH)

  // create component files from template folder
  const TEMPLATE_FOLDER_PATH = `${process.cwd()}/scripts/create-component/templates`

  // create component
  console.log(
    `[Component Creator]: Creating components/_${COMPONENT_TYPE}/${COMPONENT_NAME}/${COMPONENT_NAME}.tsx`
  )

  const COMPONENT_TEMPLATE_FILE = fs.readFileSync(
    `${TEMPLATE_FOLDER_PATH}/ComponentName.tsx`,
    'utf8'
  )

  const COMPONENT = COMPONENT_TEMPLATE_FILE.replace(
    /ComponentName/g,
    COMPONENT_NAME
  )

  fs.writeFileSync(`${COMPONENT_PATH}/${COMPONENT_NAME}.tsx`, COMPONENT)

  // create component styles
  console.log(
    `[Component Creator]: Creating components/_${COMPONENT_TYPE}/${COMPONENT_NAME}/${COMPONENT_NAME}.scss`
  )

  // write empty file
  fs.writeFileSync(
    `${COMPONENT_PATH}/${COMPONENT_NAME}.scss`,
    '// add styles here'
  )

  // append component styles to _componenttype.scss
  console.log(
    `[Component Creator]: Appending components/_${COMPONENT_TYPE}/${COMPONENT_NAME}.scss to components/_${COMPONENT_TYPE}.scss`
  )

  // check if _componenttype.scss exists

  if (
    !fs.existsSync(
      `${COMPONENT_FOLDER_PATH}/_${COMPONENT_TYPE}/_${COMPONENT_TYPE}.scss`
    )
  ) {
    fs.writeFileSync(
      `${COMPONENT_FOLDER_PATH}/_${COMPONENT_TYPE}/_${COMPONENT_TYPE}.scss`,
      ''
    )
  }

  const COMPONENT_TYPE_STYLES_FILE = fs.readFileSync(
    `${COMPONENT_FOLDER_PATH}/_${COMPONENT_TYPE}/_${COMPONENT_TYPE}.scss`,
    'utf8'
  )

  let COMPONENT_TYPE_STYLES = ''
  // check if file is empty
  if (COMPONENT_TYPE_STYLES_FILE === '') {
    COMPONENT_TYPE_STYLES = `@import "./${COMPONENT_NAME}/${COMPONENT_NAME}.scss";`
  } else {
    COMPONENT_TYPE_STYLES = `${COMPONENT_TYPE_STYLES_FILE.replace(
      /(\r\n|\n|\r)+$/,
      ''
    )}
@import "./${COMPONENT_NAME}/${COMPONENT_NAME}.scss";`
  }

  fs.writeFileSync(
    `${COMPONENT_FOLDER_PATH}/_${COMPONENT_TYPE}/_${COMPONENT_TYPE}.scss`,
    COMPONENT_TYPE_STYLES
  )

  // create index file
  console.log(
    `[Component Creator]: Creating components/_${COMPONENT_TYPE}/${COMPONENT_NAME}/index.ts`
  )

  const COMPONENT_INDEX_TEMPLATE_FILE = fs.readFileSync(
    `${TEMPLATE_FOLDER_PATH}/index.ts`,
    'utf8'
  )

  // replace ComponentName
  const COMPONENT_INDEX = COMPONENT_INDEX_TEMPLATE_FILE.replace(
    /ComponentName/g,
    COMPONENT_NAME
  )

  fs.writeFileSync(`${COMPONENT_PATH}/index.ts`, COMPONENT_INDEX)

  // finish
  console.log('[Component Creator]: Component created successfully')
}