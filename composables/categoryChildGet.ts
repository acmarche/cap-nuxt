export default (categorySelected: Number) => {
    const {
        pending: pendingChilds,
        data: childs,
        error: errorChilds
    } = useLazyFetch(
        `http://api.local/bottin/categories/byparent/${categorySelected}`, {
            /* Changing the id will trigger a refetch */
            watch: [categorySelected]
        }
    );
    return {
        pendingChilds,
        childs,
        errorChilds
    };
}