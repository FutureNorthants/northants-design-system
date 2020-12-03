module.exports = (componentName) => ({
  content: `
export interface ${componentName}Props {
  /**
   * What is this?
   */
  foo: string;
}
`,
  extension: `.types.ts`
});
