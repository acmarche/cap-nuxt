export default (path: Array<Object>): Array<String> => {

    let root = '/secteurs'
    let breadcrumb:Array<String> = []

    breadcrumb[0] = `${root}/${path[0].slug}`
    breadcrumb[1] = `${breadcrumb[0]}/${path[1].slug}`

    return breadcrumb
}