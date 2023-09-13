export default (path: Array<Object>): Array<String> => {

    let root = '/secteurs'
    let breadcrumb:Array<String> = []

    console.log(path)

    breadcrumb[0] = `${root}/${path[0].slug}`
    breadcrumb[1] = `${breadcrumb[0]}/${path[1].slug}`

    console.log(breadcrumb)
    return breadcrumb
}