module.exports = (componentName) => ({
  content: `// Generated with util/create-component.js
import React from "react";

import { ${componentName}Props } from "./${componentName}.types";
import * as Styles from "./${componentName}.styles";

const ${componentName}: React.FC<${componentName}Props> = ({ foo }) => (
    <Styles.Container data-testid="${componentName}">{foo}</Styles.Container>
);

export default ${componentName};

`,
  extension: `.tsx`
});
