export const getTemplateFromComponentName = (componentName: string) => {
    const tag = componentName.toLowerCase();
    return `<${tag}></${tag}>`
}